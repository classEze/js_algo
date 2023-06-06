def genAnagrams(word):

    if len(word) <= 1 :
        return [word]
    
    collection = []
    current_char = word[0]
    sub_anagrams = genAnagrams(word[1:])

    for one_anagram in sub_anagrams :
        for i in range(len(one_anagram) + 1) :
            collection.append(one_anagram[0:i] + current_char + one_anagram[i:])
    return collection
print(genAnagrams("abc"))


def genAnagram(word) :
    if(len(word) == 1) :
        return word[0]
    
    currentChar = word[0]
    collection = []
    subAnagrams = genAnagram(word[1:])

    for oneSub in subAnagrams :
        for i in range(len(oneSub) + 1) :
            collection.append(oneSub[0:i] + currentChar + oneSub[i:])

    return collection

print(genAnagram("cab"))
