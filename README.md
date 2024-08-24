# JS-HTML-andtheDOM-PetOwner
## __ Day-1
Assignment: Create a Pet Owner Sign-Up Form
Objective:
Create a simple HTML form that collects information about a pet owner and stores the data in a global JavaScript object called state. The form will not submit data to a server but will log the state object to the console.

NOTE: This time, don't include a input with type of "submit" in your form. We don't want to submit the form. We want to capture the data in JavaScript. So instead of a "submit" input, use a button with type of "button".

Instructions:
[x] Create an HTML File:
Create a file named index.html.
Inside the <body>, create a form with fields for the pet owner's name, email, phone, city, zip code, and pet's name.
Create a JavaScript File:

[x]Create a file named script.js.
proof of life: console.log "hello world" to make sure your script is connected.
Define a global object called state.
proof of life 1: console.log or console.table state so you can view your state in the console.
proof of life 2: set a breakpoint to examine your state object. (It should be empty at this point.)
Write a function named saveForm() Set an event listener on the button to fire saveForm onclick
proof of life: console.log "button clicked!" to make sure your button is hooked up.
Write code in your saveForm() that captures the form data and saves it into the state object.
proof of life 1: console.log or console.table each data input as you write it. For example, check you get the name before moving on to the email.
proof of life 2: set a breakpoint after getting the value your input. Check in Dev Tools to make sure your variables are set when you run it.
Log the state object to the console after the all data is saved.
Bonus Task (Optional):

Add a select element to the form for selecting the pet type (e.g., dog, cat, fish).
Modify the saveForm() function to include the selected pet type in the state object.
Declare a factory function for your pet owner with a status method to print the pet owner's data to the console. (You may make one for the pet, too!)
Use Bootstrap or CSS flex to improve the appearance of your form.
Connect Your HTML and JavaScript:

The <script> tag already links your script.js file to the index.html file.
Test Your Form:

Open index.html in a web browser.
Fill out the form and click the "Sign Up" button.
Check the console to see the contents of the state object.
Remember to do a "proof of life" for each step of your program. Check that it works before moving on.
A note about state
The "state" of a program refers to the current condition or status of a program, or component at a specific point in time. This includes the values of all the variables (the data). So, we will put all the global data into one object. We will give the variable that holds it all state to indicate it contains the primary data the program needs to operate.

Here is an example what your state object would look like after logging it to the console.

{
   name: 'Bob',
   phone: '555-555-5555',
   city: 'Nashville',
   zip: 37011,
   email: 'bob@example.com',
   petName: 'Rex'
}
Submission:
Submit your index.html and script.js files. Ensure your code is well-commented, explaining each

## __ Day 2
Assignment: Creating a petOwner Factory Function and Rendering Content to the DOM with a Button Click
Overview
In this assignment, you will create a factory function called createPetOwner that generates a petOwner object with a render method. This method will display the pet owner's details on the webpage when a button is clicked. You'll update the webpage dynamically by setting the textContent of specific DOM elements.

Note: This will extend your work on your previous assignment from day 1.

### Instructions
Update your index.html and your script.js files from yesterday.

[x] 1. Create the createPetOwner Factory Function:

[x] Create a JavaScript file named petOwnerFactory.js.
proof of life: verify that this works with console.log.
Define a factory function called createPetOwner that takes parameters like the pet owner's name, pet name, and pet type.
proof of life: verify that this works at each step with console.log and Dev Tools.
The function should return an object with these properties.
proof of life: use console.log and the Console in Dev Tools to test this factory function.
Update the EventListener

update the EventLister function so that it creates a petOwner after the user clicks the button. (HINT: You won't necessarily need a new function, just update the old function from Day 1.)
Note: create the petOwner from the data that you stored in global state. This will help us decouple the form from the data and the display.
Update the HTML File:

Ensure your HTML file has elements with ids that match the properties of the petOwner object (e.g., ownerName, ownerCity, petName).
{x} Add a status Method:

Inside the factory function, add a method called status.
This will print the data of the petOwner to the console as a string or table.
Add a render Method:

Inside the factory function, add a method called render.