console.log("hello world");
let state = {
    firtname: "",
    lastname: "",
    petsname: "",
    phonenumber: "",
    email: "",
    city: "",
    zipcode: ""
};

let savebtn = document.getElementById(savebutton);
let firstnameInput = document.getElementById(firstname);
let lastnameInput = document.getElementById(lastname);
let petsnameInput = document.getElementById(petsname);
let phonenumberInput = document.getElementById(phonenumber);
let emailInput = document.getElementById(email);
let cityInput = document.getElementById(city);
let zipcodeInput = document.getElementById(zipcode);

function handleSave(){
    console.log("Save button was clicked");
    let name = firstnameInput.value;
    state.name = name;
    state.lastname = lastnameInput;
    state.petsname = petsnameInput;
    state.phonenumber = phonenumberInput;
    state.email = emailInput;
    state.city = cityInput;
    state.zipcode =zipcodeInput;
console.log("Add name" + state.name);
console.log(state);
firstnameInput.value = "";
lastnameInput.value = "";
petsnameInput.value = "";
phonenumberInput.value = "";
emailInput.value = "";
cityInput.value = "";
zipcodeInput.value = "";
}

let user = petOwner(state.name, state.lastname, state.petsname, state.phonenumber, state.email, state.city, state.zipCode);
user.status();
user.render();

savebutton.addEventListener("click", handleSave, createPetOwner);