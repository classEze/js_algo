def recurso(number):
    if(number == 10 ):
        print(number)
    else :
        recurso(number+1)
        print(number)
    print("==end==")


recurso(0)