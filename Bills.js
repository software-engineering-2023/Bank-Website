var creditCardBalance = 200;

// Helper function to toggle visibility of an element
function toggleVisibility(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// Event handler for Show Details button
function handleShowDetailsClick(event) {
  var details = event.target.nextElementSibling;
  toggleVisibility(details.id);
}

// Event handler for Pay Now button
function handlePayNowClick(event) {
  var button = event.target;
  var billType = button.parentNode.getAttribute("data-bill-type");
  var feesElement = button.parentNode.querySelector(".fees");
  var submissionMessage = button.parentNode.querySelector(".submission-message");
  var errorMessage = button.parentNode.querySelector(".error-message");

  var fees = parseFloat(feesElement.textContent.replace("Fees: $", ""));
  if (creditCardBalance >= fees) {
    creditCardBalance -= fees;
    feesElement.textContent = "Fees: Paid";
    submissionMessage.style.display = "block";
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Error: Insufficient balance to pay the bill.";
    submissionMessage.style.display = "none";
  }

  button.disabled = true;
  button.textContent = "Paid";

  var creditCardBalanceElement = document.querySelector(".credit-card-balance h3");
  creditCardBalanceElement.textContent = "Credit Card Balance: $" + creditCardBalance;
}

// Attach event listeners to Show Details buttons
var showDetailsButtons = document.getElementsByClassName("show-details-button");
Array.from(showDetailsButtons).forEach(function(button) {
  button.addEventListener("click", handleShowDetailsClick);
});

// Attach event listener to Pay Now buttons
var payNowButtons = document.querySelectorAll(".bill-type button");
Array.from(payNowButtons).forEach(function(button) {
  if (button.textContent === "Pay Now") {
    button.addEventListener("click", handlePayNowClick);
  }
});

// Hide details initially
var details = document.getElementsByClassName("details");
Array.from(details).forEach(function(detail) {
  detail.style.display = "none";
});
