# JS-HTML-andtheDOM-PetOwner
## MY CHECKLIST
### Day 1 from [Day-1.md](https://github.com/rmccrear/codex-lv2-may-2024/blob/main/week-4-dom/assignment/day-1.md)
- [] Create an HTML File:
+ Create a file name index.html
+ Inside the <body>, create a form with fields for the pet owner's name, email, phone, city, zip code, and pet's name.
- [] Create a Javascript File:
+ Create a file named script.js.
    + proof of life: console.log "hello world" to make sure your script is connected.
+ Define a global object called state.
    + proof of life 1: console.log or console.table state so you can view your state in the console.
    + proof of life 2: set a breakpoint to examine your state object. (It should be empty at this point.)
+ Write a function named saveForm() Set an event listener on the button to fire saveForm onclick
    + proof of life: console.log "button clicked!" to make sure your button is hooked up.
+ Write code in your saveForm() that captures the form data and saves it into the state object.
    + proof of life 1: console.log or console.table each data input as you write it. For example, check you get the name before moving on to the email.
    + proof of life 2: set a breakpoint after getting the value your input. Check in Dev Tools to make sure your variables are set when you run it.
+ Log the state object to the console after the all data is saved.
- [] Bonus Task (Optional):
+ Add a select element to the form for selecting the pet type (e.g., dog, cat, fish).
+ Modify the saveForm() function to include the selected pet type in the state object.
+ Declare a factory function for your pet owner with a status method to print the pet owner's data to the console. (You may make one for the pet, too!)
+ Use Bootstrap or CSS flex to improve the appearance of your form.
- [] Connect Your HTML and JavaScript:

+ The <script> tag already links your script.js file to the index.html file.
- [] Test Your Form:

+ Open index.html in a web browser.
+ Fill out the form and click the "Sign Up" button.
+ Check the console to see the contents of the state object.
+ Remember to do a "proof of life" for each step of your program. Check that it works before moving on.