def recursivePrinter(upper):
    if(upper == 0):
        print(upper)
        return

    print(upper)
    return recursivePrinter(upper-1)

recursivePrinter(10)