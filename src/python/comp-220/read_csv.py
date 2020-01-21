import csv
from collections import defaultdict

file = 'census_data.csv'


def read_data_sum():
    with open(file, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        total = 0

        for row in csv_reader:
            total = sum(float(row["RES_CNT"]) for row in csv_reader)
            return total


def read_data_count_rows():
    number_rows = 0
    with open(file) as csv_file:
        number_rows += sum(1 for line in csv_file)
        return number_rows - 1  # compensate for initialization


total_pop = read_data_sum()
total_rows = read_data_count_rows()


def read_data_group():
    with open(file, 'r') as csv_file:
        census_data = csv.DictReader(csv_file)
        by_class = defaultdict(int)
        # Residential,Industrial,Major Park,Residual Sub Area
        by_sector = defaultdict(int)
        # CENTRE,SOUTH,NORTHEAST,NORTHWEST,NORTH,SOUTHEAST,EAST,WEST
        '''
        A defaultdict(int) allows you to use keys that aren't defined yet and automatically assigns a value of 0 to them. So you can just do cities["Bolton"] += 10 and it will either create a new key "Bolton" with a value of 10 or add 10 to the value if the key already exists. If you did that with a normal dict, you'd get lots of KeyErrors.
        '''
        for row in census_data:
            by_class[row["CLASS"]] += int(row["RES_CNT"])
            by_sector[row["SECTOR"]] += int(row["RES_CNT"])
        with open('census_report.txt', 'w') as out_file:
            output_writer = csv.writer(out_file)
            output_writer.writerow(["CLASS\t\tRES_CNT"])
            output_writer.writerow(["======================================"])
            output_writer.writerows([f"{one_class}\t{by_class[one_class]}"]
                                    for one_class in by_class)
            output_writer.writerow("")
            output_writer.writerow(["SECTOR\t\tRES_CNT"])
            output_writer.writerow(["======================================"])
            output_writer.writerows([f"{one_sector}\t{by_sector[one_sector]}"]
                                    for one_sector in by_sector)
            output_writer.writerow(["======================================"])
            output_writer.writerow([f"Total Population:\t {total_pop}"])
            output_writer.writerow(["======================================"])
            output_writer.writerow([f"Total Rows:\t {total_rows}"])
            output_writer.writerow(["======================================"])


read_data_group()


def read_data_list_all():
    with open(file, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            print(row['NAME'], row['CLASS'], row['CLASS_CODE'],
                  row['SECTOR'], row['RES_CNT'])


# read_data_list_all()


def read_data_list_select():
    with open(file, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            for i in row['NAME'].split():
                if i.startswith("E"):
                    print(row['NAME'], row['CLASS'], row['CLASS_CODE'],
                          row['SECTOR'], row['RES_CNT'])


# read_data_list_select()
