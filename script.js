document.addEventListener('DOMContentLoaded',function() {
    //select form
    const form = document.getElementById("registration-form");
    //feedback division selection
    const feedbabckDiv = document.getElementById("form-feedback");
    //event listener
    document.addEventListener("submit", function(event) {
        event.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    //variables
    let isValid = "true";
    let messages = [];
    //username validation
    if(username.length < 3) {
        isValid = false;
        messages.push("Username must be at least characters long.");
    }
    //email validation
     if(!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Please enter a valid email address.");
     }
     //password validation
     if(password.length < 8){
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
     }
     //display the feedback box
     feedbabckDiv.style.display = "block";
     if(isValid){
       feedbabckDiv.textContent = "Registration successful!";
       feedbabckDiv.style.color = "#28a745";
     }else{
        feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
     }
    });
})
