const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
const app = express();
dotenv.config();

// Connect to MongoDB
const userName = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb://localhost:27017/registrationDB`);

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Regestration = mongoose.model('Registration', registrationSchema);

// Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
})
app.post('/register', async(req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate inputs
        if (!name || !email || !password) {
            throw new Error('All fields are required');
        }

        // Check if the email already exists
        const existingRegistration = await Regestration.findOne({ email: email });
        if (existingRegistration) {
            return res.redirect('/duplicate');
        }

        const registrationData = new Regestration({
            name,
            email,
            password
        });
        await registrationData.save();
        res.redirect('/success');

        // Log the received data
        console.log('Received data:', { name, email, password });

    } catch (err) {
        console.error('Error:', err);

        return res.redirect('/error');
    }
});

app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/pages/success.html');
});

app.get('/error', (req, res) => {
    res.sendFile(__dirname + '/pages/error.html');
});