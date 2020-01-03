def checkType(inputValue):
    return type(inputValue)


def ifElse(name):
    if type(name) is str:
        return f"Hello {name}"
    else:
        return "I don't know you"


def paramReturns(para1, para2):
    return f"{para1}, {para2}"


def listAddToFront(a_list, elem):
    a_list = a_list.insert(0, elem)
    return a_list


def listAddToEnd(a_list, elem):
    a_list = a_list.append(elem)
    return a_list


def listUpdate(a_list, index, value):
    a_list[index] = value
    return a_list


def forLoop(smallNum, largeNum):
    result = 0
    for i in range(smallNum, largeNum+1):
        result += i
    return result


def reverseStrSlicing(a_str):
    stringlength = len(a_str)  # calculate length of the list
    slicedString = a_str[stringlength::-1]  # slicing
    return slicedString  # print the reversed string


def reverseStrJoin(a_str):
    reversed = ''.join(reversed(a_str))
    # .join() method merges all of the characters resulting from the reversed iteration into a new string
    return reversed  # print the reversed string


def forInDict(a_dict):
    for key, value in a_dict.items():
        a_dict[key] = round(value * 0.9, 2)  # Apply a 10% discount
    return a_dict


def doubleNumberList(a_list):
    doubled = map(lambda x: x * 2, a_list)
    return doubled


def whileLoopDemo(a_list):
    i = 0
    result = 0
    length = len(a_list)
    while i < length:
        result += a_list[i]
    return result


def retrieveValue(a_dict, to_find):
    for value in a_dict.values():
        if value == to_find:
            return "We found it!!!"
        else:
            return "Not here :("


print(checkType(3.142))
print(ifElse("Jimmy"))
print(paramReturns(45, "Jones"))
print(listAddToFront([1, 3, 3, 7], 23))
