# Registration-form

This project is a simple registration form built using HTML, CSS, Node.js, and MongoDB. It allows users to register by providing their name, email, and password. The form ensures that each email is unique and handles duplicate email entries gracefully.

## Features

- User registration with name, email, and password.
- Validation to ensure all fields are filled.
- Checks for duplicate email entries and redirects to a specific page if a duplicate is found.
- Stores user data in a MongoDB database.

## Technologies Used

- **Frontend**: HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/registration-form.git
    cd registration-form
    ```

2. **Install dependencies:**
    ```bash
    npm install express mongoose bcrypt
    ```

3. **Set up MongoDB:**
    - Ensure you have MongoDB installed and running.
    - Create a database named `registrationDB` and a collection named `registrations`.

4. **Configure environment variables:**
    - Create a `.env` file in the root directory.
    - Add your MongoDB connection string:
        ```
        MONGODB_URI=mongodb://localhost:27017/registrationDB
        ```

5. **Run the application:**
    ```bash
    npm start
    ```

6. **Access the application:**
    - Open your browser and go to `http://localhost:3000`.

## Usage

1. **Register a new user:**
    - Fill in the registration form with your name, email, and password.
    - Submit the form.

2. **Handling duplicate emails:**
    - If the email already exists in the database, you will be redirected to a `/duplicate` page.
    - If the registration is successful, you will be redirected to a `/success` page.
    - If there is any other error, you will be redirected to an `/error` page.

## Project Structure

```
registration-form/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── index.html
├── routes/
│   └── index.js
├── models/
│   └── Registration.js
├── .env
├── app.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.
