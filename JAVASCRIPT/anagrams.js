function generateAnagrams(word) {
    // Base case: If the word has only one or zero characters, return an array with the word itself
    if (word.length <= 1) {
      return [word];
    }
  
    // Array to store the resulting anagrams
    const anagrams = [];
  
    // Loop through each character in the word
    for (let i = 0; i < word.length; i++) {
      // Extract the current character
      const currentChar = word[i];
  
      // Exclude the current character from the remaining word
      const remainingWord = word.slice(0, i) + word.slice(i + 1);
  
      // Recursively generate anagrams for the remaining word
      const subAnagrams = generateAnagrams(remainingWord);
  
      // Append the current character to each sub-anagram and add them to the result
      for (let j = 0; j < subAnagrams.length; j++) {
        anagrams.push(currentChar + subAnagrams[j]);
      }
    }
  
    return anagrams;
  }
  
  // Example usage:
  const inputWord = "cat";
  const result = generateAnagrams(inputWord);
  console.log(result);
  