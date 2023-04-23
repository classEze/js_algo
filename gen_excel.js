function downloadExcelFile(){
    downloadableData = downloadableData.map(function(item){
        return {...item, DateWon:new Date(Number(item.DateWon.substring(item.DateWon.indexOf('(') + 1, item.DateWon.indexOf(')')))).toDateString()}
    })

    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            };
            var result = innerValue.replace(/["‘’]/g, '""');

            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        return finalVal + '\n';
    };

var csvFile = '';
for (var i = 0; i < downloadableData.length; i++) {
    if (i == 0) csvFile += processRow(Object.keys(downloadableData[i]));
    csvFile += processRow(Object.values(downloadableData[i]));
}

var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, "approved_requests_" + new Date().toISOString() );
} else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
        // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "approved_requests_" + new Date().toISOString() + ".csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
}