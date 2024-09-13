import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
import pickle

df = pd.read_csv('C:\\Users\\brind\\OneDrive\\Desktop\\first ml\\server\\.venv\\Crop_Yield_Prediction.csv')
op = df['Yield']
df.drop(columns=['Yield'], inplace=True)
df_encoded = pd.get_dummies(df, drop_first=True)
df_encoded = df_encoded.astype(int)

scrl = StandardScaler()
df_scaled = scrl.fit_transform(df_encoded)
rfr = RandomForestRegressor()
rfr.fit(df_scaled, op)
``
with open('yield.pkl', 'wb') as model_file:
    pickle.dump(rfr, model_file)

with open('columns.pkl', 'wb') as file:
    pickle.dump(df_encoded.columns, file)

with open('standard_scaler.pkl', 'wb') as le_file:
    pickle.dump(scrl, le_file)