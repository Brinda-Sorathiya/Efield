import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

const Rainfall = () => {

  const [prediction, setPredction] = useState(null);

  const states = [
    'ANDAMAN And NICOBAR ISLANDS', 'ARUNACHAL PRADESH', 'ASSAM', 'MEGHALAYA',
    'MANIPUR', 'MIZORAM', 'NAGALAND', 'TRIPURA', 'WEST BENGAL', 'SIKKIM', 'ORISSA',
    'JHARKHAND', 'BIHAR', 'UTTAR PRADESH', 'UTTARANCHAL', 'HARYANA', 'CHANDIGARH',
    'DELHI', 'PUNJAB', 'HIMACHAL', 'JAMMU AND KASHMIR', 'RAJASTHAN',
    'MADHYA PRADESH', 'GUJARAT', 'DADAR NAGAR HAVELI', 'DAMAN AND DUI',
    'MAHARASHTRA', 'GOA', 'CHATISGARH', 'ANDHRA PRADESH', 'TAMIL NADU',
    'PONDICHERRY', 'KARNATAKA', 'KERALA', 'LAKSHADWEEP'
  ];
  
  // Sort the states array in alphabetical order
  states.sort((a, b) => a.localeCompare(b));
  
  const districts = [
    "NICOBAR", "SOUTH ANDAMAN", "N & M ANDAMAN", "LOHIT", "EAST SIANG",
    "SUBANSIRI F.D", "TIRAP", "ANJAW (LOHIT)", "LOWER DIBANG", "CHANGLANG",
    "PAPUM PARE", "LOW SUBANSIRI", "UPPER SIANG", "WEST SIANG", "DIBANG VALLEY",
    "WEST KAMENG", "EAST KAMENG", "TAWANG(W KAME", "KURUNG KUMEY", "CACHAR",
    "DARRANG", "GOALPARA", "KAMRUP", "LAKHIMPUR", "NORTH CACHAR",
    "NAGAON", "SIVASAGAR", "BARPETA", "DHUBRI", "DIBRUGARH",
    "JORHAT", "KARIMGANJ", "KOKRAJHAR", "SHONITPUR", "GOLAGHAT",
    "TINSUKIA", "HAILAKANDI", "DHEMAJI(LAKHI", "KARBI ANGLONG",
    "UDALGURI(DARA", "KAMRUP METROP", "CHIRANG(BONGAI", "BAKSA BARPETA",
    "BONGAIGAON", "MORIGAON", "NALBARI", "EAST KHASI HI", "JAINTIA HILLS",
    "EAST GARO HIL", "RI-BHOI", "SOUTH GARO HI", "W KHASI HILL",
    "WEST GARO HIL", "IMPHAL EAST", "SENAPATI", "TAMENGLONG", "CHANDEL",
    "UKHRUL", "THOUBAL", "BISHNUPUR", "IMPHAL WEST", "CHURACHANDPUR",
    "AIZAWL", "CHAMPHAI", "KOLASIB", "LUNGLEI", "CHHIMTUIPUI",
    "LAWNGTLAI", "MAMIT", "SAIHA", "SERCHHIP", "KOHIMA",
    "TUENSANG", "MOKOKCHUNG", "DIMAPUR", "WOKHA", "MON",
    "ZUNHEBOTO", "PHEK", "KEPHRIE", "LONGLENG", "PEREN",
    "NORTH TRIPURA", "SOUTH TRIPURA", "WEST TRIPURA", "DHALAI",
    "COOCH BEHAR", "DARJEELING", "JALPAIGURI", "MALDA", "SOUTH DINAJPUR",
    "NORTH DINAJPUR", "NORTH SIKKIM", "EAST SIKKIM", "WEST SIKKIM",
    "SOUTH SIKKIM", "BANKURA", "BIRBHUM", "BURDWAN", "HOOGHLY",
    "HOWRAH", "PURULIA", "MURSHIDABAD", "NADIA", "NORTH 24 PARG",
    "SOUTH 24 PARG", "EAST MIDNAPOR", "WEST MIDNAPOR", "KOLKATA",
    "BALASORE", "BOLANGIR", "KANDHAMAL/PHU", "CUTTACK", "DHENKANAL",
    "GANJAM", "KALAHANDI", "KEONDJHARGARH", "KORAPUT", "MAYURBHANJ",
    "PURI", "SAMBALPUR", "SUNDARGARH", "BHADRAK", "JAJPUR",
    "KENDRAPARA", "ANGUL", "NAWAPARA", "MALKANGIRI", "NAWARANGPUR",
    "NAYAGARH", "KHURDA", "BARGARH", "JHARSUGUDA", "DEOGARH",
    "RAYAGADA", "GAJAPATI", "JAGATSINGHAPU", "BOUDHGARH", "SONEPUR",
    "BOKARO", "DHANBAD", "DUMKA", "HAZARIBAG", "PALAMU",
    "RANCHI", "SAHIBGANJ", "WEST SINGHBHUM", "DEOGHAR", "GIRIDIH",
    "GODDA", "GUMLA", "LOHARDAGA", "CHATRA", "KODERMA",
    "PAKUR", "EAST SINGHBHU", "GARHWA", "SERAIKELA-KHA", "JAMTARA",
    "LATEHAR", "SIMDEGA", "KHUNTI(RANCHI", "RAMGARH", "BHAGALPUR",
    "EAST CHAMPARAN", "DARBHANGA", "GAYA", "MUNGER", "MUZAFFARPUR",
    "WEST CHAMPARAN", "PURNEA", "GOPALGANJ", "MADHUBANI", "AURANGABAD",
    "BEGUSARAI", "BHOJPUR", "NALANDA", "PATNA", "KATIHAR",
    "KHAGARIA", "SARAN", "MADHEPURA", "NAWADA", "ROHTAS",
    "SAMASTIPUR", "SITAMARHI", "SIWAN", "VAISHALI", "JAHANABAD",
    "BUXAR", "ARARIA", "BANKA", "BHABUA", "JAMUI",
    "KISHANGANJ", "SHEIKHPURA", "SUPAUL", "LAKHISARAI", "SHEOHAR",
    "ARWAL", "SAHARSA", "ALLAHABAD", "AZAMGARH", "BAHRAICH",
    "BALLIA", "BANDA", "BARABANKI", "BASTI", "DEORIA",
    "FAIZABAD", "FARRUKHABAD", "FATEHPUR", "GHAZIPUR", "GONDA",
    "GORAKHPUR", "HARDOI", "JAUNPUR", "KANPUR NAGAR", "KHERI LAKHIMP",
    "LUCKNOW", "MIRZAPUR", "PRATAPGARH", "RAE BARELI", "SITAPUR",
    "SULTANPUR", "UNNAO", "VARANASI", "SONBHADRA", "MAHARAJGANJ",
    "MAU", "SIDDHARTH NGR", "KUSHINAGAR", "AMBEDKAR NAGAR", "KANNAUJ",
    "BALRAMPUR", "KAUSHAMBI", "SAHUJI MAHARA", "KANPUR DEHAT", "CHANDAULI",
    "SANT KABIR NGR", "SANT RAVIDAS", "SHRAVASTI NGR", "AGRA",
    "ALIGARH", "BAREILLY", "BIJNOR", "BADAUN", "BULANDSHAHAR",
    "ETAH", "ETAWAH", "HAMIRPUR", "JALAUN", "JHANSI",
    "LALITPUR", "MAINPURI", "MATHURA", "MEERUT", "MORADABAD",
    "MUZAFFARNAGAR", "PILIBHIT", "RAMPUR", "SAHARANPUR", "SHAHJAHANPUR",
    "GHAZIABAD", "FIROZABAD", "MAHOBA", "MAHAMAYA NAGA", "AURAIYA",
    "BAGPAT", "JYOTIBA PHULE", "GAUTAM BUDDHA", "KANSHIRAM NAG", "ALMORA",
    "CHAMOLI", "DEHRADUN", "GARHWAL PAURI", "NAINITAL", "PITHORAGARH",
    "GARHWAL TEHRI", "UTTARKASHI", "HARIDWAR", "CHAMPAWAT", "RUDRAPRAYAG",
    "UDHAM SINGH N", "BAGESHWAR", "AMBALA", "GURGAON", "HISAR", "JIND", "KARNAL", "MAHENDRAGARH", "ROHTAK", "BHIWANI", "FARIDABAD", "KURUKSHETRA", "SIRSA", "SONEPAT(RTK)", "YAMUNANAGAR",
    "KAITHAL", "PANIPAT", "REWARI", "FATEHABAD", "JHAJJAR", "PANCHKULA", "MEWAT", "PALWAL(FRD)", "CHANDIGARH", "NORTH DELHI", "NE DELHI", "SW DELHI", "NW DELHI", "SOUTH DELHI",
    "WEST DELHI", "AMRITSAR", "BATHINDA", "FEROZEPUR", "GURDASPUR",
    "HOSHIARPUR", "JALANDHAR", "KAPURTHALA", "LUDHIANA", "PATIALA",
    "RUPNAGAR", "SANGRUR", "FARIDKOT", "MOGA", "NAWANSHAHR",
    "FATEHGARH SAH", "MUKTSAR", "MANSA", "BARNALA", "SAS NAGAR(MGA)",
    "TARN TARAN", "BILASPUR", "CHAMBA", "KANGRA", "KINNAUR",
    "KULLU", "LAHUL & SPITI", "MANDI", "SHIMLA", "SIRMAUR",
    "SOLAN", "UNA", "ANANTNAG", "BARAMULLA", "DODA",
    "JAMMU", "KATHUA", "LADAKH (LEH)", "UDHAMPUR", "BADGAM",
    "KUPWARA", "PULWAMA", "SRINAGAR", "KARGIL", "POONCH",
    "RAJOURI", "BANDIPORE", "GANDERWAL", "KULGAM/(ANT)", "SHOPAN",
    "SAMBA", "KISTWAR", "REASI", "RAMBAN(DDA)", "BARMER",
    "BIKANER", "CHURU", "SRI GANGANAGA", "JAISALMER", "JALORE",
    "JODHPUR", "NAGAUR", "PALI", "HANUMANGARH", "AJMER",
    "ALWAR", "BANSWARA", "BHARATPUR", "BHILWARA", "BUNDI",
    "CHITTORGARH", "DUNGARPUR", "JAIPUR", "JHALAWAR", "JHUNJHUNU",
    "KOTA", "SAWAI MADHOPUR", "SIKAR", "SIROHI", "TONK",
    "UDAIPUR", "DHOLPUR", "BARAN", "DAUSA", "RAJSAMAND",
    "KARAULI", "PRATAPGARH(CHT", "BETUL", "VIDISHA", "BHIND",
    "DATIA", "DEWAS", "DHAR", "GUNA", "GWALIOR",
    "HOSHANGABAD", "INDORE", "JHABUA", "MANDSAUR", "MORENA",
    "KHANDWA", "KHARGONE", "RAISEN", "RAJGARH", "RATLAM",
    "SEHORE", "SHAHDOL", "SIDHI", "TIKAMGARH", "KATNI",
    "DINDORI", "UMARIA", "DAMOH", "ANUPPUR(SHAHD", "SINGRAULI",
    "AHMEDABAD", "BANASKANTHA", "BARODA", "BHARUCH", "VALSAD",
    "DANGS", "KHEDA", "MEHSANA", "PANCHMAHALS", "SABARKANTHA",
    "SURAT", "GANDHINAGAR", "NARMADA(BRC)", "NAVSARI(VSD)",
    "ANAND(KHR)", "PATAN(MHSN)", "DAHOD(PNML)", "TAPI(SRT)",
    "AMRELI", "BHAVNAGAR", "JAMNAGAR", "JUNAGADH", "KUTCH",
    "RAJKOT", "SURENDRANAGAR", "PORBANDAR", "DNH", "DAMAN",
    "DIU", "MUMBAI CITY", "RAIGAD", "RATNAGIRI", "THANE",
    "SINDHUDURG", "MUMBAI SUB", "NORTH GOA", "SOUTH GOA",
    "AHMEDNAGAR", "DHULE", "JALGAON", "KOLHAPUR", "NASHIK",
    "PUNE", "SANGLI", "SATARA", "SOLAPUR", "NANDURBAR",
    "BEED", "NANDED", "OSMANABAD", "PARBHANI", "LATUR",
    "JALNA", "HINGOLI", "AKOLA", "AMRAVATI", "BHANDARA",
    "BULDHANA", "CHANDRAPUR", "NAGPUR", "YAVATMAL", "WARDHA",
    "GADCHIROLI", "WASHIM", "GONDIA", "BASTAR", "DURG",
    "RAIGARH", "RAIPUR", "SURGUJA", "RAJNANDGAON", "DANTEWADA",
    "KANKER (NORH", "JANJGIR-CHAMP", "KORBA", "JASHPUR",
    "DHAMTARI", "MAHASAMUND", "KORIYA", "KOWARDHA (KAB",
    "NARAYANPUR", "BIJAPUR", "EAST GODAVARI", "WEST GODAVARI",
    "GUNTUR", "KRISHNA", "NELLORE", "PRAKASAM", "SRIKAKULAM",
    "VISAKHAPATNAM", "VIZIANAGARAM", "ADILABAD", "HYDERABAD",
    "KARIMNAGAR", "KHAMMAM", "MAHABUBNAGAR", "MEDAK", "NALGONDA",
    "NIZAMABAD", "WARANGAL", "RANGAREDDY", "ANANTAPUR",
    "CHITTOOR", "KUDDAPAH", "KURNOOL", "VELLORE", "COIMBATORE",
    "DHARMAPURI", "KANYAKUMARI", "CHENNAI", "MADURAI",
    "NILGIRIS", "RAMANATHAPURA", "SALEM", "THANJAVUR",
    "TIRUCHIRAPPAL", "TIRUNELVELI", "ERODE", "PUDUKKOTTAI",
    "DINDIGUL", "VIRUDHUNAGAR", "SIVAGANGA", "THOOTHUKUDI",
    "TIRUVANNAMALA", "NAGAPATTINAM", "VILUPPURAM", "CUDDALORE",
    "KANCHIPURAM", "TIRUVALLUR", "THENI", "NAMAKKAL", "KARUR",
    "PERAMBALUR", "TIRUVARUR", "KRISHNAGIRI", "ARIYALUR",
    "TIRUPUR", "PONDICHERRY", "KARAIKAL", "MAHE", "YANAM",
    "UTTAR KANNADA", "DAKSHIN KANDA", "UDUPI", "BELGAM",
    "BIDAR", "DHARWAD", "GULBARGA", "YADGIR", "RAICHUR",
    "BAGALKOTE", "GADAG", "HAVERI", "KOPPAL", "BANGALORE RUR",
    "BELLARY", "CHIKMAGALUR", "CHITRADURGA", "KODAGU",
    "HASSAN", "KOLAR", "MANDYA", "MYSORE", "SHIMOGA",
    "TUMKUR", "BANGALORE URB", "CHAMARAJANAGA", "DAVANGERE",
    "RAMNAGAR(BNGR)", "CHICKBALLAPUR", "ALAPPUZHA", "CANNUR",
    "ERNAKULAM", "KOTTAYAM", "KOZHIKODE", "MALAPPURAM",
    "PALAKKAD", "KOLLAM", "THRISSUR", "THIRUVANANTHA",
    "IDUKKI", "KASARGOD", "PATHANAMTHITTA", "WAYANAD",
    "LAKSHADWEEP"
  ];

  districts.sort((a, b) => a.localeCompare(b))

  const durations =['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
       'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'ANNUAL', 'Jan-Feb',
       'Mar-May', 'Jun-Sep', 'Oct-Dec']


  const [form, setForm] = useState({
    state_name:null,
    district:null,
    duration:null
  });
         
   // Handle state change
   const handleStateChange = (event) => {
    setForm({ ...form, state_name: event.target.value });
    };

  // Handle district change
  const handleDistrictChange = (event) => {
    setForm({ ...form, district: event.target.value });
    };

  // Handle duration change
  const handleDurationChange = (event) => {
    setForm({ ...form, duration: event.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://127.0.0.1:5000/rainfall', form);
    console.log('Response:', res.data.rainfall);
    setPredction(res.data.rainfall)
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
          value={form.state_name || ""}
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
          value={form.district || ""}
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
          htmlFor="durations"
          className="block mt-[30px] mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Duration
        </label>
        <select
          id="durations"
          value={form.duration || ""}
          onChange={handleDurationChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a duration</option>
          {durations.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="mt-[30px] relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 group-hover:from-teal-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Show Rainfall
          </span>
        </button>
      </form>
      <div className="max-w-full mx-auto bg-black mt-[30px] mx-[40px] p-[30px] rounded-md">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 inline-block text-transparent bg-clip-text ml-2">
          Rainfall : {prediction}mm
        </h2>
      </div>
    </div>
  );
};

export default Rainfall;
