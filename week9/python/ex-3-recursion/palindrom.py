def check_palindrom(num):
    temp = str(num)
    if len(temp) <=1:
        return True
    if temp[0]== temp[len(temp)-1]:
        return check_palindrom(temp[1:len(temp)-1])
    else:
        return False
print (check_palindrom(83538)) 
print (check_palindrom(8338)) 
print (check_palindrom(83))  
