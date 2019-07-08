def donuts(num):
    if int(num) < 5:
        print(f"num of donuts: {num}")
    else:
        print("num of donuts: many")


n = input("insert number of donuts: ")
donuts(n)


def sliceString(string):
    if len(string) < 2:
        print("")
        return ""
    print(string[0]+string[1]+string[-2]+string[-1])
    return (string[0]+string[1]+string[-2]+string[-1])


newString = input("input a String:  ")
sliceString(newString)


def changeChars(str):
    print (str[0]+str[1:].replace(str[0],"*" ))
    return str[0]+str[1:].replace(str[0],"*" )
changeChars("dafddddgha")
     


