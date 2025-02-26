const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// GET all food donations
router.get('/', foodController.getAllFoodItems);

// POST a new food donation
router.post('/', foodController.addFoodItem);

// PUT to update a food donation
router.put('/:id', foodController.updateFoodItem);

// DELETE a food donation
router.delete('/:id', foodController.deleteFoodItem);

module.exports = router;