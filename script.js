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
