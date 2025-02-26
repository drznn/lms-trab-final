const foodItems = [];

exports.getAllFoodItems = (req, res) => {
    res.status(200).json(foodItems);
};

exports.addFoodItem = (req, res) => {
    const { name, description, establishment } = req.body;
    const newFoodItem = { id: foodItems.length + 1, name, description, establishment };
    foodItems.push(newFoodItem);
    res.status(201).json(newFoodItem);
};

exports.updateFoodItem = (req, res) => {
    const { id } = req.params;
    const { name, description, establishment } = req.body;
    const foodItem = foodItems.find(item => item.id === parseInt(id));

    if (!foodItem) {
        return res.status(404).json({ message: 'Food item not found' });
    }

    foodItem.name = name || foodItem.name;
    foodItem.description = description || foodItem.description;
    foodItem.establishment = establishment || foodItem.establishment;

    res.status(200).json(foodItem);
};

exports.deleteFoodItem = (req, res) => {
    const { id } = req.params;
    const foodItemIndex = foodItems.findIndex(item => item.id === parseInt(id));

    if (foodItemIndex === -1) {
        return res.status(404).json({ message: 'Food item not found' });
    }

    foodItems.splice(foodItemIndex, 1);
    res.status(204).send();
};