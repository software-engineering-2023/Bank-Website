document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var issueType = document.getElementById("issueType").value;
    var description = document.getElementById("description").value;
  
    // Perform further processing or submit the report data to the server
    // You can use AJAX or other techniques to send the data to the server
  
    // Example: Display a success message
    alert("Report submitted successfully!");
  });
  