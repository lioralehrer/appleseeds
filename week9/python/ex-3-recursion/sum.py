# Write a recursive function that will sum the elements of a list.
#  The function should receive 2 parameters:
# 1. the list
# 2. the current index


def sum_num0(nums,i):
    if i==len(nums)-1:
       return nums[i]
    return  nums[i]+sum_num0(nums,i+1) 
print (sum_num0([1,2,3,4,5,6],0))

assert(sum([1, 2, 3, 4, 5], 0) == 15)
assert(sum([], 0) == 0)
assert(sum([11], 0) == 11)
assert(sum([11, 0], 0) == 11)
assert(sum([11, -1], 0) == 10)