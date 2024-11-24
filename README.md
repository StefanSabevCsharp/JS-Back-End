# Recipes Backend API

This repository contains a backend application for managing recipes. The project was developed as part of the **SoftUni Backend Course Exam Preparation**. It provides functionality for creating, managing, and retrieving recipes, with a focus on security and performance.

## Features

- User authentication (register, login, and logout) using JWT.
- Recipe management (create, read, update, delete).
- Secure password handling with `bcrypt`.
- Validation of inputs using the `validator` library.
- Integration with MongoDB for data persistence.
- Cookie-based session handling with `cookie-parser`.

## Live Demo

You can access the live application at: [recipes.stefansabev.com](https://recipes.stefansabev.com)

## Tech Stack

- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **MongoDB**: Database for storing recipes and user data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **Handlebars**: Template engine for rendering dynamic pages.

## API Endpoints

### Authentication Routes

| Method | Endpoint         | Description                          | Authentication |
|--------|------------------|--------------------------------------|----------------|
| POST   | `/auth/register` | Register a new user                  | No             |
| POST   | `/auth/login`    | Authenticate a user and return a JWT | No             |
| POST   | `/auth/logout`   | Log out a user and clear the session | Yes            |

### Recipe Routes

| Method | Endpoint          | Description                               | Authentication |
|--------|-------------------|-------------------------------------------|----------------|
| GET    | `/recipes`        | Retrieve all recipes                     | No             |
| GET    | `/recipes/:id`    | Retrieve a specific recipe by ID         | No             |
| POST   | `/recipes`        | Create a new recipe                      | Yes            |
| PUT    | `/recipes/:id`    | Update a recipe (owner only)             | Yes            |
| DELETE | `/recipes/:id`    | Delete a recipe (owner only)             | Yes            |


### Security Features

The application includes the following security measures to ensure the protection of user data and prevent unauthorized access:

1. **Password Hashing:**  
   Passwords are securely hashed using `bcrypt` before being stored in the database, ensuring that plain text passwords are never exposed.

2. **JWT Authentication:**  
   Users are authenticated using JSON Web Tokens (JWT). Each token is signed and verified using a secret key, providing secure, stateless authentication.

3. **Input Validation:**  
   All user inputs are validated using the `validator` library to prevent common vulnerabilities such as SQL injection and cross-site scripting (XSS).

4. **Cookie Management:**  
   Cookies are used for managing sessions securely, and `cookie-parser` is employed to handle cookies effectively.

5. **Role-Based Access Control:**  
   Certain actions, such as updating or deleting a recipe, are restricted to the recipe owner to ensure users can only manage their own content.

6. **Error Handling:**  
   Consistent error handling ensures that sensitive application details are not leaked through error messages.




