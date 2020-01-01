student = {"name": "Rolf", "grades": (89, 90, 93, 78, 90)}


def average(sequence):
    return sum(sequence) / len(sequence)


print(average(student["grades"]))

# But wouldn't it be nice if we could...
# print(student.average()) ?


class Student:
    def __init__(self):
        self.name = "Rolf"
        self.grades = (89, 90, 93, 78, 90)

    def average(self):
        return sum(self.grades) / len(self.grades)


student = Student()
print(student.average())
# Identical to Student.average(student)


# -- Parameters in __init__ --


class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades

    def average(self):
        return sum(self.grades) / len(self.grades)


student_1 = Student("Bob", (36, 67, 90, 100, 100))
student_2 = Student("Bob", (23, 67, 94, 56, 80))
print(student_1.average())
print(student_2.average())

# -- Remember *args ? --


class Student:
    def __init__(self, name, *grades):
        self.name = name
        self.grades = grades

    def average(self):
        return sum(self.grades) / len(self.grades)


student_1 = Student("Bob", 36, 67, 90, 100, 100)
student_2 = Student("Bob", 23, 67, 94, 56, 80)
print(student_1.average())
print(student_2.average())
