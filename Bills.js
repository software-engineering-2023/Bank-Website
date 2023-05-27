var accountBalance = 200;

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
function handlePayNowClick(billType, feesElement, fullPaymentButton, partialPaymentButton) {
  var submissionMessage = feesElement.parentNode.querySelector(".submission-message");
  var errorMessage = feesElement.parentNode.querySelector(".error-message");

  var fees = parseFloat(feesElement.textContent.replace("$", ""));
  var remainingBalance = accountBalance - fees;

  // Check if the bill has already been paid in full
  if (feesElement.textContent.includes("Paid")) {
    submissionMessage.textContent = "This bill has already been paid in full.";
    submissionMessage.style.display = "block";
    return;
  }

  // Check if the account balance is sufficient for full payment
  if (remainingBalance >= 0) {
    // Update fees to "Paid"
    feesElement.textContent = "Fees: Paid";
    submissionMessage.textContent = "Payment submitted successfully.";
    submissionMessage.style.display = "block";

    // Disable the Pay Now buttons
    fullPaymentButton.disabled = true;
    partialPaymentButton.disabled = true;

    // Update account balance on the page
    var accountBalanceElement = document.querySelector(".credit-card-balance h3");
    accountBalanceElement.textContent = "Account Balance: $" + remainingBalance;
  } else {
    errorMessage.textContent = "Error: Insufficient balance to pay the bill.";
    errorMessage.style.display = "block";
  }
}

// Event handler for Partial Payment button
function handlePartialPaymentClick(feesElement, partialPaymentInput) {
  var errorMessage = feesElement.parentNode.querySelector(".error-message");

  var fees = parseFloat(feesElement.textContent.replace("$", ""));
  var partialPayment = parseFloat(partialPaymentInput.value);
  var remainingBalance = accountBalance - fees;

  // Check if the bill has already been paid in full
  if (feesElement.textContent.includes("Paid")) {
    errorMessage.textContent = "This bill has already been paid in full.";
    errorMessage.style.display = "block";
    return;
  }

  // Check if the partial payment amount is valid
  if (partialPayment > remainingBalance || partialPayment > fees || partialPayment <= 0 || isNaN(partialPayment)) {
    errorMessage.textContent = "Error: Invalid partial payment amount.";
    errorMessage.style.display = "block";
    return;
  }

  // Update fees and account balance
  feesElement.textContent = "Fees: $" + (fees - partialPayment).toFixed(2);
  accountBalance -= partialPayment;

  // Clear the partial payment input field
  partialPaymentInput.value = "";

  // Hide the error message
  errorMessage.style.display = "none";

  // Update account balance on the page
  var accountBalanceElement = document.querySelector(".credit-card-balance h3");
  accountBalanceElement.textContent = "Account Balance: $" + accountBalance;
}

// Attach event listeners to Show Details buttons
var showDetailsButtons = document.getElementsByClassName("show-details-button");
Array.from(showDetailsButtons).forEach(function(button) {
  button.addEventListener("click", handleShowDetailsClick);
});

// Attach event listeners to Pay Now buttons
var payNowButtons = document.querySelectorAll(".pay-now-button");
Array.from(payNowButtons).forEach(function(button) {
  var billType = button.parentNode.parentNode.getAttribute("data-bill-type");
  var feesElement = button.parentNode.querySelector(".fees");
  var fullPaymentButton = button.parentNode.querySelector(".full-payment-button");
  var partialPaymentButton = button.parentNode.querySelector(".partial-payment-button");

  fullPaymentButton.addEventListener("click", function() {
    handlePayNowClick(billType, feesElement, fullPaymentButton, partialPaymentButton);
  });

  partialPaymentButton.addEventListener("click", function() {
    var partialPaymentInput = button.parentNode.querySelector(".partial-payment-input");
    handlePartialPaymentClick(feesElement, partialPaymentInput);
  });
});

// Hide details initially
var details = document.getElementsByClassName("details");
Array.from(details).forEach(function(detail) {
  detail.style.display = "none";
});
