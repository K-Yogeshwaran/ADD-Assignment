function validateForm() {
   
    clearErrors();

    let isValid = true;

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

   
    if (name === '') {
        showError('name', 'Name is required');
        isValid = false;
    }

   
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === '') {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email');
        isValid = false;
    }

   
    if (password === '') {
        showError('password', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters');
        isValid = false;
    }

  
    if (confirmPassword === '') {
        showError('confirmPassword', 'Please confirm your password');
        isValid = false;
    } else if (confirmPassword !== password) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }

    return isValid; 
}


function showError(inputId, message) {
    const errorElement = document.getElementById({inputId}-error);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}


function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });
}






//52 --- $