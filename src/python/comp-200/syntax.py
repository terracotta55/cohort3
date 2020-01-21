def checkType(inputValue):
    return type(inputValue).__name__


def ifElse(name):
    if type(name) is str:
        return f"Hello {name}"
    else:
        return "I don't know you"


def paramReturns(para1, para2):
    return f"{para1}, {para2}"


def listAddToFront(a_list, elem):
    a_list.insert(0, elem)
    return a_list


def listAddToEnd(a_list, elem):
    a_list.append(elem)
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
    reversedStr = ''.join(reversed(a_str))
    # .join() method merges all of the characters resulting from the reversed iteration into a new string
    return reversedStr  # print the reversed string


def forInDict(a_dict):
    for key, value in a_dict.items():
        a_dict[key] = round(value * 0.9, 2)  # Apply a 10% discount
    return a_dict


def doubleNumberList(a_list):
    doubled = list(map(lambda x: x * 2, a_list))
    return doubled


def doubleNumberList_2(a_list):
    doubled = []
    for x in a_list:
        doubled.append(x*2)
    return doubled


def whileLoopDemo(a_list):
    i = 0
    result = 0
    length = len(a_list)
    while i < length:
        result = result + a_list[i]
        i = i+1
    return result


def dictValue(a_dict, to_find):
    for value in a_dict.values():
        if value == to_find:
            return "We found it!!!"

    else:
        return "Not here!!!"


# print(checkType(3.142))
# print(ifElse("Jimmy"))
# print(paramReturns(45, "Jones"))
# print(listAddToFront([1, 3, 5, 7], 23))
# print(listAddToEnd([1, 3, 5, 7], 23))
# print(listUpdate([1, 3, 5, 7, 9], 2, 105))
# print(forLoop(31, 40))
# print(reverseStrSlicing("cool runnings"))
# print(reverseStrJoin("have fun learning"))
# print(forInDict({'apple': 1.50, 'orange': 2.00, 'banana': 3.50}))
# print(doubleNumberList([1, 3, 5, 7, 9]))
# print(doubleNumberList_2([2, 4, 6, 8, 10]))
# print(whileLoopDemo([2, 4, 6, 20, 91]))
# print(dictValue({'apple': 1.55, 'orange': 2.05, 'banana': "ball"}, 2.05))
