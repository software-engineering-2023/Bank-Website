// Function to handle toggling of details container
function toggleDetails(detailsContainer) {
    detailsContainer.classList.toggle('show');
  }
  
  // Function to simulate paying a bill
  function payBill(billType) {
    // Display the submission message
    const submissionMessage = document.querySelector('.submission-message');
    submissionMessage.style.display = 'block';
  }
  
  // Attach event listeners to the show details buttons
  const showDetailsButtons = document.querySelectorAll('.show-details-button');
  showDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
      const detailsContainer = button.nextElementSibling;
      toggleDetails(detailsContainer);
    });
  });
  
  // Attach event listeners to the pay now buttons
  const payNowButtons = document.querySelectorAll('.pay-now-button');
  payNowButtons.forEach(button => {
    button.addEventListener('click', () => {
      const billType = button.getAttribute('data-bill-type');
      payBill(billType);
    });
  });
  