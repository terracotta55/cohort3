class Book_1:
    def __init__(self, name: str, page_count: int):
        self.name = name
        self.page_count = page_count
        self.pages_read = 0

    def __repr__(self):
        return (
            f"<Book {self.name}, read {self.pages_read} pages out of {self.page_count}>"
        )

    def read(self, pages: int):
        self.pages_read += pages
        print(
            f"You have now read {self.pages_read} pages out of {self.page_count}")


python101 = Book_1("Python 101", 50)
python101.read(35)
python101.read(50)  # Whaaaat? We need to define an error for this

# -- Errors used to prevent things from happening --


class TooManyPagesReadError(ValueError):
    pass


class Book_2:
    def __init__(self, name: str, page_count: int):
        self.name = name
        self.page_count = page_count
        self.pages_read = 0

    def __repr__(self):
        return (
            f"<Book {self.name}, read {self.pages_read} pages out of {self.page_count}>"
        )

    def read(self, pages: int):
        if self.pages_read + pages > self.page_count:
            raise TooManyPagesReadError(
                f"You tried to read {self.pages_read + pages} pages, but this book only has {self.page_count} pages."
            )
        self.pages_read += pages
        print(
            f"You have now read {self.pages_read} pages out of {self.page_count}")


python101 = Book_2("Python 101", 50)
try:
    python101.read(35)
    python101.read(
        50
    )  # This now raises an error, which has a helpful name and a helpful error message.
except TooManyPagesReadError as e:
    print(e)
