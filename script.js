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

let savbtn = document.getElementById(savebutton);
let firstnameInput = document.getElementById(firstname);
let lastnameInput = document.getElementById(lastname);
let petsnameInput = document.getElementById(phonenumber);
let emailInput = document.getElementById(email);
let cityInput = document.getElementById(city);
let zipcodeInput = document.getElementById(zipcode);

function handleSave(){
    console.log("Save button was clicked");
    let name = firstnameInput.value;
    state.name = name;
    state.lastname = lastnameInput;
    state.petsname = petsnameInput;
    state.email = emailInput;
    


}