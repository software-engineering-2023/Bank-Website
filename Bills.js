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
  
    // Dummy data for demonstration
    var billType = details.getAttribute("data-bill-type");
    var dueDateElement = details.querySelector(".due-date");
    var amountElement = details.querySelector(".amount");
  
    if (billType === "Gas") {
        dueDateElement.textContent = "Due Date: January 31, 2023";
        amountElement.textContent = "Fees: $50";
    } else if (billType === "Water") {
        dueDateElement.textContent = "Due Date: February 15, 2023";
        amountElement.textContent = "Fees: $35";
    } else if (billType === "Electricity") {
        dueDateElement.textContent = "Due Date: February 28, 2023";
        amountElement.textContent = "Fees: $75";
    } else if (billType === "Telephone") {
        dueDateElement.textContent = "Due Date: March 10, 2023";
        amountElement.textContent = "Fees: $45";
    }
}

// Event handler for Pay Now button
function handlePayNowClick() {
    var submissionMessage = document.querySelector(".submission-message");
    submissionMessage.style.display = "block";
}

// Attach event listeners to Show Details buttons
var showDetailsButtons = document.getElementsByClassName("show-details-button");
Array.from(showDetailsButtons).forEach(function (button) {
    button.addEventListener("click", handleShowDetailsClick);
});

// Attach event listener to Pay Now buttons
var payNowButtons = document.querySelectorAll(".bill-type button[onclick^='payBill']");
Array.from(payNowButtons).forEach(function (button) {
    button.addEventListener("click", handlePayNowClick);
});
