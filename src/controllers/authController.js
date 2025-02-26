const users = []; // This will act as a simple in-memory user store

// Function to register a new user
const registerUser = (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = { username, password }; // In a real app, passwords should be hashed
    users.push(newUser);
    return res.status(201).json({ message: 'User registered successfully' });
};

// Function to login a user
const loginUser = (req, res) => {
    const { username, password } = req.body;

    // Validate user credentials
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Successful login
    return res.status(200).json({ message: 'Login successful', user: { username } });
};

// Export the controller functions
module.exports = {
    registerUser,
    loginUser
};