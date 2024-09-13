import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';


const Production = () => {
  const [prediction, setPredction] = useState(null);

  const states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh',
    'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal']
   
  
  // Sort the states array in alphabetical order
  states.sort((a, b) => a.localeCompare(b));
  

  const districts = ['NICOBARS', 'NORTH AND MIDDLE ANDAMAN', 'SOUTH ANDAMANS', 'ANANTAPUR',
    'CHITTOOR', 'EAST GODAVARI', 'GUNTUR', 'KADAPA', 'KRISHNA', 'KURNOOL',
    'PRAKASAM', 'SPSR NELLORE', 'SRIKAKULAM', 'VISAKHAPATANAM', 'VIZIANAGARAM',
    'WEST GODAVARI', 'ANJAW', 'CHANGLANG', 'DIBANG VALLEY', 'EAST KAMENG',
    'EAST SIANG', 'KURUNG KUMEY', 'LOHIT', 'LONGDING', 'LOWER DIBANG VALLEY',
    'LOWER SUBANSIRI', 'NAMSAI', 'PAPUM PARE', 'TAWANG', 'TIRAP', 'UPPER SIANG',
    'UPPER SUBANSIRI', 'WEST KAMENG', 'WEST SIANG', 'BAKSA', 'BARPETA',
    'BONGAIGAON', 'CACHAR', 'CHIRANG', 'DARRANG', 'DHEMAJI', 'DHUBRI', 'DIBRUGARH',
    'DIMA HASAO', 'GOALPARA', 'GOLAGHAT', 'HAILAKANDI', 'JORHAT', 'KAMRUP',
    'KAMRUP METRO', 'KARBI ANGLONG', 'KARIMGANJ', 'KOKRAJHAR', 'LAKHIMPUR',
    'MARIGAON', 'NAGAON', 'NALBARI', 'SIVASAGAR', 'SONITPUR', 'TINSUKIA',
    'UDALGURI', 'ARARIA', 'ARWAL', 'AURANGABAD', 'BANKA', 'BEGUSARAI', 'BHAGALPUR',
    'BHOJPUR', 'BUXAR', 'DARBHANGA', 'GAYA', 'GOPALGANJ', 'JAMUI', 'JEHANABAD',
    'KAIMUR (BHABUA)', 'KATIHAR', 'KHAGARIA', 'KISHANGANJ', 'LAKHISARAI',
    'MADHEPURA', 'MADHUBANI', 'MUNGER', 'MUZAFFARPUR', 'NALANDA', 'NAWADA',
    'PASHCHIM CHAMPARAN', 'PATNA', 'PURBI CHAMPARAN', 'PURNIA', 'ROHTAS',
    'SAHARSA', 'SAMASTIPUR', 'SARAN', 'SHEIKHPURA', 'SHEOHAR', 'SITAMARHI', 'SIWAN',
    'SUPAUL', 'VAISHALI', 'CHANDIGARH', 'BALOD', 'BALODA BAZAR', 'BALRAMPUR',
    'BASTAR', 'BEMETARA', 'BIJAPUR', 'BILASPUR', 'DANTEWADA', 'DHAMTARI', 'DURG',
    'GARIYABAND', 'JANJGIR-CHAMPA', 'JASHPUR', 'KABIRDHAM', 'KANKER', 'KONDAGAON',
    'KORBA', 'KOREA', 'MAHASAMUND', 'MUNGELI', 'NARAYANPUR', 'RAIGARH', 'RAIPUR',
    'RAJNANDGAON', 'SUKMA', 'SURAJPUR', 'SURGUJA', 'DADRA AND NAGAR HAVELI',
    'NORTH GOA', 'SOUTH GOA', 'AHMADABAD', 'AMRELI', 'ANAND', 'BANAS KANTHA',
    'BHARUCH', 'BHAVNAGAR', 'DANG', 'DOHAD', 'GANDHINAGAR', 'JAMNAGAR', 'JUNAGADH',
    'KACHCHH', 'KHEDA', 'MAHESANA', 'NARMADA', 'NAVSARI', 'PANCH MAHALS', 'PATAN',
    'PORBANDAR', 'RAJKOT', 'SABAR KANTHA', 'SURAT', 'SURENDRANAGAR', 'TAPI',
    'VADODARA', 'VALSAD', 'AMBALA', 'BHIWANI', 'FARIDABAD', 'FATEHABAD', 'GURGAON',
    'HISAR', 'JHAJJAR', 'JIND', 'KAITHAL', 'KARNAL', 'KURUKSHETRA', 'MAHENDRAGARH',
    'MEWAT', 'PALWAL', 'PANCHKULA', 'PANIPAT', 'REWARI', 'ROHTAK', 'SIRSA',
    'SONIPAT', 'YAMUNANAGAR', 'CHAMBA', 'HAMIRPUR', 'KANGRA', 'KINNAUR', 'KULLU',
    'LAHUL AND SPITI', 'MANDI', 'SHIMLA', 'SIRMAUR', 'SOLAN', 'UNA', 'ANANTNAG',
    'BADGAM', 'BANDIPORA', 'BARAMULLA', 'DODA', 'GANDERBAL', 'JAMMU', 'KARGIL',
    'KATHUA', 'KISHTWAR', 'KULGAM', 'KUPWARA', 'LEH LADAKH', 'POONCH', 'PULWAMA',
    'RAJAURI', 'RAMBAN', 'REASI', 'SAMBA', 'SHOPIAN', 'SRINAGAR', 'UDHAMPUR',
    'BOKARO', 'CHATRA', 'DEOGHAR', 'DHANBAD', 'DUMKA', 'EAST SINGHBUM', 'GARHWA',
    'GIRIDIH', 'GODDA', 'GUMLA', 'HAZARIBAGH', 'JAMTARA', 'KHUNTI', 'KODERMA',
    'LATEHAR', 'LOHARDAGA', 'PAKUR', 'PALAMU', 'RAMGARH', 'RANCHI', 'SAHEBGANJ',
    'SARAIKELA KHARSAWAN', 'SIMDEGA', 'WEST SINGHBHUM', 'BAGALKOT',
    'BANGALORE RURAL', 'BELGAUM', 'BELLARY', 'BENGALURU URBAN', 'BIDAR',
    'CHAMARAJANAGAR', 'CHIKBALLAPUR', 'CHIKMAGALUR', 'CHITRADURGA',
    'DAKSHIN KANNAD', 'DAVANGERE', 'DHARWAD', 'GADAG', 'GULBARGA', 'HASSAN',
    'HAVERI', 'KODAGU', 'KOLAR', 'KOPPAL', 'MANDYA', 'MYSORE', 'RAICHUR',
    'RAMANAGARA', 'SHIMOGA', 'TUMKUR', 'UDUPI', 'UTTAR KANNAD', 'YADGIR',
    'ALAPPUZHA', 'ERNAKULAM', 'IDUKKI', 'KANNUR', 'KASARAGOD', 'KOLLAM', 'KOTTAYAM',
    'KOZHIKODE', 'MALAPPURAM', 'PALAKKAD', 'PATHANAMTHITTA', 'THIRUVANANTHAPURAM',
    'THRISSUR', 'WAYANAD', 'AGAR MALWA', 'ALIRAJPUR', 'ANUPPUR', 'ASHOKNAGAR',
    'BALAGHAT', 'BARWANI', 'BETUL', 'BHIND', 'BHOPAL', 'BURHANPUR', 'CHHATARPUR',
    'CHHINDWARA', 'DAMOH', 'DATIA', 'DEWAS', 'DHAR', 'DINDORI', 'GUNA', 'GWALIOR',
    'HARDA', 'HOSHANGABAD', 'INDORE', 'JABALPUR', 'JHABUA', 'KATNI', 'KHANDWA',
    'KHARGONE', 'MANDLA', 'MANDSAUR', 'MORENA', 'NARSINGHPUR', 'NEEMUCH', 'PANNA',
    'RAISEN', 'RAJGARH', 'RATLAM', 'REWA', 'SAGAR', 'SATNA', 'SEHORE', 'SEONI',
    'SHAHDOL', 'SHAJAPUR', 'SHEOPUR', 'SHIVPURI', 'SIDHI', 'SINGRAULI', 'TIKAMGARH',
    'UJJAIN', 'UMARIA', 'VIDISHA', 'AHMEDNAGAR', 'AKOLA', 'AMRAVATI', 'BEED',
    'BHANDARA', 'BULDHANA', 'CHANDRAPUR', 'DHULE', 'GADCHIROLI', 'GONDIA',
    'HINGOLI', 'JALGAON', 'JALNA', 'KOLHAPUR', 'LATUR', 'MUMBAI', 'NAGPUR', 'NANDED',
    'NANDURBAR', 'NASHIK', 'OSMANABAD', 'PALGHAR', 'PARBHANI', 'PUNE', 'RAIGAD','RATNAGIRI', 'SANGLI', 'SATARA', 'SINDHUDURG', 'SOLAPUR', 'THANE', 'WARDHA',
'WASHIM', 'YAVATMAL', 'BISHNUPUR', 'CHANDEL', 'CHURACHANDPUR', 'IMPHAL EAST',
'IMPHAL WEST', 'SENAPATI', 'TAMENGLONG', 'THOUBAL', 'UKHRUL',
'EAST GARO HILLS', 'EAST JAINTIA HILLS', 'EAST KHASI HILLS',
'NORTH GARO HILLS', 'RI BHOI', 'SOUTH GARO HILLS', 'SOUTH WEST GARO HILLS',
'SOUTH WEST KHASI HILLS', 'WEST GARO HILLS', 'WEST JAINTIA HILLS',
'WEST KHASI HILLS', 'AIZAWL', 'CHAMPHAI', 'KOLASIB', 'LAWNGTLAI', 'LUNGLEI',
'MAMIT', 'SAIHA', 'SERCHHIP', 'DIMAPUR', 'KIPHIRE', 'KOHIMA', 'LONGLENG',
'MOKOKCHUNG', 'MON', 'PEREN', 'PHEK', 'TUENSANG', 'WOKHA', 'ZUNHEBOTO', 'ANUGUL',
'BALANGIR', 'BALESHWAR', 'BARGARH', 'BHADRAK', 'BOUDH', 'CUTTACK', 'DEOGARH',
'DHENKANAL', 'GAJAPATI', 'GANJAM', 'JAGATSINGHAPUR', 'JAJAPUR', 'JHARSUGUDA',
'KALAHANDI', 'KANDHAMAL', 'KENDRAPARA', 'KENDUJHAR', 'KHORDHA', 'KORAPUT',
'MALKANGIRI', 'MAYURBHANJ', 'NABARANGPUR', 'NAYAGARH', 'NUAPADA', 'PURI',
'RAYAGADA', 'SAMBALPUR', 'SONEPUR', 'SUNDARGARH', 'KARAIKAL', 'MAHE',
'PONDICHERRY', 'YANAM', 'AMRITSAR', 'BARNALA', 'BATHINDA', 'FARIDKOT',
'FATEHGARH SAHIB', 'FAZILKA', 'FIROZEPUR', 'GURDASPUR', 'HOSHIARPUR',
'JALANDHAR', 'KAPURTHALA', 'LUDHIANA', 'MANSA', 'MOGA', 'MUKTSAR', 'NAWANSHAHR',
'PATHANKOT', 'PATIALA', 'RUPNAGAR', 'S.A.S NAGAR', 'SANGRUR', 'TARN TARAN',
'AJMER', 'ALWAR', 'BANSWARA', 'BARAN', 'BARMER', 'BHARATPUR', 'BHILWARA',
'BIKANER', 'BUNDI', 'CHITTORGARH', 'CHURU', 'DAUSA', 'DHOLPUR', 'DUNGARPUR',
'GANGANAGAR', 'HANUMANGARH', 'JAIPUR', 'JAISALMER', 'JALORE', 'JHALAWAR',
'JHUNJHUNU', 'JODHPUR', 'KARAULI', 'KOTA', 'NAGAUR', 'PALI', 'PRATAPGARH',
'RAJSAMAND', 'SAWAI MADHOPUR', 'SIKAR', 'SIROHI', 'TONK', 'UDAIPUR',
'EAST DISTRICT', 'NORTH DISTRICT', 'SOUTH DISTRICT', 'WEST DISTRICT',
'ARIYALUR', 'COIMBATORE', 'CUDDALORE', 'DHARMAPURI', 'DINDIGUL', 'ERODE',
'KANCHIPURAM', 'KANNIYAKUMARI', 'KARUR', 'KRISHNAGIRI', 'MADURAI',
'NAGAPATTINAM', 'NAMAKKAL', 'PERAMBALUR', 'PUDUKKOTTAI', 'RAMANATHAPURAM',
'SALEM', 'SIVAGANGA', 'THANJAVUR', 'THE NILGIRIS', 'THENI', 'THIRUVALLUR',
'THIRUVARUR', 'TIRUCHIRAPPALLI', 'TIRUNELVELI', 'TIRUPPUR', 'TIRUVANNAMALAI',
'TUTICORIN', 'VELLORE', 'VILLUPURAM', 'VIRUDHUNAGAR', 'ADILABAD', 'HYDERABAD',
'KARIMNAGAR', 'KHAMMAM', 'MAHBUBNAGAR', 'MEDAK', 'NALGONDA', 'NIZAMABAD',
'RANGAREDDI', 'WARANGAL', 'DHALAI', 'GOMATI', 'KHOWAI', 'NORTH TRIPURA',
'SEPAHIJALA', 'SOUTH TRIPURA', 'UNAKOTI', 'WEST TRIPURA', 'AGRA', 'ALIGARH',
'ALLAHABAD', 'AMBEDKAR NAGAR', 'AMETHI', 'AMROHA', 'AURAIYA', 'AZAMGARH',
'BAGHPAT', 'BAHRAICH', 'BALLIA', 'BANDA', 'BARABANKI', 'BAREILLY', 'BASTI',
'BIJNOR', 'BUDAUN', 'BULANDSHAHR', 'CHANDAULI', 'CHITRAKOOT', 'DEORIA', 'ETAH',
'ETAWAH', 'FAIZABAD', 'FARRUKHABAD', 'FATEHPUR', 'FIROZABAD',
'GAUTAM BUDDHA NAGAR', 'GHAZIABAD', 'GHAZIPUR', 'GONDA', 'GORAKHPUR', 'HAPUR',
'HARDOI', 'HATHRAS', 'JALAUN', 'JAUNPUR', 'JHANSI', 'KANNAUJ', 'KANPUR DEHAT',
'KANPUR NAGAR', 'KASGANJ', 'KAUSHAMBI', 'KHERI', 'KUSHI NAGAR', 'LALITPUR',
'LUCKNOW', 'MAHARAJGANJ', 'MAHOBA', 'MAINPURI', 'MATHURA', 'MAU', 'MEERUT',
'MIRZAPUR', 'MORADABAD', 'MUZAFFARNAGAR', 'PILIBHIT', 'RAE BARELI', 'RAMPUR',
'SAHARANPUR', 'SAMBHAL', 'SANT KABEER NAGAR', 'SANT RAVIDAS NAGAR',
'SHAHJAHANPUR', 'SHAMLI', 'SHRAVASTI', 'SIDDHARTH NAGAR', 'SITAPUR',
'SONBHADRA', 'SULTANPUR', 'UNNAO', 'VARANASI', 'ALMORA', 'BAGESHWAR', 'CHAMOLI',
'CHAMPAWAT', 'DEHRADUN', 'HARIDWAR', 'NAINITAL', 'PAURI GARHWAL',
'PITHORAGARH', 'RUDRA PRAYAG', 'TEHRI GARHWAL', 'UDAM SINGH NAGAR',
'UTTAR KASHI', '24 PARAGANAS NORTH', '24 PARAGANAS SOUTH', 'BANKURA',
'BARDHAMAN', 'BIRBHUM', 'COOCHBEHAR', 'DARJEELING', 'DINAJPUR DAKSHIN',
'DINAJPUR UTTAR', 'HOOGHLY', 'HOWRAH', 'JALPAIGURI', 'MALDAH',
'MEDINIPUR EAST', 'MEDINIPUR WEST', 'MURSHIDABAD', 'NADIA', 'PURULIA'

  ]
   

  districts.sort((a, b) => a.localeCompare(b))

  const seasons =['Kharif', 'Whole Year', 'Autumn', 'Rabi', 'Summer',
    'Winter']

    const crops =['Arecanut', 'Other Kharif pulses', 'Rice', 'Banana', 'Cashewnut', 'Coconut', 
      'Dry ginger', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Black pepper',
      'Dry chillies', 'other oilseeds', 'Turmeric', 'Maize', 'Moong(Green Gram)',
      'Urad', 'Arhar/Tur', 'Groundnut', 'Sunflower', 'Bajra', 'Castor seed',
      'Cotton(lint)', 'Horse-gram', 'Jowar', 'Korra', 'Ragi', 'Tobacco', 'Gram',
      'Wheat', 'Masoor', 'Sesamum', 'Linseed', 'Safflower', 'Onion',
      'other misc. pulses', 'Samai', 'Small millets', 'Coriander', 'Potato',
      'Other Rabi pulses', 'Soyabean', 'Beans & Mutter(Vegetable)', 'Bhindi',
      'Brinjal', 'Citrus Fruit', 'Cucumber', 'Grapes', 'Mango', 'Orange',
      'other fibres', 'Other Fresh Fruits', 'Other Vegetables', 'Papaya',
      'Pome Fruit', 'Tomato', 'Rapeseed &Mustard', 'Mesta', 'Cowpea(Lobia)', 'Lemon',
      'Pome Granet', 'Sapota', 'Cabbage', 'Peas  (vegetable)', 'Niger seed',
      'Bottle Gourd', 'Sannhamp', 'Varagu', 'Garlic', 'Ginger', 'Oilseeds total',
      'Pulses total', 'Jute', 'Peas & beans (Pulses)', 'Blackgram', 'Paddy',
      'Pineapple', 'Barley', 'Khesari', 'Guar seed', 'Moth',
      'Other Cereals & Millets', 'Cond-spcs other', 'Turnip', 'Carrot', 'Redish',
      'Arcanut (Processed)', 'Atcanut (Raw)', 'Cashewnut Processed',
      'Cashewnut Raw', 'Cardamom', 'Rubber', 'Bitter Gourd', 'Drum Stick',
      'Jack Fruit', 'Snak Guard', 'Pump Kin', 'Tea', 'Coffee', 'Cauliflower',
      'Other Citrus Fruit', 'Water Melon', 'Total foodgrain', 'Kapas', 'Colocosia',
      'Lentil', 'Bean', 'Jobster', 'Perilla', 'Rajmash Kholar', 'Ricebean (nagadal)',
      'Ash Gourd', 'Beet Root', 'Lab-Lab', 'Ribed Guard', 'Yam', 'Apple', 'Peach',
      'Pear', 'Plums', 'Litchi', 'Ber', 'Other Dry Fruit', 'Jute & mesta']
     
    
    crops.sort((a, b) => a.localeCompare(b))
  
  const [form, setForm] = useState({
    State_Name:null,
    District_Name:null,
    Season:null,
    Crop:null,
    Crop_Year:null,
    Area:null
  });
         
   // Handle state change
   const handleStateChange = (event) => {
    setForm({ ...form, State_Name: event.target.value });
    };

  // Handle district change
  const handleDistrictChange = (event) => {
    setForm({ ...form, District_Name: event.target.value });
    };

  // Handle duration change
  const handleSeasonChange = (event) => {
    setForm({ ...form, Season: event.target.value });
  };

  const handleCropChange = (event) => {
    setForm({ ...form, Crop: event.target.value });
  };

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form)
    const res = await axios.post('http://127.0.0.1:5000/production', form);
    console.log('Response:', res.data.prediction);
    setPredction(res.data.prediction)
    console.log(form)
  }

  return (
    <div>
      <form 
        onSubmit={submitHandler}
        className="max-w-full mx-auto backdrop-blur-sm bg-black/60 mt-[30px] mx-[40px] p-[30px] rounded-md">
        <label
          htmlFor="states"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          State
        </label>
        <select
          id="states"
          value={form.State_Name || ""}
          onChange={handleStateChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <label
          htmlFor="districts"
          className="block mt-[30px] mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          District
        </label>
        <select
          id="districts"
          value={form.District_Name || ""}
          onChange={handleDistrictChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a District</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
        <label
          htmlFor="seasons"
          className="block mt-[30px] mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Season
        </label>
        <select
          id="seasons"
          value={form.Season || ""}
          onChange={handleSeasonChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a Season</option>
          {seasons.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>

        <label
          htmlFor="crops"
          className="block mt-[30px] mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Crop
        </label>
        <select
          id="crops"
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
        <div className="relative z-0 w-full my-5 group">
            <input
              value={form.Crop_Year}
              onChange={changeHandler}
              type="number"
              name="Crop_Year"
              id="Crop_Year"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Crop_Year"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Crop_Year
            </label>
          </div>
          <div className="relative z-0 w-full my-5 group">
            <input
              value={form.Area}
              onChange={changeHandler}
              type="number"
              name="Area"
              id="Area"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Area"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Area
            </label>
          </div>

        
        <button
          type="submit"
          className="mt-[30px] relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 group-hover:from-teal-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Predict Production
          </span>
        </button>
      </form>
      <div className="max-w-full mx-auto bg-black mt-[30px] mx-[40px] p-[30px] rounded-md">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 inline-block text-transparent bg-clip-text ml-2">
          Predicted production : {prediction}
        </h2>
      </div>
    </div>
  );
}

export default Production
