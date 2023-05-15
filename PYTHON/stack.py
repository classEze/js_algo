class Stack :
    def __init__(self):
         self.items = []
         self.size = 0

    def push(self,elem):
         self.items.append(elem)
         self.size += 1
         return
         
    def pop(self):
         self.size -= 1
         return self.items.pop()
         
    
    def peek(self):
         return self.items[self.size-1]
    
    def toString(self):
         stackString = ""
         while self.size:
              stackString += self.pop()
         return stackString
                   
                   

def reverseString(input):
     myStack = Stack()
     for i in input:
          myStack.push(i)
     return myStack.toString()


print(reverseString("deity"))
     
     