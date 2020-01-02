import functools  # note this.
user = {"username": "jose", "access_level": "guest"}


def make_secure(func):
    def secure_function():
        if user["access_level"] == "admin":
            return func()
        else:
            return f"No admin permissions for {user['username']}."

    return secure_function


@make_secure
def get_admin_password():
    return "1234"


print(get_admin_password())

# -- keeping function name and docstring --


user = {"username": "jose", "access_level": "admin"}


def make_secure(func):
    @functools.wraps(func)  # to preserve the name of get_admin_password
    def secure_function():
        if user["access_level"] == "admin":
            return func()
        else:
            return f"No admin permissions for {user['username']}."

    return secure_function


@make_secure  # creates get_admin_password and runs make_secure at one go
def get_admin_password():
    return "1234"


print(get_admin_password())
