def read_file_lines(fname):
    with open(fname) as file:
        for count, line in enumerate(file, 1):
            pass
    return count


def read_file_lines_2(fname):
    with open(fname) as file:
        count = 0
        for line in file:
            count = count + 1
    return count


def read_file_word(fname, word):
    with open(fname) as file:
        contents = file.read()
        count = contents.count(word)
    return count


def read_file_characters(fname):
    with open(fname) as file:
        lines = 0
        words = 0
        characters = 0
        for line in file:
            words_list = line.split()
            words = words + len(words_list)
            characters += sum(len(word) for word in words_list)
            lines = lines + 1
    return characters


def read_file_summary(fname, word):
    print(
        f"SUMMARY: The file '{fname}' contains {read_file_characters(fname)} characters in {read_file_lines(fname)} lines of code and with {read_file_word(fname, word)} occurrence(s) of the word '{word}'.")


read_file_summary('syntax_js.txt', 'else')
read_file_summary('syntax_js.txt', 'arr')
