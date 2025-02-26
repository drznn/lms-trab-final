// main.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const logoutButton = document.getElementById('logoutButton');
    const foodList = document.getElementById('foodList');
    const establishmentSelect = document.getElementById('establishmentSelect');
    const addFoodButton = document.getElementById('addFoodButton');

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());
            const response = await authenticateUser(data);
            if (response.success) {
                window.location.href = 'donation.html';
            } else {
                alert(response.message);
            }
        });
    }

    // Handle registration form submission
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(registerForm);
            const data = Object.fromEntries(formData.entries());
            const response = await registerUser(data);
            if (response.success) {
                alert('Registration successful! Please log in.');
                window.location.href = 'login.html';
            } else {
                alert(response.message);
            }
        });
    }

    // Handle logout
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            logoutUser();
            window.location.href = 'login.html';
        });
    }

    // Fetch and display food donations
    async function fetchFoodDonations() {
        const response = await fetch('/api/food');
        const foodItems = await response.json();
        displayFoodItems(foodItems);
    }

    function displayFoodItems(foodItems) {
        foodList.innerHTML = '';
        foodItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'food-card';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Establishment:</strong> ${item.establishment}</p>
            `;
            foodList.appendChild(card);
        });
    }

    // Handle establishment filter
    if (establishmentSelect) {
        establishmentSelect.addEventListener('change', async () => {
            const selectedEstablishment = establishmentSelect.value;
            const response = await fetch(`/api/food?establishment=${selectedEstablishment}`);
            const filteredFoodItems = await response.json();
            displayFoodItems(filteredFoodItems);
        });
    }

    // Handle adding food donations
    if (addFoodButton) {
        addFoodButton.addEventListener('click', () => {
            // Logic to open a modal or redirect to add food page
            window.location.href = 'add-food.html';
        });
    }

    // Initial fetch of food donations
    fetchFoodDonations();
});