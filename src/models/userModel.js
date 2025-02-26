const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Method to find a user by username
userSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
};

// Method to create a new user
userSchema.statics.createUser = function(username, password) {
    const user = new this({ username, password });
    return user.save();
};

// Method to validate user credentials
userSchema.statics.validateUser = function(username, password) {
    return this.findOne({ username, password });
};

const User = mongoose.model('User', userSchema);

module.exports = User;