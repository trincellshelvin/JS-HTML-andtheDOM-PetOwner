function createPetOwner(firstname, lastname, petsname, phonenumber, email, city, zipcode) {
    let petOwner = {
        first: firstname,
        last: lastname,
        pets: petsname,
        phone: phonenumber,
        email: email,
        city: city,
        zipcode: zipcode,
        status: function () {
            console.log(`First Name: ${this.first} Last Name: ${this.last} Pet's Name: ${this.pets} Phone Number: ${this.phone} 
                Email: ${this.email} City: ${this.city} Zip Code: ${this.zipcode}`);
        },
        render: function() {
            document.getElementById("firstNameOutput").textContent = this.first;
            document.getElementById("lastNameOutput").textContent = this.last;
            document.getElementById("petsNameOutput").textContent = this.pets;
            document.getElementById("phoneNumberOutput").textContent = this.phone;
            document.getElementById("emailOutput").textContent = this.email;
            document.getElementById("citynameOutput").textContent = this.city;
            document.getElementById("zipcodeOutput").textContent = this.zipcode;
        }
    };
    return petOwner;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let state = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        petsname: document.getElementById('petsname').value,
        phonenumber: document.getElementById('phonenumber').value,
        email: document.getElementById('email').value,
        cityname: document.getElementById('cityname').value,
        zipcode: document.getElementById('zipcode').value
    };

    localStorage.setItem('firstname', state.firstname);
    localStorage.setItem('lastname', state.lastname);
    localStorage.setItem('petsname', state.petsname);
    localStorage.setItem('phonenumber', state.phonenumber);
    localStorage.setItem('email', state.email);
    localStorage.setItem('cityname', state.cityname);
    localStorage.setItem('zipcode', state.zipcode);

    let user = createPetOwner(state.firstname, state.lastname, state.petsname, state.phonenumber, state.email, state.cityname, state.zipcode);

    user.render();
});
