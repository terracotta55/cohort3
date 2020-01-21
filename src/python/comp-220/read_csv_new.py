import csv

file = 'census_data.csv'


def read_data_line():
    with open(file, 'r') as csv_file:
        first_row = csv_file.readline()
        # .readline() reads a single line from the file
        first_row = first_row.split(',')
        # .split() splits a string into a list where each word is an item
        INDEX_CLASS = first_row.index('CLASS')
        INDEX_SECTOR = first_row.index('SECTOR')
        INDEX_RES_CNT = first_row.index('RES_CNT')
        dict_classes = {}
        dict_sectors = {}
        number_rows = 0

        for row in csv_file:
            row = row.split(',')
            dict_classes[row[INDEX_CLASS]] = dict_classes.get(
                row[INDEX_CLASS], 0) + float(row[INDEX_RES_CNT])
            # the get() method returns the value of the specified key.
            dict_sectors[row[INDEX_SECTOR]] = dict_sectors.get(
                row[INDEX_SECTOR], 0) + float(row[INDEX_RES_CNT])
            number_rows += 1
    with open('census_report_new.txt', 'w') as census_report:
        total = 0
        census_report.write("CLASS\t\t\tRES_CNT\n")
        census_report.write("============================\n")
        for city_class, resident_count in dict_classes.items():
            census_report.write(
                f"{city_class}: {resident_count}\n")
        census_report.write(f"\n")
        census_report.write("SECTOR\t\t\tRES_CNT\n")
        census_report.write("============================\n")
        for city_sector, resident_count in dict_sectors.items():
            census_report.write(f"{city_sector}: {resident_count}\n")
        for city_sector, resident_count in dict_sectors.items():
            total += resident_count
        census_report.write(f"\n")
        census_report.write("TOTAL POPULATION\n")
        census_report.write("============================\n")
        census_report.write(f"Total Population: {total}\n")
        census_report.write(f"Number of Rows: {number_rows}\n")


read_data_line()
