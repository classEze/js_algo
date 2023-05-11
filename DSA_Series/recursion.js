function recurser(value){
    if(value > 0){
    recurser(value - 1)
    console.log(value)
    console.log( "Currently working with " + value)
}    
}

recurser(5)