import numpy as np
import pandas as pd

# Convert the csv into DataFrame
census_data = pd.read_csv('census_data.csv')

print('Number of Rows:\t', census_data.NAME.count())
print("======================================================")
print('Calgary Total Population:\t', census_data.RES_CNT.sum())
print("======================================================")
print('Most Populated Neighborhood:\t', census_data.RES_CNT.max())
print(census_data[['NAME', 'CLASS', 'RES_CNT']]
      [census_data.RES_CNT == census_data.RES_CNT.max()])
print("======================================================")
print(census_data.groupby('CLASS').sum()[['RES_CNT']])
print("======================================================")
print(census_data.groupby('SECTOR').sum()[['RES_CNT']])
print("======================================================")
pd.set_option('display.max_rows', None)
print(census_data[['NAME', 'RES_CNT', 'SECTOR']])
print("======================================================")
