// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }



/*
 * Complete the 'countSentences' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY wordSet
 *  2. STRING_ARRAY sentences
 */

function countSentences(wordSet, sentences) {
    let anagrams = getAnagrams(wordSet);
    let returnArr = [];
    if(anagrams.length == 0){
        sentences.forEach(sentence => {
            returnArr.push(1)
        }
            )
    }
    else{
        let numberOfSentences = 0;
        sentences.forEach(sentence=>{
            anagrams.forEach(pair=>{
                if(sentence.indexOf(pair[0]) >= 0 && sentence.indexOf(pair[1]) >= 0){
                    numberOfSentences += 4;
                }
            })
        })
        returnArr.push(numberOfSentences == 0 ? 1 : numberOfSentences)
    }
    
  return returnArr;
}

function getAnagrams(arr){
    let foundWords = "";
    let anagrams = [];
    arr.split(' ').forEach(elem=>{
        if(foundWords.indexOf(elem) >= 0){
            return;
        }
        arr.split(' ').forEach(elem2=>{
            if(elem === elem2){
                return;
            }
            if(isAnagram(elem,elem2)){
                foundWords += elem + "#" + elem2 + "#";
                anagrams.push([elem,elem2])
            }
        })
    })
    return anagrams;
}

function isAnagram(firstWord, secondWord){
    if(firstWord.length !== secondWord.length){
        return false;
    }
    let wordMap = {}
    for(let letter of firstWord){
        if(wordMap[letter]){
            wordMap[letter] +=1
        }
        else{
                wordMap[letter] = 1 
        }
    }
    for (let letter of secondWord){
        if(!wordMap[letter] || wordMap[letter] == 0){
            return false;
        }
        else{
            wordMap[letter] -= 1;
        }
    }
    return true;
}

console.log(getAnagrams("The tabs in act si  the stab and is a cat"));

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const wordSetCount = parseInt(readLine().trim(), 10);

//     let wordSet = [];

//     for (let i = 0; i < wordSetCount; i++) {
//         const wordSetItem = readLine();
//         wordSet.push(wordSetItem);
//     }

//     const sentencesCount = parseInt(readLine().trim(), 10);

//     let sentences = [];

//     for (let i = 0; i < sentencesCount; i++) {
//         const sentencesItem = readLine();
//         sentences.push(sentencesItem);
//     }

//     const result = countSentences(wordSet, sentences);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }
