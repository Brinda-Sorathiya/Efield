import pandas as pd
import numpy as np
import sklearn
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
import pickle

df=pd.read_csv('C:\\Users\\brind\\OneDrive\\Desktop\\first ml\\server\\.venv\\crop_production.csv')

op = df['Production']
df.dropna(subset=['Production'], inplace=True)
op = df['Production']
df.drop(columns=['Production'], inplace=True)

# df['Season'] = df['Season'].replace('Kharif     ', 'Kharif')
# df['Season'] = df['Season'].replace('Whole Year ', 'Whole Year')
# df['Season'] = df['Season'].replace('Autumn     ', 'Autumn')
# df['Season'] = df['Season'].replace('Rabi       ', 'Rabi')
# df['Season'] = df['Season'].replace('Summer     ', 'Summer')
# df['Season'] = df['Season'].replace('Winter     ', 'Winter')

le_state = LabelEncoder()
le_district = LabelEncoder()
le_season = LabelEncoder()
le_crop = LabelEncoder()

df['State_Name'] = le_state.fit_transform(df['State_Name'])
df['District_Name'] = le_district.fit_transform(df['District_Name'])
df['Season'] = le_season.fit_transform(df['Season'])
df['Crop'] = le_crop.fit_transform(df['Crop'])

scrl = StandardScaler()
df_scaled = scrl.fit_transform(df) 
df.head()

x_train, x_test, y_train, y_test = train_test_split(df_scaled, op, test_size=0.2, random_state=42)
rfr = RandomForestRegressor()
rfr.fit(x_train, y_train)
rfr.score(x_test, y_test)

with open('le_state.pkl', 'wb') as file:
    pickle.dump(le_state, file)

with open('le_district.pkl', 'wb') as file:
    pickle.dump(le_district, file)

with open('le_season.pkl', 'wb') as file:
    pickle.dump(le_season, file)

with open('le_crop.pkl', 'wb') as file:
    pickle.dump(le_crop, file)


with open('production.pkl', 'wb') as model_file:
    pickle.dump(rfr, model_file)