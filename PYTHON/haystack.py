def find_needle(haystack,needle):
    found = 0
    for i in range(len(haystack)):
        if(haystack[i] == needle[0]):
            found = 1
            for j in range(1,len(needle)):
                if(needle[j] != haystack[i+j]):
                  found = 0
                  break
            if found == 1:
               return "Needle Found at {}".format(i)
    return "Needle was not found"

print(find_needle("very shy counterpart", "counterpart"))