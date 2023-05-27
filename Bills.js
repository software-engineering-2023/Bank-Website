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
    });

    partialPaymentInput.addEventListener("input", function () {
      const amount = parseFloat(this.value);
      const fees = parseFloat(feesElement.textContent.replace("Fees: $", ""));
      const accountBalance = parseFloat(document.querySelector(".credit-card-balance h3").textContent.replace("Account Balance: $", ""));

      if (amount <= accountBalance) {
        if (amount >= fees) {
          const updatedBalance = accountBalance - amount;
          feesElement.textContent = "Fees: Paid";
          submissionMessage.style.display = "block";
          errorMessage.textContent = "";
          fullPaymentButton.disabled = true;
          partialPaymentButton.disabled = true;
          partialPaymentInput.style.display = "none";
          document.querySelector(".credit-card-balance h3").textContent = "Account Balance: $" + updatedBalance.toFixed(2);
        } else {
          errorMessage.textContent = "Error: Payment amount should be greater than or equal to the fees.";
          submissionMessage.style.display = "none";
        }
      } else {
        errorMessage.textContent = "Error: Insufficient balance to make the payment.";
        submissionMessage.style.display = "none";
      }
    });
  });
});
