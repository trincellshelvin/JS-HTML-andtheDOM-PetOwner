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
            let firstname = document.getElementById("firstNameOutput");
            firstname.textContent = this.first;
            let lastname = document.getElementById("lastNameOutput");
            lastname.textContent = this.last;
            let petsname = document.getElementById("petsNameOutput");
            petsname.textContent = this.pets;
            let phonenumber = document.getElementById("phoneNumberOutput");
            phonenumber.textContent = this.phone;
            let email = document.getElementById("emailOutput");
            email.textContent = this.email;
            let city = document.getElementById("cityOutput");
            city.textContent = this.city;
            let zipcode = document.getElementById("zipCodeOutput");
            zipcode.textContent = this.zipcode;
        }
    };
    return petOwner;
}
