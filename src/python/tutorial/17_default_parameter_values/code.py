def add(x, y=3):
    print(x + y)


add(5)  # 8
add(5, 10)  # 15
'''
add(y=3)  # Error, missing x
'''
# -- Order of default parameters --

# def add(x=5, y):  # Not OK, default parameters must go after non-default
#     print(x + y)

# -- Don't use variables as default value! --
default_y = 3


def add_two_numbers(x, y=default_y):
    sum = x + y
    print(sum)


add_two_numbers(10)  # 13

default_y = 5
print(default_y)  # 5

add(10)  # 13, even though we re-defined default_y
