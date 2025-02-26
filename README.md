# Food Donation App

## Overview
The Food Donation App is a web application designed to connect supermarkets, restaurants, and individuals with excess food to NGOs and communities in need. The platform aims to reduce food waste and combat hunger by facilitating food donations.

## Features
- User authentication with login and registration functionality.
- A dashboard for managing food donations.
- Filtering options for establishments (restaurants and supermarkets).
- A visually appealing interface with responsive design.
- RESTful API for managing users and food donations.

## Project Structure
```
food-donation-app
├── public
│   ├── index.html          # Main entry point of the application
│   ├── login.html          # User login page
│   ├── register.html       # User registration page
│   ├── css
│   │   ├── styles.css      # Styles for the application
│   ├── js
│   │   ├── main.js         # Main JavaScript logic
│   │   ├── api.js          # API interaction functions
│   │   ├── auth.js         # Authentication functions
├── src
│   ├── server.js           # Node.js server setup
│   ├── routes
│   │   ├── authRoutes.js   # Routes for authentication
│   │   ├── foodRoutes.js    # Routes for food donations
│   ├── controllers
│   │   ├── authController.js # Logic for authentication
│   │   ├── foodController.js # Logic for food donations
│   ├── models
│   │   ├── userModel.js     # User model definition
│   │   ├── foodModel.js     # Food model definition
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── .gitignore               # Files to ignore in Git
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd food-donation-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage
- **Login**: Use the login page to authenticate existing users.
- **Register**: New users can create an account via the registration page.
- **Dashboard**: After logging in, users can view and manage food donations, filter by establishment type, and add new food items to donate.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.