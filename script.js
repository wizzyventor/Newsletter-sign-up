
const signupForm = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
const mainContainer = document.getElementById('main-container');
const successMessage = document.getElementById('success-message');
const submittedEmail = document.getElementById('submitted-email');
const dismissBtn = document.getElementById('dismiss-btn');

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
        emailInput.classList.add('error-state');
        errorMsg.style.display = 'block';
    } else {
        // Success
        submittedEmail.textContent = emailValue;
        mainContainer.classList.add('hidden');
        successMessage.style.display = 'block';
    }
});

dismissBtn.addEventListener('click', () => {
    successMessage.style.display = 'none';
    mainContainer.classList.remove('hidden');
    emailInput.value = '';
    emailInput.classList.remove('error-state');
    errorMsg.style.display = 'none';
});