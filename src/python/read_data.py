import csv


def read_data_count():
    with open('Community_Census_2018.csv', 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        total = 0

        for row in csv_reader:
            total = sum(float(row["RES_CNT"]) for row in csv_reader)
            print(total)


read_data_count()
print("======================================================")


def read_data_list_all():
    with open('Community_Census_2018.csv', 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            print(row['NAME'], row['CLASS'], row['CLASS_CODE'],
                  row['SECTOR'], row['RES_CNT'])


read_data_list_all()
print("======================================================")


def read_data_list_select():
    with open('Community_Census_2018.csv', 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            for i in row['NAME'].split():
                if i.startswith("E"):
                    print(row['NAME'], row['CLASS'], row['CLASS_CODE'],
                          row['SECTOR'], row['RES_CNT'])


read_data_list_select()
print("======================================================")
