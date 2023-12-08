document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username-login');
    const passwordInput = document.getElementById('password-login');

    // If form exists and username and password are not empty
    if (form && usernameInput && passwordInput) {
        form.addEventListener('loginBtn2', function (event) {
            const username = usernameInput.value;
            const password = passwordInput.value;
            let formValid = true;
            
            // If username is empty, show error on page
            if (username.trim() === '') {
                formValid = false;
            }

            // If password is empty, show error on page
            if (password.trim() === '') {
                formValue = false;
            }

            // If form is not valid 
            if (!formValid) {
                event.preventDefault();
            }
        });
    }
});