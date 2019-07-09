number = input("insert 5-digits number: ")


def blabla(num):
    print("your number is: "+num)
    newNum = str(num)
    sum=0
    print ("Digits in your number are: ")
    for i in range(0, 5):
      print(newNum[i])
      sum += int(newNum[i])
    print(f"Sum of digits: {sum}")
   
blabla(number)

