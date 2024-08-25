console.log("hello world");
    let savebtn = document.getElementById("savebutton");
    let firstnameInput = document.getElementById("firstnameOutput");
    let lastnameInput = document.getElementById("lastnameOutput");
    let petsnameInput = document.getElementById("petsnameOutput");
    let phonenumberInput = document.getElementById("phonenumberOutput");
    let emailInput = document.getElementById("emailOutput");
    let cityInput = document.getElementById("cityOutput");
    let zipcodeInput = document.getElementById("zipcodeOutput");

    function handleSave() {
        console.log("Save button was clicked");

        localStorage.setItem("firstname", state.firstname);
        localStorage.setItem("lastname", state.lastname);
        localStorage.setItem("petsname", state.petsname);
        localStorage.setItem("phonenumber", state.phonenumber);
        localStorage.setItem("email", state.email);
        localStorage.setItem("city", state.city);
        localStorage.setItem("zipcode", state.zipcode);
abc


        

        let user = createPetOwner(state.firstname, state.lastname, state.petsname, state.phonenumber, state.email, state.city, state.zipcode);
        user.status();
        user.render();
    }


    
    savebtn.addEventListener("click", handleSave);


function createPetOwner(firstname, lastname, petsname, phonenumber, email, city, zipcode) {
    return {
        firstname: "",
        lastname: "",
        petsname: "",
        phonenumber: "",
        email: "",
        city: "",
        zipcode: "",
        status: function () {
            console.log(`Owner: ${this.firstname} ${this.lastname}, Pet: ${this.petsname}`);
        },
        render: function () {
            console.log(`Rendering owner: ${this.firstname} ${this.lastname}`);
        }
    };
}


