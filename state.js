console.log("hi");
let state = {};
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
let zipcode = localStorage.getItem("zipCode");
console.log(zipCode);

state.firstname = firstname;
state.lastname = lastname;
state.petsname = petsname;
state.phonenumber = phonenumber;
state.email = email;
state.city = city;
state.zipcode = zipcode;

let user = createPetOwner(state.firstname, state.lastname, state.petsname, state.phonenumber, state.email, state.city, state.zipCode)

localStorage.setItem("firstname", state.firstname);
localStorage.setItem("lastname", state.lastname);
localStorage.setItem("petsname", state.petsname);
localStorage.setItem("phonenumber", state.phonenumber);
localStorage.setItem("email", state.email);
localStorage.setItem("city", state.city);
localStorage.setItem("zipcode", state.zipcode );