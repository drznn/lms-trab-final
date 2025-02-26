// auth.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            loginUser(username, password);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = registerForm.username.value;
            const password = registerForm.password.value;

            registerUser(username, password);
        });
    }
});

function loginUser(username, password) {
    axios.post('/api/auth/login', { username, password })
        .then(response => {
            if (response.data.success) {
                window.location.href = 'index.html'; // Redirect to main page
            } else {
                alert(response.data.message);
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('Login failed. Please try again.');
        });
}

function registerUser(username, password) {
    axios.post('/api/auth/register', { username, password })
        .then(response => {
            if (response.data.success) {
                alert('Registration successful! You can now log in.');
                window.location.href = 'login.html'; // Redirect to login page
            } else {
                alert(response.data.message);
            }
        })
        .catch(error => {
            console.error('Error during registration:', error);
            alert('Registration failed. Please try again.');
        });
}

function logoutUser() {
    axios.post('/api/auth/logout')
        .then(response => {
            if (response.data.success) {
                window.location.href = 'login.html'; // Redirect to login page
            }
        })
        .catch(error => {
            console.error('Error during logout:', error);
        });
}