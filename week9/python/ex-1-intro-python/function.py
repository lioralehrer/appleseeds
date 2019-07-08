number = input("insert 5-digits number: ")


def blabla(num):
    print("your number is: "+num)
    newNum = str(num)
    print ("Digits in your number are: ")
    for i in range(0, 5):
      print(newNum[i])
    print("Sum of digits:")
    print(int(newNum[0])+int(newNum[1])+int(newNum[2])+int(newNum[3])+int(newNum[4]))
blabla(number)
