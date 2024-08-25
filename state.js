console.log("hi");
let state = {
    pets: [],
}

// Retrieve data from localStorage and log it
state.firstname = localStorage.getItem("firstname");
//console.log(state.firstname);
state.lastname = localStorage.getItem("lastname");
//c//onsole.log(state.lastname);
state.petsname = localStorage.getItem("petsname");
//console.log(state.petsname);
state.phonenumber = localStorage.getItem("phonenumber");
console.log(state.phonenumber);
state.email = localStorage.getItem("email");
//console.log(state.email);
state.city = localStorage.getItem("city");
//console.log(state.city);
state.zipcode = localStorage.getItem("zipcode");
//console.log(state.zipcode);

let user = createPetOwner(state.firstname, state.lastname, state.petsname, state.phonenumber, state.email, state.city, state.zipcode);

