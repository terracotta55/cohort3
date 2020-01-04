import sys


def calc_tax(income):
    tax_rate = [0.15, 0.205, 0.26, 0.29, 0.33]
    bracket = [47630, 47629, 52408, 62704, sys.maxsize]

    tax_owed = 0
    counter = 0

    while (income > 0):
        taxable = None
        if (income > bracket[counter]):
            taxable = bracket[counter]
        else:
            taxable = income

        tax_piece = taxable * tax_rate[counter]
        income = income - taxable
        tax_owed = tax_owed + tax_piece
        counter = counter + 1

    return round(tax_owed, 2)


# print(calc_tax(47630)) # Ans: 7144.5
