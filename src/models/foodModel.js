class Food {
    constructor(name, description, establishment) {
        this.name = name;
        this.description = description;
        this.establishment = establishment;
    }
}

const foodItems = [];

const addFoodItem = (food) => {
    foodItems.push(food);
};

const getFoodItems = () => {
    return foodItems;
};

const updateFoodItem = (index, updatedFood) => {
    if (index >= 0 && index < foodItems.length) {
        foodItems[index] = updatedFood;
    }
};

const deleteFoodItem = (index) => {
    if (index >= 0 && index < foodItems.length) {
        foodItems.splice(index, 1);
    }
};

module.exports = {
    Food,
    addFoodItem,
    getFoodItems,
    updateFoodItem,
    deleteFoodItem
};