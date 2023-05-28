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

    fullPaymentButton.addEventListener("click", function () {
      const fees = parseFloat(feesElement.textContent.replace("Fees: $", ""));
      const accountBalance = parseFloat(document.querySelector(".credit-card-balance h3").textContent.replace("Account Balance: $", ""));

      if (accountBalance >= fees) {
        const updatedBalance = accountBalance - fees;
        feesElement.textContent = "Fees: Paid";
        submissionMessage.style.display = "block";
        errorMessage.textContent = "";
        fullPaymentButton.disabled = true;
        partialPaymentButton.disabled = true;
        partialPaymentInput.style.display = "none";
        document.querySelector(".credit-card-balance h3").textContent = "Account Balance: $" + updatedBalance.toFixed(2);
      } else {
        errorMessage.textContent = "Error: Insufficient balance to pay the bill.";
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
        payNowButton.disabled = false; // Enable the button if amount is a whole number and meets the conditions
      } else {
        payNowButton.disabled = true; // Disable the button if amount is not a whole number or does not meet the conditions
      }
    });

    payNowButton.addEventListener("click", function () {
      const amount = parseFloat(partialPaymentInput.value);
      const fees = parseFloat(feesElement.textContent.replace("Fees: $", ""));
      const accountBalance = parseFloat(document.querySelector(".credit-card-balance h3").textContent.replace("Account Balance: $", ""));

      if (amount < fees && amount <= accountBalance) {
        const updatedBalance = accountBalance - amount;
        const updatedFees = fees - amount;
        feesElement.textContent = "Fees: $" + updatedFees.toFixed(2);
        submissionMessage.style.display = "block";
        errorMessage.textContent = "";
        fullPaymentButton.disabled = true;
        partialPaymentButton.disabled = true;
        partialPaymentInput.disabled = true;
        payNowButton.disabled = true;
        document.querySelector(".credit-card-balance h3").textContent = "Account Balance: $" + updatedBalance.toFixed(2);
      } else if (amount === fees) {
        const updatedBalance = accountBalance - amount;
        feesElement.textContent = "Fees: Paid";
        submissionMessage.style.display = "block";
        errorMessage.textContent = "";
        fullPaymentButton.disabled = true;
        partialPaymentButton.disabled = true;
        partialPaymentInput.disabled = true;
        payNowButton.disabled = true;
        document.querySelector(".credit-card-balance h3").textContent = "Account Balance: $" + updatedBalance.toFixed(2);
      } else {
        errorMessage.textContent = "Error: Please enter a valid payment amount.";
        submissionMessage.style.display = "none";
      }
    });
  });
});
