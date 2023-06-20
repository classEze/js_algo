import json


class Node :
    def __init__(self,value) -> None:
        self.value = value
        self.next = None

    def stringify(self) :
        return "Type: Node, Value:{}, Next:{}".format(self.value, self.next)
      

class LinkedList :

    def __init__(self,headValue) :
        self.head = Node(headValue)

    def append(self,value) :
        newNode = Node(value)
        newNode.next = self.head
        self.head = newNode

    def delete(self, index) :
        currentNode = self.head
        if index == 0 :
            self.head = currentNode.next
        else :
            for i in range(index - 1) :
                currentNode = currentNode.next
                if(currentNode == None) :
                    print("Error - Given Index Not Occupied")
                    return
            tempNode = currentNode.next
            currentNode.next = tempNode.next
                
    def printList(self) :
        currentNode = self.head
        liner = ""

        while ( currentNode ) :
            liner +=  currentNode.value + "#_"
            currentNode = currentNode.next
        print(liner)

    def reverse(self) :
        prevNode = None
        currNode = self.head

        while currNode.next :
            nextNode = currNode.next
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode


        currNode.next = prevNode
        self.head = currNode

    def read(self,index) :
        currNode = self.head
        for i in range(index) :
         currNode = currNode.next

        return currNode




myLinkedList = LinkedList("initHead")
myLinkedList.append("firstAdd")
myLinkedList.append("secondAdd")
myLinkedList.append("thirdAdd")
myLinkedList.append("fourthAdd")
myLinkedList.append("fifthAdd")
myLinkedList.append("sixthAdd")

myLinkedList.reverse()


deletingNode = myLinkedList.read(3)
nextNode = deletingNode.next
deletingNode.value = nextNode.value
deletingNode.next = nextNode.next

# print(myLinkedList.read(3).stringify())
myLinkedList.printList()




    

            



  

