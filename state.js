console.log("hi");
let state = {
    pets: [],
    petOwner: [],
};
let firstname = localStorage.getItem("firstname");
console.log(firstname);
let lastname = localStorage.getItem("lastname");
console.log(lastname);
let petsname = localStorage.getItem("petsname");
console.log(petsname);
let phonenumber = localStorage.getItem("phonenumber");
console.log(phonenumber);
let email = localStorage.getItem("email");
console.log(email);
let city = localStorage.getItem("city");
console.log(city);
let zipcode = localStorage.getItem("zipcode");
console.log(zipcode);



state.firstname = firstname;
state.lastname = lastname; 
state.petsname = petsname;
state.phonenumber = phonenumber;
state.email = email;
state.city = city;
state.zipcode = zipcode;

firstnameOutput.value = "";;
lastnameOutput.value = "";
petsnameOutput.value = "";
phonenumberOutput.value = "";
emailOutput.value = "";
cityOutput.value = "";
zipcodeOutput.value = "";

let user = createPetOwner(state.firstname, state.lastname, state.petsname, state.phonenumber, state.email, state.city, state.zipcode)

