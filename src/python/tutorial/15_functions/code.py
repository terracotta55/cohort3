# -- Define the function --
def hello():
    print("Hello!")


# -- Call the function --
hello()

# -- Defining vs. calling --
# It's still all sequential!


def user_age_in_seconds():
    user_age = int(input("Enter your age: "))
    age_seconds = user_age * 365 * 24 * 60 * 60
    print(f"Your age in seconds is {age_seconds}.")


print("Welcome to the age in seconds program!")
user_age_in_seconds()
print("Goodbye!")

# -- Don't use reserved python function name, it's confusing --
# -- Don't call it within itself, also confusing --
'''
def print():
    print("Hello, world!")
'''
# above will return error once print() is called because
# because print() takes no arguments


# -- Don't reuse global variables inside function def! --
friends = ["Rolf", "Bob"]


def add_friend():
    friend_name = input("Enter your friend name: ")
    # friends = friends + [friend_name] # won't work
    new_friends = friends + [friend_name]
    print(new_friends)  # Another way of adding to a list!


add_friend()  # will return ['Rolf', 'Bob', 'Harry']
print(friends)  # Always ['Rolf', 'Bob']

# -- Can't call a function before defining it --
# say_hello()
# this won't work


def say_hello():
    print("Call me after defining me, not before!")


say_hello()

# -- Remember function body only runs when the function is called --


def add_friend():
    friends.append("Rudolf")


friends = []
add_friend()

print(friends)  # [Rudolf]
