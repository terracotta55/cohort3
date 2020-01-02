from dataclasses import dataclass, field
from typing import List


class Student:
    def __init__(self, name: str, grades: List[int] = None):
        self.name = name
        self.grades = grades or []

    def take_exam(self, result):
        self.grades.append(result)


bob = Student("Bob")
bob.take_exam(90)
bob.take_exam(85)
bob.take_exam(92)
bob.take_exam(100)
print(bob.grades)
print(bob)  # prints __main__.Student object

# -- as dataclass --


@dataclass
class Student:
    name: str
    grades: List[int] = field(
        default_factory=list
    )  # if we want to run a function, use default_factory and it will run the function to generate the default

    def take_exam(self, result):
        self.grades.append(result)


anna = Student("Anna")

anna.take_exam(91)
anna.take_exam(92)
anna.take_exam(93)
anna.take_exam(95)
anna.take_exam(100)
print(anna.grades)
print(anna)
