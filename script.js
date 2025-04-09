window.onload = function () {
  document.getElementById("fullName").value = localStorage.getItem("fullName") || "";
  document.getElementById("email").value = localStorage.getItem("email") || "";
  document.getElementById("phone").value = localStorage.getItem("phone") || "";
  document.getElementById("departureCity").value = localStorage.getItem("departureCity") || "";
  document.getElementById("destinationCity").value = localStorage.getItem("destinationCity") || "";
  document.getElementById("terms").checked = localStorage.getItem("terms") === "true";
  
};
const form = document.getElementById("flightForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const departure = document.getElementById("departureCity").value.trim();
  const destination = document.getElementById("destinationCity").value.trim();
  const terms = document.getElementById("terms").checked;

  document.getElementById("fullNameError").textContent = fullName.match(/^[A-Za-z ]+$/) ? "" : "Enter valid name";
  document.getElementById("emailError").textContent = email.match(/^\S+@\S+\.\S+$/) ? "" : "Enter valid email";
  document.getElementById("phoneError").textContent = phone.match(/^[6-9]\d{9}$/) ? "" : "Enter valid phone";
  document.getElementById("departureError").textContent = departure ? "" : "Enter departure city";
  document.getElementById("destinationError").textContent = destination ? "" : "Enter destination city";
  document.getElementById("termsError").textContent = terms ? "" : "Please accept terms";

  if (!fullName.match(/^[A-Za-z ]+$/) || !email.match(/^\S+@\S+\.\S+$/) || !phone.match(/^[6-9]\d{9}$/) || !departure || !destination || !terms) {
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("departureCity", departure);
    localStorage.setItem("destinationCity", destination);
    localStorage.setItem("terms", terms);
    alert("Your details have been successfully stored in the local storage.");
  }
});

// Instructions: 
// ❖ The objective of this assignment is Validation. 
// ❖ Kindly reuse the form you built in HTML & CSS Assignment (Form Design). Below, we have listed some of the fields from your form. Please ensure validation for these fields. 
// ❖ Validate the fields using JavaScript regular expressions (Regex); Do not rely on HTML validation. 
// ➤ Use <input type="text"> for mobile, email, number, name, website, url etc.. 
// ➤ Do not use the "required" attribute in the input field. 
// ❖ Validation must be performed for all the specified fields. If a field is empty or in an incorrect format, the corresponding message should be displayed through a warning message should appear at the bottom of the respective input field. 
// Each form contains a button at the bottom, such as Submit, Apply, Next, etc. After performing all the validation When the user clicks on that button, you need to store all the user input to the browser's local storage and show a popup that says, 'Your details have been successfully stored in the local storage'. 
// When the user reloads the page, you need to populate the user-entered information in the form. 
// How to store the data in the local storage? 
// var firstName = document.getElementById('txtFirstName').value; 
// localStorage['firstName'] = firstName; 
// (or) 
// localStorage.setItem('firstName', firstName);
// How to retrieve the data from localStorage? 
// console.log(localStorage['firstName']);
// localStorage.getItem('firstName');
//  11. Flight Booking Form: Full Name, Email, Phone Number, Departure City, Destination City, Terms and Conditions Checkbox
// (or) 
// console.log(localStorage.getItem('firstName')); 