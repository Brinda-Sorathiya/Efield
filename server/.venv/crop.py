import numpy as np
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
import pickle

# Load the dataset
df = pd.read_csv('C:\\Users\\brind\\OneDrive\\Desktop\\first ml\\server\\.venv\\Crop_recommendation.csv')
op = df.label
df.drop(columns=['label'], inplace=True)

# Encode the labels
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(op)

# Train the RandomForestClassifier
rfc = RandomForestClassifier()
rfc.fit(df, y)

# Save the model and the label encoder
with open('crop.pkl', 'wb') as model_file:
    pickle.dump(rfc, model_file)

with open('label_encoder.pkl', 'wb') as le_file:
    pickle.dump(label_encoder, le_file)
