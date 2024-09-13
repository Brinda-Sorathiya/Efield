from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Ensure CORS is enabled

# Load your pre-trained models, label encoder, and scaler
with open('crop.pkl', 'rb') as model_file:
    model1 = pickle.load(model_file)  # Model for crop prediction

with open('yield.pkl', 'rb') as model_file:
    model2 = pickle.load(model_file)  # Model for yield prediction

with open('label_encoder.pkl', 'rb') as le_file:
    label_encoder = pickle.load(le_file)

with open('columns.pkl', 'rb') as file:
    trained_columns = pickle.load(file)

with open('standard_scaler.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

with open('le_state.pkl', 'rb') as file:
    le_state = pickle.load(file)

with open('le_district.pkl', 'rb') as file:
    le_district = pickle.load(file)

with open('le_season.pkl', 'rb') as file:
    le_season = pickle.load(file)

with open('le_crop.pkl', 'rb') as file:
    le_crop = pickle.load(file)

with open('production.pkl', 'rb') as file:
    model3 = pickle.load(file)

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/crop', methods=['POST'])
def crop():
    data = request.get_json()
    new_df = pd.DataFrame([data])
    
    # data = np.array(my_array).reshape(1, -1)
    predictions = model1.predict(new_df)
    decoded_predictions = label_encoder.inverse_transform(predictions)
    
    return jsonify({'prediction': decoded_predictions.tolist()})

@app.route('/yield', methods=['POST'])
def _yield():
    data = request.get_json()
    input_df = pd.DataFrame([data])
    
    input_df_encoded = pd.get_dummies(input_df, drop_first=True)
    print(input_df_encoded)
    track = "Crop_" + data['Crop']
    print(track)
    missing_cols = set(trained_columns) - set(input_df_encoded.columns)
    for col in missing_cols:
        if col == track :
            input_df_encoded[col] = 1  
        else:
            input_df_encoded[col] = 0
    input_df_encoded = input_df_encoded[trained_columns]
    
    input_scaled = scaler.transform(input_df_encoded)
    prediction = model2.predict(input_scaled)

    print(prediction)
    
    return jsonify({'prediction': prediction.tolist()})

@app.route('/production', methods=['POST'])
def production():
    data = request.get_json()
    new_df = pd.DataFrame([data])
    print("hii")
    new_df['State_Name'] = le_state.transform(new_df['State_Name'])
    new_df['District_Name'] = le_district.transform(new_df['District_Name'])
    new_df['Season'] = le_season.transform(new_df['Season'])
    new_df['Crop'] = le_crop.transform(new_df['Crop'])
    print("hii")
    print(new_df['Crop'])
    prediction = model3.predict(new_df)
    
    return jsonify({'prediction': prediction.tolist()})

@app.route('/rainfall', methods=['POST'])
def get_rainfall_data():
    try:
        data = request.get_json()
        
        state_name = data.get('state_name')
        district = data.get('district')
        duration = data.get('duration')

        if not state_name or not district or not duration:
            return jsonify({'error': 'Missing required parameters'}), 400

        df = pd.read_csv('C:\\Users\\brind\\OneDrive\\Desktop\\first ml\\server\\.venv\\district wise rainfall normal.csv')
        filtered_df = df[(df['STATE_UT_NAME'] == state_name) & (df['DISTRICT'] == district)]

        if filtered_df.empty:
            return jsonify({'error': 'No data found for the given state and district'}), 404

        if duration in filtered_df.columns:
            rainfall_data = filtered_df[duration].values[0]
        else:
            return jsonify({'error': 'Invalid duration'}), 400

        print(rainfall_data)
        return jsonify({'rainfall': rainfall_data})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
