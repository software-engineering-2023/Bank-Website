// Global variable
let isLoggedIn = false;

// Function to set isLoggedIn to true
function setLoggedIn() {
    isLoggedIn = true;
}

// Example login function
function loginInUserPage() {
    // Perform login validation and authentication here
    // If login is successful, call the setLoggedIn() function
    var username = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    if (username == "seif.hoss@lol.com" && password == "123") {
        setLoggedIn();
        window.location.href = "transactions.html";
    } else {
        if (username == "banker@lol.com" && password == "123") {
            setLoggedIn();
            window.location.href = "BankerAccount.html";
        }
        else {
            if (username == "admin@lol.com" && password == "123") {
                setLoggedIn();
                window.location.href = "admin.html";
            }
            else {
                alert("Wrong username or password.");
            }
        }
    }
}

function checkIfLoggedIn(event) {
    if (!isLoggedIn) {
        event.preventDefault(); // Prevent the default behavior of the link element
        alert("You are not logged in.");
    }
}  