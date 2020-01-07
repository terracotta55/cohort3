from openpyxl import Workbook

new_workbook = Workbook()
sheet_1 = new_workbook.active

sheet_1["A1"] = "write into"
sheet_1["B1"] = "excel worksheet"

# new_workbook.save(filename="hello_world.xlsx")
