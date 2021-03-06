from operator import itemgetter
# itemgetter used in search function
# A first class function just means that functions can be passed as arguments to functions.


def calculate(*values, operator):
    return operator(*values)


def divide(dividend, divisor):
    if divisor != 0:
        return dividend / divisor
    else:
        return "You fool!"


# We pass the `divide` function as an argument
result = calculate(20, 4, operator=divide)
print(result)


def average(*values):
    return sum(values) / len(values)


result = calculate(10, 20, 30, 40, operator=average)
print(result)

# -- searching with first-class functions --


def search(sequence, expected, finder):
    for elem in sequence:
        if finder(elem) == expected:
            return elem
    raise RuntimeError(f"Could not find an element with {expected}")


friends = [
    {"name": "Rolf Smith", "age": 24},
    {"name": "Adam Wool", "age": 30},
    {"name": "Anne Pun", "age": 27},
]


def get_friend_name(friend):
    return friend["name"]


try:
    print(search(friends, "Bob Smith", get_friend_name))
except RuntimeError as e:
    print(e)

try:
    # -- using lambdas since this can be simple enough --
    print(search(friends, "Sarah Smith", lambda friend: friend["name"]))
except RuntimeError as e:
    print(e)

try:
    # -- or as an extra, using built-in functions --
    print(search(friends, "Rolf Smith", itemgetter("name")))
except RuntimeError as e:
    print(e)
