# Write a recursive function that will find the maximum in a list of numbers.


def max_num(num_list, index):
    if index ==0:
        return 0
    if index == 1:
        return num_list[0]
    elif num_list[index-1] > max_num(num_list[:-1], index-1):
        return num_list[index-1]
    else:
        return max_num(num_list[:-1], index-1)


print(max_num([1, 2, 3, 2, 1], 5))
