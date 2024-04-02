Project: Secondhand Product Mediator

This Node.js project, named ProductMediator, streamlines product mediation in seconds. It features controllers for various categories supported by the system, such as electronics, books, cars, and more. Each controller enables CRUD (Create, Read, Update, Delete) operations, including fetching a single category, fetching a list of categories, and more.

Features:
1.Category Controller:

-CRUD operations for categories.
-Fetching a single category and a list of categories.
-Sorting categories alphabetically.
2.Product Controller:

-CRUD operations for products belonging to a specific category.
-Fetching all products belonging to a specific category.
-Fetching a specific product from a specific category.
-Sorting products alphabetically.
3.Middleware Functions:

-Middleware function logging the time and URL of each request.
-Middleware function checking the request method and body existence.
4.Objects:

-Class for Category and Product.
-save function within each class for saving data.
5.User Module:

-User JSON file containing a list of users known to the system.
-Controller for users, including login and signup functionalities.
-Unique JWT token generation upon successful login.
6.Security Middleware:

Middleware for verifying user authentication through JWT tokens.
Advanced Features (Optional):
-Differentiating between regular users and administrators.
-Integrating with a database system like MongoDB to replace JSON file storage.
-Organizing project structure for clarity.
-Ensuring code quality using ESLint.
-Storing environment variables in a .env file for security.
Installation and Setup:
1.Clone the repository.
2.Install dependencies using npm install.
3.Ensure ESLint is installed globally or locally.
4.Create a .env file with necessary environment variables.
5.Start the server using npm start.
For detailed documentation and usage instructions, refer to the project's README file.

Contributors:
Michal Tzadok
