""" Print the numbers 1 to 40 to the screen. Use a 'while' loop.
Print each number in a different line."""
num = 1
while num <= 40:
    print(num)
    num += 1

""" Print the numbers 1 to 40 to the screen. Use a 'for' loop.
Print each number in a different line."""
for x in range(1, 41):
    print(x)

"""For every number between 1…100 (inclusive), print “Fizz” if the number is divisible by 3, “Buzz” if it’s divisible by
5 and “FizzBuzz” if it’s divisible by both. In any other case, print the number itself"""
for number in range(1, 101):
    if number % 5 and number % 3:
        print("FizzBuzz")
    elif number % 5:
        print("Fizz")
    elif number % 3:
        print("Buzz")
    else:
        print(number)
