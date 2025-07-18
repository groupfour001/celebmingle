// Password visibility toggle
document.querySelectorAll('.toggle-password-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        const icon = this.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });
});

// Registration form logic
const registerForm = document.getElementById('registerForm');

const overlay = document.querySelector('.register-overlay');
const errorDisplay = document.getElementById('errorDisplay');
const errorMessage = document.getElementById('errorMessage');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Get values
    const name = registerForm.name.value.trim();
    const phone = registerForm.phone.value.trim();
    const dob = registerForm.dob.value;
    const email = registerForm.email.value.trim();
    const confirmEmail = registerForm.confirmEmail.value.trim();
    const address = registerForm.address.value.trim();
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirmPassword.value;
    const terms = registerForm.terms.checked;

    // Validation
    if (!name || !phone || !dob || !email || !confirmEmail || !address || !password || !confirmPassword) {
        showError('Please fill in all fields.');
        return;
    }
    if (!/^\d{10,15}$/.test(phone)) {
        showError('Please enter a valid phone number (10-15 digits).');
        return;
    }
    if (email !== confirmEmail) {
        showError('Email addresses do not match.');
        return;
    }
    if (password.length < 6) {
        showError('Password must be at least 6 characters.');
        return;
    }
    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }
    if (!terms) {
        showError('You must agree to the Terms & Conditions.');
        return;
    }

    // Show loading overlay
    overlay.style.display = 'flex';

    // Simulate registration (replace with Firebase logic)
    setTimeout(() => {
        overlay.style.display = 'none';
        alert('Registration successful!');
        registerForm.reset();
    }, 1500);
});

function showError(msg) {
    errorMessage.textContent = msg;
    errorDisplay.style.display = 'flex';
    setTimeout(() => {
        errorDisplay.style.display = 'none';
    }, 3000);
}
