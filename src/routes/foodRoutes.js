const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// GET all food donations
router.get('/', foodController.getAllFood);

// POST a new food donation
router.post('/', foodController.addFood);

// PUT to update a food donation
router.put('/:id', foodController.updateFood);

// DELETE a food donation
router.delete('/:id', foodController.deleteFood);

module.exports = router;