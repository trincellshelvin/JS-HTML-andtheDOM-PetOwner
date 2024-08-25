console.log("hello world");

document.addEventListener("DOMContentLoaded", function () {
    let savebtn = document.getElementById("savebutton");
    let firstnameInput = document.getElementById("firstnameOutput");
    let lastnameInput = document.getElementById("lastnameOutput");
    let petsnameInput = document.getElementById("petsnameOutput");
    let phonenumberInput = document.getElementById("phonenumberOutput");
    let emailInput = document.getElementById("emailOutput");
    let cityInput = document.getElementById("cityOutput");
    let zipcodeInput = document.getElementById("zipcodeOutput");

    // Initialize state object
    let state = {};

    function handleSave() {
        console.log("Save button was clicked");

        if (firstnameInput && lastnameInput && petsnameInput && phonenumberInput && emailInput && cityInput && zipcodeInput) {
            state.firstname = firstnameInput.value;
            state.lastname = lastnameInput.value;
            state.petsname = petsnameInput.value;
            state.phonenumber = phonenumberInput.value;
            state.email = emailInput.value;
            state.city = cityInput.value;
            state.zipcode = zipcodeInput.value;

            console.log(state.firstname);
            console.log(state);

            // Clear input fields
            firstnameInput.value = "";
            lastnameInput.value = "";
            petsnameInput.value = "";
            phonenumberInput.value = "";
            emailInput.value = "";
            cityInput.value = "";
            zipcodeInput.value = "";

            // Create a new pet owner and call its methods
            let user = createPetOwner(state.firstname, state.lastname, state.petsname, state.phonenumber, state.email, state.city, state.zipcode);
            user.status();
            user.render();
        }
    }

    // Add event listener to the save button
    savebtn.addEventListener("click", handleSave);
});

// Define the createPetOwner function
function createPetOwner(firstname, lastname, petsname, phonenumber, email, city, zipcode) {
    return {
        firstname: firstname,
        lastname: lastname,
        petsname: petsname,
        phonenumber: phonenumber,
        email: email,
        city: city,
        zipcode: zipcode,
        status: function() {
            console.log(`Owner: ${this.firstname} ${this.lastname}, Pet: ${this.petsname}`);
        },
        render: function() {
            console.log(`Rendering owner: ${this.firstname} ${this.lastname}`);
        }
    };
}



