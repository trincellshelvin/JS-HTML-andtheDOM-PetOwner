console.log("Hello from petCreator.js!")

let pets = createPet("Hello", "Dog", 10, 100);
let createPet = pets
status.pets();

//let state = {};
state.pets = [];

let addButton = document.getElementById("saveButton");
let petsnameInput = document.getElementById("petsName");
let petsspeciesInput = document.getElementById("petsSpecies");

function handleSave() {
    console.log("click to save");
    let name = petsnameInput.value;
    let species = petsspeciesInput.value;
    console.log(name);
    console.log(species);
    let pets = createPet(name, species, happiness, energy);
    let createPet = pets
    pets.status();
    console.log(pets.toHTML());
    state.pets.push(pets);
    render();
}
function render(){
    let html = "";
    for (let i=0; i<pets.length; i++){
        html += state.pets[i].toHTML();
        console.log(html);
    }
    let output = document.getElementById("petOutput");
    output.innerHTML = html;
}

addButton.addEventListener("click", handleSave);
