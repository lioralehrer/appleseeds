# Write a method that gets a list and returns the sum of it.
#  Validate you’re only summing the numeric elements (not
# strings, dictionaries etc.)


def sum_num(*numbers):
    sum = 0
    for i in numbers:
        if (isinstance(i,(int, float))):
            sum += i
    return(sum)
print(sum_num(1, 2, 3, 6.8, 5))
