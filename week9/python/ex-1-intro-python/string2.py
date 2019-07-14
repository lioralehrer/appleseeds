# D. verbing
# Given a string, if its length is at least 3,
# add 'ing' to its end.
# Unless it already ends in 'ing', in which case
# add 'ly' instead.
# If the string length is less than 3, leave it unchanged.
# Return the resulting string.


def verbing(s):
    if (len(s) >= 3):
        if (s[-3:] == "ing"):
            s += "ly"
        else:
            s += "ing"
    print(s)
    return s
verbing("lalalal")
verbing("laling")

# E. not_bad
# Given a string, find the first appearance of the
# substring 'not' and 'bad'. If the 'bad' follows
# the 'not', replace the whole 'not'...'bad' substring
# with 'good'.
# Return the resulting string.
# So 'This dinner is not that bad!' yields:
# This dinner is good!


def not_bad(s):
    s = s.split()
    for x in range(len(s)):
        if s[x]=="not" and s[x+1]=="bad":
           s.remove(s[x])
           s[x]="good"
           print (s)
           break 

not_bad("you are not bad here")

# staff for me
# matrix = [(6, 5, 4), (2, 4)]
# for i in range(len(matrix)):
#     for j in range(len(matrix[i])):
#         print(matrix[i][j])
# print(matrix)

# lala = {"l": "lala", "a": "haha"}
# lala["b"] = "bebe"
# print(lala)
# if False and not True:
#     print("liora")
# a = "print the string"
# for i in range(len(a)):
#     print(a[i]+",")
# b = ["print", "the", "string"]
# for w in range(len(b)):
#     print(b[w]+",")
# else:
#     print("empty")


# def fibon(n):
#     a, b = 1, 1
#     while a<n:
#         a,b = b,a+b
#         print(b)
# fibon(10) 

# my_list = [num**2 for num in range(1,12)]
# print(my_list)       