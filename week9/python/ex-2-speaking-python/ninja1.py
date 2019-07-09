# Define a function max() that takes two numbers as arguments and returns the largest of them. 
# Use the if-then-else construct available in Python. (It is true that Python has
#  the max() function built in, but writing it yourself is nevertheless a good exercise.)
def max(num1,num2):
    if num1>num2:
        return num1
    else: return num2
print (max(14,2))

# Define a function max_of_three() that takes three numbers as arguments and 
# returns the largest of them.
def max_of_three(num1,num2,num3):
    if num1>num2:
        if num1>num3:
            return num1
        else: return num3    
    elif num2>num3:
        return num2
    else: return num3
print (max_of_three(22,45,1))  

# Define a function that computes the length of a given list or string.
#  (It is true that Python has the len() function built in, 
# but writing it yourself is nevertheless a good exercise.)
def computes_len (str):
    counter=0
    for i in str:
        counter +=1
    return counter
print (computes_len("liora lehrer"))

# Write a function that takes a character (i.e. a string of length 1) 
# and returns True if it is a vowel, False otherwise.
def check_vowel (char):
    vowels=["a","i","o","e","u"]
    return any(x in vowels for x in char )
print (check_vowel("a"))
# Write a function translate() that will translate a text into "rövarspråket"
#  (Swedish for "robber's language").
#  That is, double every consonant and place an occurrence of "o" in between. 
# For example, translate("this is fun") should return the string "tothohisos isos fofunon".
def translate(str):
    return "".join(i*2+"o"for i  in str)
print (translate("This is working! Hip Hip Hooray"))    
