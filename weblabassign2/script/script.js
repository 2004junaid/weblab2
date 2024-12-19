$(document).ready(function () {
    // Attach a submit event handler to the form
    $("#registrationForm").on("submit", function (e) {
      // Prevent default form submission for validation
      e.preventDefault();
  
      // Get input values
      let name = $("#name").val().trim();
      let email = $("#email").val().trim();
      let phone = $("#phone").val().trim();
      let password = $("#password").val().trim();
  
      // Validate inputs
      if (name === "") {
        alert("Name is required.");
        return;
      }
  
      if (email === "" || !validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
      }
  
      if (phone === "" || !validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
      }
  
      if (password === "") {
        alert("Password is required.");
        return;
      }
  
      // Submit the form if validation passes
      alert("Validation successful! Submitting form...");
      this.submit();
    });
  
    // Helper function to validate email
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Helper function to validate phone number
    function validatePhone(phone) {
      const phoneRegex = /^[0-9]{10}$/;
      return phoneRegex.test(phone);
    }
  });
  