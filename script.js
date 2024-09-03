console.log("hello world");

let savebtn = document.getElementById("savebutton");
let firstnameInput = document.getElementById("firstname");
let lastnameInput = document.getElementById("lastname");
let petsnameInput = document.getElementById("petsname");
let phonenumberInput = document.getElementById("phonenumber");
let emailInput = document.getElementById("email");
let citynameInput = document.getElementById("cityname");
let zipcodeInput = document.getElementById("zipcode");

function handleSave() {
    console.log("Save button was clicked");

    let state = {
        firstname: firstnameInput.value,
        lastname: lastnameInput.value,
        petsname: petsnameInput.value,
        phonenumber: phonenumberInput.value,
        email: emailInput.value,
        cityname: citynameInput.value,
        zipcode: zipcodeInput.value
    };

    localStorage.setItem("firstname", state.firstname);
    localStorage.setItem("lastname", state.lastname);
    localStorage.setItem("petsname", state.petsname);
    localStorage.setItem("phonenumber", state.phonenumber);
    localStorage.setItem("email", state.email);
    localStorage.setItem("cityname", state.cityname);
    localStorage.setItem("zipcode", state.zipcode);

    let user = createPetOwner(state.firstname, state.lastname, state.petsname, state.phonenumber, state.email, state.cityname, state.zipcode);
    user.status();
    user.render();
}

savebtn.addEventListener("click", handleSave);



    
    savebtn.addEventListener("click", handleSave);


function createPetOwner(firstname, lastname, petsname, phonenumber, email, cityname, zipcode) {
    return {
        firstname: "",
        lastname: "",
        petsname: "",
        phonenumber: "",
        email: "",
        cityname: "",
        zipcode: "",
        status: function () {
            console.log(`Owner: ${this.firstname} ${this.lastname}, Pet: ${this.petsname}`);
        },
        render: function () {
            console.log(`Rendering owner: ${this.firstname} ${this.lastname}`);
        }
    };
}


