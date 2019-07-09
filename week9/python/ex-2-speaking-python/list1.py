# A. match_ends
# Given a list of strings, return the count of the number of
# strings where the string length is 2 or more and the first
# and last chars of the string are the same.
# Note: python does not have a ++ operator, but += works.


def match_ends(*words):
    counter = 0
    new_words = [list(i) for i in words]
    for word in new_words:
        if (len(word) > 2 and word[0] == word[-1]):
            counter += 1
    return counter


print(match_ends("lalal", "apap", "sasas", "a"))

# B. front_x
# Given a list of strings, return a list with the strings
# in sorted order, except group all the strings that begin with 'x' first.
# e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
# ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
# Hint: this can be done by making 2 lists and sorting each of them
# before combining them.


def front_x(*words):
    x_list = [] 
    new_list=[]
    for word in words:
        if word[0]=="x":
            x_list.append(word)
        else:
            new_list.append(word)    
    return (sorted(x_list)+sorted(new_list))

print(front_x('mix', 'xyz', 'apple', 'xanadu', 'aardvark'))

# C. sort_last
# Given a list of non-empty tuples, return a list sorted in increasing
# order by the last element in each tuple.
# e.g. [(1, 7), (1, 3), (3, 4, 5), (2, 2)] yields
# [(2, 2), (1, 3), (3, 4, 5), (1, 7)]
# Hint: use a custom key= function to extract the last element form each tuple.
def sort_last(*tuples):
       return sorted(tuples, key=last)
def last(a):
    return a[-1]
  
print (sort_last((1, 7), (1, 3), (3, 4, 5), (2, 2)))



