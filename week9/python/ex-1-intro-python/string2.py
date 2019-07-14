# D. verbing
# Given a string, if its length is at least 3,
# add 'ing' to its end.
# Unless it already ends in 'ing', in which case
# add 'ly' instead.
# If the string length is less than 3, leave it unchanged.
# Return the resulting string.


def verbing(s):
    if (len(s) >= 3):
        if (s[-3:-1] == "ing"):
            s += "ly"
        else:
            s += "ing"
    print(s)
    return s


verbing("lalaing")

# E. not_bad
# Given a string, find the first appearance of the
# substring 'not' and 'bad'. If the 'bad' follows
# the 'not', replace the whole 'not'...'bad' substring
# with 'good'.
# Return the resulting string.
# So 'This dinner is not that bad!' yields:
# This dinner is good!


def not_bad(s):
    # +++your code here+++
    return


# staff for me
matrix = [(6, 5, 4), (2, 4)]
for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        print(matrix[i][j])
print(matrix)

lala = {"l": "lala", "a": "haha"}
lala["b"] = "bebe"
print(lala)
if False and not True:
    print("liora")
a = "print the string"
for i in range(len(a)):
    print(a[i]+",")
b = ["print", "the", "string"]
for w in range(len(b)):
    print(b[w]+",")
else:
    print("empty")


def fibon(n):
    a, b = 1, 1
    while a<n:
        a,b = b,a+b
        print(b)
fibon(10)        