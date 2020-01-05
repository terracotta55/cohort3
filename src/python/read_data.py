import csv


def read_data_census():
    with open('Community_Census_2018.csv', 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)

        for row in csv_reader:
            print(row['NAME'], row['CLASS'], row['SECTOR'], row['RES_CNT'])


read_data_census()
# total = sum(float(row["RES_CNT"]) for row in csv_reader)
# print(total)
