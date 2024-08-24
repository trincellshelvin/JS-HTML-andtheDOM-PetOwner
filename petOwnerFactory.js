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
            let pOwnerFname = document.getElementById("firstNameOutput");
            pOwnerFname.textContent = this.first;
            let pOwnerLname = document.getElementById("lastNameOutput");
            pOwnerLname.textContent = this.last;
            let petsName = document.getElementById("petsNameOutput");
            petsName.textContent = this.pets;
            let phoneNumber = document.getElementById("phoneNumberOutput");
            phoneNumber.textContent = this.phone;
            let eMail = document.getElementById("emailOutput");
            eMail.textContent = this.email;
            let cIty = document.getElementById("cityOutput");
            cIty.textContent = this.city;
            let zipcode = document.getElementById("zipcodeOutput");
            zipcode.textContent = this.zipcode;
        }
    };
    return petOwner;
}
let p =createPetOwner("trincell", "shelvin", "pheobe", 2252252222, "trincell@funny.com", "baton rouge", 70806);
console.log(p); p.status();
