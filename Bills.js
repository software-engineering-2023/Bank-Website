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
  
  // Hide details initially
  var details = document.getElementsByClassName("details");
  Array.from(details).forEach(function (detail) {
    detail.style.display = "none";
  });
  