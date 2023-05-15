class Stack{
    constructor(){
        this.items = []
        this.size = 0
    }
    pop(){
        this.size--
        return this.items.pop()
    }
    push(element){
        this.size++
        this.items.push(element)
    }
    peek(){
        return this.items[this.size-1]
    }
}

function linter(input){
    let checkingStack = new Stack()
    let bracesDict = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    j = 0;
    for(let i of input){
        if(bracesDict[i]){
            checkingStack.push(i)
        }
        else if(Object.values(bracesDict).includes(i)){
            shouldMatchOpeningBrace = checkingStack.pop()
            if(bracesDict[shouldMatchOpeningBrace] != i){
                console.log("Syntax Error -- " + i + " on position " + j + " does not have a corresponding opening brace");
                return;
            }
        }
        j++;
    }
    if(checkingStack.size){
        console.log("Syntax Error -- " + checkingStack.peek() + " on position " + (j - 1) + " does not have a corresponding closing brace");
        return;
    }
    console.log("No syntax error detected, way to go");
    return;
}

linter("}")