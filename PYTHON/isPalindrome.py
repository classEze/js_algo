import math
from tkinter import FALSE


def isPalindrome(word):
    for index in range(math.floor(len(word)/2) + 1):
        if(word[index] != word[len(word)-1-index]):
            return False
    return True

print(isPalindrome("pop"))

