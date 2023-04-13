function compressedString(message) {
    let newString = "";
    for (let i = 0; i < message.length; i++){
        if(Number(newString[newString.length - 1]) && newString[newString.length -2] == message[i]){
            newString = newString.substring(0, newString.length - 1) + (Number(newString[newString.length - 1]) + 1);
        }
        else if(newString[newString.length - 1] == message[i]){
            newString += 2;
        }
        else{
            newString += message[i];
        }
    }
    return newString;
}

console.log(compressedString("maadameeehaha"));