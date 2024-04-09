Yad2 - Node.js Server-Side Project
Yad2 is a server-side project developed using Node.js. It serves as a system for product mediation with multiple categories, allowing CRUD operations on products and categories. The project includes controllers for managing categories, products, and users, integration with MongoDB for data storage, user authentication using JWT tokens, middleware for user authentication, and CORS support.

Installation
To run this project locally, follow these steps:

Clone the repository:
git clone https://github.com/MichalTzadok/NodeJS-codeExercises

Navigate to the project directory:
cd NodeJS-codeExercises

Install dependencies:
npm install

Configure MongoDB:

Ensure MongoDB is installed and running on your machine.
Update the MongoDB connection URI in the .env file if necessary.
Start the server:

npm start

Features
Category Controller: Supports CRUD operations for categories, including fetching a single category and fetching a sorted list of all categories alphabetically.

Product Controller: Allows CRUD operations for products, including fetching all products belonging to a specific category, fetching a specific product from a certain category, updating, and deleting products. Products are returned in sorted arrays.

User Module: Includes controllers for user management, supporting login and signup functionalities. User passwords are securely hashed. A unique JWT token is generated upon successful login.

Middleware: Utilizes middleware functions for user authentication. All requests, except login, require a valid JWT token attached, verifying the user's identity.

Integration with MongoDB: Data is stored and managed using MongoDB, providing a robust and scalable database solution.

CORS Support: Enables CORS to allow access from different sources.

Configuration
Database Configuration:

Ensure MongoDB is installed and running.
Update the MongoDB connection URI in the .env file.
Environment Variables:

Make sure to include all sensitive information, such as database URI, authentication details, and port in the .env file.
Running the Server:

Execute npm start to start the server.
Usage
Ensure you have a valid JWT token to access restricted endpoints. Regular users have limited access compared to administrators.

Categories
GET /api/categories: Fetch all categories sorted alphabetically.
GET /api/categories/:id: Fetch a specific category by ID.
POST /api/categories: Create a new category (admin only).
PUT /api/categories/:id: Update an existing category (admin only).
DELETE /api/categories/:id: Delete a category (admin only).
Products
GET /api/products: Fetch all products.
GET /api/products/category/:categoryId: Fetch all products belonging to a specific category.
GET /api/products/category/:categoryId/:productId: Fetch a specific product from a specific category.
POST /api/products: Create a new product (admin only).
PUT /api/products/:id: Update an existing product (admin only).
DELETE /api/products/:id: Delete a product (admin only).
Users
POST /api/users/login: Login with username and password, returns a JWT token.
POST /api/users/signup: Register a new user.
Integration with MongoDB
Database credentials and all necessary settings are defined in the .env file, ensuring privacy and security.

DB_URI=mongodb://localhost/MichalShop

Credits
This project was developed following the specifications provided. The guides and documentation for Node.js, Express.js, and MongoDB were heavily referenced during development.
