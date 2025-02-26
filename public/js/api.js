// This file contains functions to interact with the RESTful API for food donations.

const apiUrl = 'http://localhost:3000/api/foods'; // Base URL for the API

// Function to get all food donations
async function getFoodDonations() {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching food donations:', error);
        throw error;
    }
}

// Function to add a new food donation
async function addFoodDonation(foodData) {
    try {
        const response = await axios.post(apiUrl, foodData);
        return response.data;
    } catch (error) {
        console.error('Error adding food donation:', error);
        throw error;
    }
}

// Function to update an existing food donation
async function updateFoodDonation(id, foodData) {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, foodData);
        return response.data;
    } catch (error) {
        console.error('Error updating food donation:', error);
        throw error;
    }
}

// Function to delete a food donation
async function deleteFoodDonation(id) {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting food donation:', error);
        throw error;
    }
}