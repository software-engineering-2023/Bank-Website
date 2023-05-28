// transactions.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Find the "Try Now" button
  var tryNowBtn = document.querySelector('.try-now-btn');

  // Add a click event listener to the button
  tryNowBtn.addEventListener('click', function(event) {
    // Prevent the default behavior of the button
    event.preventDefault();

    // Redirect the user to "bills.html"
    window.location.href = 'bills.html';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var transactionTypeDropdown = document.getElementById('transaction-type');
  var transactionHistory = document.getElementById('transaction-history');

  transactionTypeDropdown.addEventListener('change', function() {
    var selectedType = transactionTypeDropdown.value;

    if (selectedType === 'bank-account') {
      // Dummy Bank Account Transactions
      var dummyTransactions = [
        { date: '2023-05-20', description: 'Deposit', amount: '1000 USD' },
        { date: '2023-05-18', description: 'Withdrawal', amount: '500 USD' },
        { date: '2023-05-15', description: 'Deposit', amount: '2000 USD' }
      ];

      renderTransactionHistory(dummyTransactions);
    } else if (selectedType === 'credit-card') {
      // Dummy Credit Card Transactions
      var dummyTransactions = [
        { date: '2023-05-19', description: 'Online Purchase', amount: '150 USD' },
        { date: '2023-05-16', description: 'Restaurant Bill', amount: '75 USD' },
        { date: '2023-05-12', description: 'Retail Store', amount: '50 USD' }
      ];

      renderTransactionHistory(dummyTransactions);
    }
  });

  // Trigger the change event on page load
  transactionTypeDropdown.dispatchEvent(new Event('change'));

  function renderTransactionHistory(transactions) {
    transactionHistory.innerHTML = '';

    if (transactions.length === 0) {
      transactionHistory.innerHTML = '<p>No transactions found.</p>';
    } else {
      transactions.forEach(function(transaction) {
        var transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');
        transactionItem.innerHTML = '<p>Date: ' + transaction.date + '</p>' +
                                    '<p>Description: ' + transaction.description + '</p>' +
                                    '<p>Amount: ' + transaction.amount + '</p>';

        transactionHistory.appendChild(transactionItem);
      });
    }
  }
});

// Get the pop-up element
var popup = document.getElementById("popup");

// Get the link for notifications
var link = document.querySelector(".text");

// Get the close button element
var close = document.querySelector(".close");

// When the user clicks on the link, open the pop-up
link.onclick = function() {
  popup.style.display = "block";
};

// When the user clicks on the close button, close the pop-up
close.onclick = function() {
  popup.style.display = "none";
};

// When the user clicks outside of the pop-up, close it
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
};


// dummy data
// Update checkbox labels with reminder message including dummy dates
var dummyDates = {
  gas: "June 1, 2023",
  electricity: "June 5, 2023",
  water: "June 10, 2023",
  telephone: "June 15, 2023",
  loans: "June 20, 2023",
  "credit-card": "June 25, 2023"
};

var checkboxGas = document.getElementById("gas");
checkboxGas.nextElementSibling.textContent = "Reminder: You have a gas bill to pay due (" + dummyDates.gas + ")";

var checkboxElectricity = document.getElementById("electricity");
checkboxElectricity.nextElementSibling.textContent = "Reminder: You have an electricity bill to pay due (" + dummyDates.electricity + ")";

var checkboxWater = document.getElementById("water");
checkboxWater.nextElementSibling.textContent = "Reminder: You have a water bill to pay due (" + dummyDates.water + ")";

var checkboxTelephone = document.getElementById("telephone");
checkboxTelephone.nextElementSibling.textContent = "Reminder: You have a telephone bill to pay due (" + dummyDates.telephone + ")";

var checkboxLoans = document.getElementById("loans");
checkboxLoans.nextElementSibling.textContent = "Reminder: You have a loan payment due (" + dummyDates.loans + ")";

var checkboxCreditCard = document.getElementById("credit-card");
checkboxCreditCard.nextElementSibling.textContent = "Reminder: You have a credit card bill to pay due (" + dummyDates["credit-card"] + ")";
