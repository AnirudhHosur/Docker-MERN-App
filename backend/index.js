const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:root@cluster0.nr53l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

// Define a single API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Backend only!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
