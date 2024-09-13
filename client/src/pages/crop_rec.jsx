import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

const Crop_rec = () => {
  const [form, setForm] = useState({
    N: null,
    P: null,
    K: null,
    temperature: null,
    humidity: null,
    ph: null,
    rainfall: null,
  });

  const [prediction, setPredction] = useState(null);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://127.0.0.1:5000/crop', form);
    console.log('Response:', res.data.prediction);
    setPredction(res.data.prediction)
  }

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="max-w-full mx-auto backdrop-blur-sm bg-black/60 mt-[30px] mx-[40px] p-[30px] rounded-md"
      >
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.N}
              onChange={changeHandler}
              type="number"
              name="N"
              id="N"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="N"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nitrogen
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.P}
              onChange={changeHandler}
              type="number"
              name="P"
              id="P"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="P"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phosphorus
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.K}
              onChange={changeHandler}
              type="number"
              name="K"
              id="K"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="K"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Potassium
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.ph}
              onChange={changeHandler}
              type="number"
              name="ph"
              id="ph"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="ph"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PH
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.humidity}
              onChange={changeHandler}
              type="number"
              name="humidity"
              id="humidity"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="humidity"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Humidity
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.temperature}
              onChange={changeHandler}
              type="number"
              name="temperature"
              id="temperature"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="temperature"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Temperature
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={form.rainfall}
              onChange={changeHandler}
              type="number"
              name="rainfall"
              id="rainfall"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="rainfall"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Rainfall
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-[15px] relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 group-hover:from-teal-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Suggest Crop
          </span>
        </button>
      </form>
      <div className="max-w-full mx-auto bg-black mt-[30px] mx-[40px] p-[30px] rounded-md">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 inline-block text-transparent bg-clip-text ml-2">
          Suggested Crop : {prediction}
        </h2>
      </div>
    </div>
  );
};

export default Crop_rec;
