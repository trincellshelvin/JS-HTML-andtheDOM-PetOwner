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
            document.getElementById("cityOutput").textContent = this.city;
            document.getElementById("zipcodeOutput").textContent = this.zipcode;
        }
    };
    return petOwner;
}

// Example usage
// let p = createPetOwner("Trincell", "Shelvin", "Phoebe", "2252252222", "trincell@funny.com", "Baton Rouge", "70806");
// console.log(p); 
// p.status();

