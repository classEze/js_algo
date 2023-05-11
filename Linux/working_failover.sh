#! /bin/bash

#Configuration variables
ORIGINAL_MASTER="192.168.2.23"
CURRENT_MASTER="192.168.2.23"
MACHINES=("192.168.2.10202" "192.168.2.21" "192.168.2.22" "192.168.2.23")
PG_CONF_HOME="/etc/postgresql/14/main"
PG_DATA_HOME="/var/lib/postgresql/14/main"
STANDBY_PATH="$PG_DATA_HOME/standby.signal"
RECOVERY_FILE="$PG_DATA_HOME/postgresql.auto.conf"
FILE_PATH="$(readlink -f "${BASH_SOURCE:-$0}")"
DB_USER=postgres
DB_NAME=postgres

echo " Last Ran: $(date) " > cron_log

# Helper functions
is_postgres_running() {
  pgrep -x "postgres" >/dev/null 2>&1
}

is_master() {
  psql -Atc "SELECT pg_is_in_recovery()" | grep -q -v '^t'
}

is_master_up() {

  if [ "$CURRENT_MASTER" = "$ORIGINAL_MASTER" ]; then
    if is_postgres_running && is_master; then
      return 0
    else
      return 1
    fi
  else
    if ssh postgres@"$CURRENT_MASTER" "$(typeset -f is_postgres_running); is_postgres_running" && ssh postgres@"$CURRENT_MASTER" "$(typeset -f is_master); is_master"; then
      return 0
    else
      return 1
    fi
  fi
}

promote_standby() {
  local node="$1"

  echo "Promoting standby $node to master"
  if [ "$node" = "$ORIGINAL_MASTER" ]; then
    pg_ctlcluster 14 main promote
  else
    ssh postgres@"$node" pg_ctlcluster 14 main promote
  fi
  sed -i "s/^CURRENT_MASTER=\"192.*/CURRENT_MASTER=\"$node\"/" "$FILE_PATH"
  CURRENT_MASTER="$node"
  sleep 2
}

configure_standby() {
  local node="$1"
  local current_master="$2"
  local recovery_file="$3"
  local standby_path="$4"

  echo "Configuring standby $node to follow new master $current_master"
  sed -i "s/^recovery_target_timeline=.*/recovery_target_timeline='latest'/" "$recovery_file"
  sed -i "s/^primary_conninfo=.*/primary_conninfo='host=$current_master port=5432 user=replicator password=test123 sslsni=1 sslcompression=0 sslmode=prefer channel_binding=prefer target_session_attrs=any'/" "$recovery_file"
  touch "$standby_path"
  chown postgres:postgres "$standby_path" "$recovery_file"
  chmod 600 "$standby_path" "$recovery_file"
  pg_ctlcluster 14 main restart
  sleep 3
}


# Check the status of the master node
if is_master_up; then
  echo "Master $CURRENT_MASTER is up and running"
else
  # Master node is down
  echo "Master $CURRENT_MASTER is down"

  for node in "${MACHINES[@]}"; do
    if pg_isready -h "$node" -U "$DB_USER" -d "$DB_NAME" -t 1 >/dev/null 2>&1; then
      # Found a live node, promote it to master
      promote_standby "$node"
      break
    fi
  done

  # Configure the other slaves to follow the new master
  for node in "${MACHINES[@]}"; do
    if [ "$node" != "$CURRENT_MASTER" ] && ping -c1 -w1 "$node" >/dev/null 2>&1; then
      if [ "$node" = "$ORIGINAL_MASTER" ]; then
        configure_standby "$node" "$CURRENT_MASTER" "$RECOVERY_FILE" "$STANDBY_PATH"
      else
        ssh postgres@"$node" "$(typeset -f configure_standby);configure_standby" "$node" "$CURRENT_MASTER" "$RECOVERY_FILE" "$STANDBY_PATH"
      fi
    fi
  done
  echo " ======= All good bye ======= "
  fi