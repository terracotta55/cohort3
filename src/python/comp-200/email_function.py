def email(first_name, last_name):
    if type(first_name) is not str or type(last_name) is not str:
        return "please use strings"
    return first_name.lower() + "." + last_name.lower() + "@evolveu.ca"
