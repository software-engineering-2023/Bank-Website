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
  