document.addEventListener("DOMContentLoaded", function () {
  const billTypes = document.querySelectorAll(".bill-type");

  billTypes.forEach(function (billType) {
    const showDetailsButton = billType.querySelector(".show-details-button");
    const feesElement = billType.querySelector(".fees");
    const submissionMessage = billType.querySelector(".submission-message");
    const errorMessage = billType.querySelector(".error-message");
    const fullPaymentButton = billType.querySelector(".full-payment-button");
    const partialPaymentButton = billType.querySelector(".partial-payment-button");
    const partialPaymentInput = billType.querySelector(".partial-payment-input");
    const payNowButton = billType.querySelector(".pay-now-button");

    showDetailsButton.addEventListener("click", function () {
      const details = billType.querySelector(".details");
      details.style.display = "block";
    });

    function deleteBill() {
      const billTypeElement = button.parentNode.parentNode;
      billTypeElement.parentNode.removeChild(billTypeElement);
    }

    // Event listener for "Pay in Full" button
    fullPaymentButton.addEventListener("click", function () {
      const fees = parseFloat(feesElement.textContent.replace("Fees: $", ""));
      const accountBalance = parseFloat(document.querySelector(".credit-card-balance h3").textContent.replace("Account Balance: $", ""));

      if (accountBalance >= fees) {
        const updatedBalance = accountBalance - fees;
        feesElement.textContent = "Fees: Paid";
        submissionMessage.style.display = "block";
        submissionMessage.textContent = "Full payment is submitted successfully.";
        errorMessage.textContent = "";
        fullPaymentButton.disabled = true;
        partialPaymentButton.disabled = true;
        partialPaymentInput.disabled = true;
        payNowButton.disabled = true;
        document.querySelector(".credit-card-balance h3").textContent = "Account Balance: $" + updatedBalance.toFixed(2);

        setTimeout(function () {
          var billTypeElement = fullPaymentButton.parentNode.parentNode;
          billTypeElement.parentNode.removeChild(billTypeElement);
        }, 5000); // Remove the bill after 5 seconds
      } else {
        errorMessage.textContent = "Error: Insufficient balance to pay the bill.";
        errorMessage.style.color = "red";
        submissionMessage.style.display = "none";
      }
    });



    partialPaymentButton.addEventListener("click", function () {
      partialPaymentInput.style.display = "block";
      payNowButton.style.display = "block";
      payNowButton.disabled = true; // Disable the button initially
    });

    partialPaymentInput.addEventListener("input", function () {
      const amount = parseFloat(this.value);
      const fees = parseFloat(feesElement.textContent.replace("Fees: $", ""));
      const accountBalance = parseFloat(document.querySelector(".credit-card-balance h3").textContent.replace("Account Balance: $", ""));

      if (amount <= fees && amount <= accountBalance && Number.isInteger(amount)) {
        errorMessage.textContent = "Amount is valid.";
        //change the color of the text to green
        errorMessage.style.color = "green";
        submissionMessage.style.display = "none";
        payNowButton.disabled = false; // Enable the button if amount is a whole number and meets the conditions
      }
      else {
        if(!Number.isInteger(amount)){
        errorMessage.textContent = "Error: Invalid amount.";
        errorMessage.style.color = "red";
        submissionMessage.style.display = "none";}
        if(amount > fees){
        errorMessage.textContent = "Error: Payment amount exceeds bills's fees.";
        errorMessage.style.color = "red";
        submissionMessage.style.display = "none";
        }
        if(amount > accountBalance){
        errorMessage.textContent = "Error: Payment amount exceeds account balance.";
        errorMessage.style.color = "red";
        submissionMessage.style.display = "none";
        }
        payNowButton.disabled = true; // Disable the button if amount is not a whole number or does not meet the conditions
      }
    });

    payNowButton.addEventListener("click", function () {
      const amount = parseFloat(partialPaymentInput.value);
      const fees = parseFloat(feesElement.textContent.replace("Fees: $", ""));
      const accountBalance = parseFloat(document.querySelector(".credit-card-balance h3").textContent.replace("Account Balance: $", ""));
      
      if (amount <= accountBalance && amount <= fees) {
        const updatedBalance = accountBalance - amount;
        const updatedFees = fees - amount;
    
        if (updatedFees === 0) {
          feesElement.textContent = "Fees: Paid";
          submissionMessage.style.display = "block";
          submissionMessage.textContent = "Full payment is submitted successfully.";
          errorMessage.textContent = "";
          fullPaymentButton.disabled = true;
          partialPaymentButton.disabled = true;
          partialPaymentInput.disabled = true;
          payNowButton.disabled = true;
          document.querySelector(".credit-card-balance h3").textContent = "Account Balance: $" + updatedBalance.toFixed(2);
    
          setTimeout(function () {
            var billTypeElement = payNowButton.parentNode.parentNode;
            billTypeElement.parentNode.removeChild(billTypeElement);
          }, 5000);
        } else if (updatedFees > 0) {
          feesElement.textContent = "Fees: $" + updatedFees.toFixed(2);
          submissionMessage.style.display = "block";
          submissionMessage.textContent = "Partial payment submitted successfully!";
          errorMessage.textContent = "";
          document.querySelector(".credit-card-balance h3").textContent = "Account Balance: $" + updatedBalance.toFixed(2);
        }
      } else {
        errorMessage.textContent = "Error: Payment amount exceeds account balance or is invalid.";
        submissionMessage.style.display = "none";
      }
    });
    
    
    
    




  });
});
