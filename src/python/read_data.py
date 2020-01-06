import csv

file = 'Community_Census_2018.csv'


def read_data_sum():
    with open(file, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        total = 0

        for row in csv_reader:
            total = sum(float(row["RES_CNT"]) for row in csv_reader)
            return total


print('Total Calgary Population:\t', read_data_sum())
print("======================================================")


def read_data_count_rows():
    number_rows = 0
    with open(file) as csv_file:
        number_rows += sum(1 for line in csv_file)
        return number_rows - 1  # compensate for initialization


print('Number of rows:\t', read_data_count_rows())
print("======================================================")


def read_data_list_all():
    with open(file, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            print(row['NAME'], row['CLASS'], row['CLASS_CODE'],
                  row['SECTOR'], row['RES_CNT'])


read_data_list_all()
print("======================================================")


def read_data_list_select():
    with open(file, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            for i in row['NAME'].split():
                if i.startswith("E"):
                    print(row['NAME'], row['CLASS'], row['CLASS_CODE'],
                          row['SECTOR'], row['RES_CNT'])


read_data_list_select()
print("======================================================")
