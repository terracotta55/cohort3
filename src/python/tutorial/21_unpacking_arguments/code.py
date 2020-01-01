def multiply(*args):
    print(args)  # will print a tuple
    total = 1
    for arg in args:
        total = total * arg

    return total


print(multiply(3, 5))
print(multiply(-1))

# The asterisk takes all the arguments and packs them into a tuple.
# The asterisk can be used to unpack sequences into arguments too!


def add(x, y):
    return x + y


nums_1 = [3, 5]
print(add(*nums_1))  # instead of add(nums[0], nums[1])

# -- Uses with keyword arguments --
# Double asterisk packs or unpacks keyword arguments


def add_2(x, y):
    return x + y


nums_2 = {"x": 15, "y": 25}
print(add_2(**nums_2))

# -- Forced named parameter --


def multiply_1(*args):
    total = 1
    for arg in args:
        total = total * arg

    return total


def apply(*args, operator):
    if operator == "*":
        return multiply_1(*args)  # this parameter has to be destructured
    elif operator == "+":
        return sum(args)
    else:
        return "No valid operator provided to apply()."


print(apply(1, 3, 6, 7, operator="+"))
print(apply(1, 3, 6, 7, operator="*"))
# print(apply(1, 3, 5, "+"))  # will return an Error
