def add_one(x, y):
    print(x + y)


add_one(5, 8)  # 13
result = add_one(5, 8)  # 13
print(result)  # Will print "None" because there's no return in function

# If we want to get something back from the function, it must return a value.
# All functions return _something_. By default, it's None.

# -- Returning values --


def add_two(x, y):
    return x + y


add_two(1, 2)  # No print within function definition
result = add_two(2, 3)
print(result)  # 5

# -- Returning terminates the function --
# -- Nothing runs after the first return statement --


def add_three(x, y):
    return
    print(x + y)
    return x + y


result = add_three(5, 8)  # Nothing printed out
print(result)  # None, as is the first return

# -- Returning with conditionals --


def divide(dividend, divisor):
    if divisor != 0:
        return dividend / divisor
    else:
        return "Nooooo!"


result = divide(15, 3)
print(result)  # 5

another = divide(15, 0)
print(another)  # Nooooo!
