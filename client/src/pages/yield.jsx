import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Yield = () => {
  const [form, setForm] = useState({
    Nitrogen: "",
    Phosphorus: "",
    Potassium: "",
    Temperature: "",
    Humidity: "",
    pH_Value: "",
    Rainfall: "",
    Crop: ""
  });

  const crops = [
    'Rice', 'Maize', 'ChickPea', 'KidneyBeans', 'PigeonPeas', 'MothBeans',
    'MungBean', 'Blackgram', 'Lentil', 'Pomegranate', 'Banana', 'Mango',
    'Grapes', 'Watermelon', 'Muskmelon', 'Apple', 'Orange', 'Papaya',
    'Coconut', 'Cotton', 'Jute', 'Coffee'
  ]
  
  crops.sort((a, b) => a.localeCompare(b))

  const [prediction, setPredction] = useState(null);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log("hii");
  };
 
  const handleCropChange = (event) => {
    setForm({ ...form, Crop: event.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const orderedKeys = ['Nitrogen', 'Phosphorus', 'Potassium', 'Temperature', 'Humidity', 'pH_Value', 'Rainfall', 'Crop'];
  
    const orderedForm = orderedKeys.reduce((obj, key) => {
      // Convert form values to numbers if the field is not 'Crop'
      obj[key] = key !== 'Crop' ? Number(form[key]) : form[key];
      return obj;
    }, {});
  
    try {
      const res = await axios.post("http://127.0.0.1:5000/yield", orderedForm,{
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      console.log("Response:", res.data.prediction);
      setPredction(res.data.prediction);
    } catch (error) {
      console.error("Error sending the request:", error);
    }
  };
  

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="max-w-full mx-auto backdrop-blur-sm bg-black/60 mt-[30px] mx-[40px] p-[30px] rounded-md"
      >
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.Nitrogen}
              onChange={changeHandler}
              type="number"
              name="Nitrogen"
              id="N"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Nitrogen"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nitrogen
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.Phosphorus}
              onChange={changeHandler}
              type="number"
              name="Phosphorus"
              id="P"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Phosphorus"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phosphorus
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.Potassium}
              onChange={changeHandler}
              type="number"
              name="Potassium"
              id="K"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Potassium"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Potassium
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.pH_Value}
              onChange={changeHandler}
              type="number"
              name="pH_Value"
              id="ph"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="pH_Value"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PH
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.Humidity}
              onChange={changeHandler}
              type="number"
              name="Humidity"
              id="humidity"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Humidity"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Humidity
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.Temperature}
              onChange={changeHandler}
              type="number"
              name="Temperature"
              id="temperature"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Temperature"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Temperature
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.Rainfall}
              onChange={changeHandler}
              type="number"
              name="Rainfall"
              id="rainfall"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Rainfall"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Rainfall
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="crop"
              className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Crop
            </label>
            <select
              id="crop"
              value={form.Crop || ""}
              onChange={handleCropChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Crop</option>
              {crops.map((crop, index) => (
                <option key={index} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-[15px] relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 group-hover:from-teal-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Predict Yield
          </span>
        </button>
      </form>
      <div className="max-w-full mx-auto bg-black mt-[30px] mx-[40px] p-[30px] rounded-md">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 inline-block text-transparent bg-clip-text ml-2">
          Predicted Yield : {prediction}
        </h2>
      </div>
    </div>
  );
};

export default Yield;
