  AOS.init();

  // contact us
  
  // Contact Us Name Validation (On Input)
function validateContactNameField() {
    var name = document.getElementById('contact-name').value;
    var nameError = document.getElementById('contact-name-error');
    var nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
        nameError.textContent = 'Please enter a valid name (alphabets only).';
        document.getElementById('contact-name').style.borderColor = "red";
    } else {
        nameError.textContent = '';
        document.getElementById('contact-name').style.borderColor = "";
    }
}

// Contact Us Phone Validation (On Input)
function validateContactPhoneField() {
    var phone = document.getElementById('contact-phone').value;
    var phoneError = document.getElementById('contact-phone-error');
    var phoneRegex = /^\d+$/;

    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Please enter a valid phone number (digits only).';
        document.getElementById('contact-phone').style.borderColor = "red";
    } else {
        phoneError.textContent = '';
        document.getElementById('contact-phone').style.borderColor = "";
    }
}

// Final Form Validation on Submit
function validateContactForm() {
    var nameValid = validateContactNameField(); // Check name field
    var phoneValid = validateContactPhoneField(); // Check phone field
    
    return nameValid && phoneValid; // Only proceed if both are valid
}

// feedback 

function validateNameField(input) {
    var nameError = document.getElementById("name-error");
    var nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(input.value)) {
        nameError.textContent = "Please enter a valid name (letters only).";
        input.style.borderColor = "red"; // Add visual cue
    } else {
        nameError.textContent = ""; // Clear error message
        input.style.borderColor = ""; // Reset border color
    }
}

function validateFeedbackForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var nameError = document.getElementById("name-error");

    // Validate First Name and Last Name
    var nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        nameError.textContent = "Please enter valid names (letters only).";
        return false; // Prevent form submission
    }

    return true; // Proceed with form submission if validation passes
}