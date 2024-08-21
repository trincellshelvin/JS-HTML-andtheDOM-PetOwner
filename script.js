console.log("hello world");

let state = {
    firstname: "",
    lastname: "",
    petsname: "",
    phonenumber: "",
    email: "",
    city: "",
    zipcode: ""
};

let savebtn = document.getElementById("savebutton");
let firstnameInput = document.getElementById("firstname");
let lastnameInput = document.getElementById("lastname");
let petsnameInput = document.getElementById("petsname");
let phonenumberInput = document.getElementById("phonenumber");
let emailInput = document.getElementById("email");
let cityInput = document.getElementById("city");
let zipcodeInput = document.getElementById("zipcode");

function handleSave() {
    console.log("Save button was clicked");
    state.firstname = firstnameInput.value;
    state.lastname = lastnameInput.value;
    state.petsname = petsnameInput.value;
    state.phonenumber = phonenumberInput.value;
    state.email = emailInput.value;
    state.city = cityInput.value;
    state.zipcode = zipcodeInput.value;

    console.log("Add name: " + state.firstname);
    console.log(state);

    firstnameInput.value = "";
    lastnameInput.value = "";
    petsnameInput.value = "";
    phonenumberInput.value = "";
    emailInput.value = "";
    cityInput.value = "";
    zipcodeInput.value = "";
}

let user = createPetOwner(state.firstname, state.lastname, state.petsname, state.phonenumber, state.email, state.city, state.zipcode);
user.status();
user.render();


savebtn.addEventListener("click", createPetOwner);