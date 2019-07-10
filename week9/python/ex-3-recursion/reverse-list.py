# Write 2 recursive functions that will reverse a list of numbers.
# 1. you are not allowed to change the original list. You will return a new list.
def reverse_list01(list):
    list = str(list)
    new_list = []
    if  len(new_list)==len(list):
        return new_list
    return new_list.append((reverse_list01(list[:-1])))
print(reverse_list01([11, 23, 45, 67, 89]))

# 2. you are not allowed to create new lists, you need to return the original list.
def reverse_list02(list):
    if len(list) == 0:
         return []
    return [list[-1]] + reverse_list02(list[:-1])
print(reverse_list02([11, 23, 45, 67, 89]))    
