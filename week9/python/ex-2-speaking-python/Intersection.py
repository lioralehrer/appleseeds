def intersection(list1,list2):
    list3 = [i for i in list1 if i in list2] 
    return list3 
  
list1 = [4, 9, 1, 17, 11, 26, 28, 54, 69] 
list2 = [9, 9, 74, 21, 45, 11, 63, 28, 26] 
print(intersection(list1, list2))