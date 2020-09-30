const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Router
const authRoute = require('./routes/auth');

dotenv.config({path: 'env'});

// Connect to DB
mongoose.connect(String(process.env.DB_CONNECT), { useNewUrlParser: true } , () => 
    console.log('Connected to db')
);

// Middleware
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoute)

app.listen(3000, () => console.log('Server up and running'));