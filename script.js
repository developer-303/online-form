// Function to calculate age
function calculateAge() {
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    const dob = new Date(dobInput.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    ageInput.value = age || '';
}

// Expanded dataset for states and cities in India
const stateCityData = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Kakinada"],
    "Arunachal Pradesh": ["Itanagar", "Tawang", "Pasighat", "Ziro", "Bomdila"],
    "Assam": ["Guwahati", "Dibrugarh", "Jorhat", "Silchar", "Tezpur"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
    "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Korba", "Jagdalpur"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    "Haryana": ["Chandigarh", "Gurgaon", "Faridabad", "Ambala", "Panipat"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Solan", "Mandi"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Manipur": ["Imphal", "Thoubal", "Churachandpur", "Kakching", "Bishnupur"],
    "Meghalaya": ["Shillong", "Tura", "Nongpoh", "Cherrapunjee", "Jowai"],
    "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Wokha", "Tuensang"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Puri"],
    "Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
    "Sikkim": ["Gangtok", "Namchi", "Pelling", "Ravangla", "Gyalshing"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    "Tripura": ["Agartala", "Dharmanagar", "Kailashahar", "Udaipur", "Ambassa"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Rishikesh", "Haldwani"],
    "West Bengal": ["Kolkata", "Darjeeling", "Siliguri", "Asansol", "Durgapur"],
    "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur"],
    "Ladakh": ["Leh", "Kargil", "Nubra Valley", "Zanskar", "Pangong Tso"],
    "Andaman and Nicobar Islands": ["Port Blair", "Havelock Island", "Neil Island", "Diglipur"],
    "Chandigarh": ["Chandigarh"],
    "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
    "Lakshadweep": ["Kavaratti", "Agatti", "Minicoy"],
    "Delhi": ["New Delhi", "Old Delhi"],
    "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"]
  };
  
  // Populate states in the dropdown
  const stateDropdown = document.getElementById("state");
  for (const state in stateCityData) {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
  }
  
  // Populate cities based on selected state
  function loadCities() {
    const cityDropdown = document.getElementById("city");
    const selectedState = stateDropdown.value;
  
    // Clear existing cities
    cityDropdown.innerHTML = '<option value="" selected>Select City</option>';
  
    // Add cities for the selected state
    if (selectedState && stateCityData[selectedState]) {
      stateCityData[selectedState].forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
      });
    }
  }
  // Attach Validation Event
document.querySelector("form").addEventListener("submit", validateForm);