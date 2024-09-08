let state = {
    pets: [],
}

// Retrieve data from localStorage and log it
state.firstname = localStorage.getItem("firstname");
//console.log(state.firstname);
state.lastname = localStorage.getItem("lastname");
//console.log(state.lastname);
state.petsname = localStorage.getItem("petsname");
//console.log(state.petsname);
state.phonenumber = localStorage.getItem("phonenumber");
//console.log(state.phonenumber);
state.email = localStorage.getItem("email");
//console.log(state.email);
state.cityname = localStorage.getItem("cityname");
//console.log(state.cityname);
state.zipcode = localStorage.getItem("zipcode");
//console.log(state.zipcode);

let user = createPetOwner(state.firstname, state.lastname, state.petsname, state.phonenumber, state.email, state.cityname, state.zipcode);

user.render();