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
