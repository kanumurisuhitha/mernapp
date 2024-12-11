const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Joi = require('joi');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Replace with your MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/weatherforecast';

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit process if database connection fails
  });

app.use(cors());
app.use(express.json());

// Mongoose model for weather data
const WeatherData = mongoose.model('WeatherData', {
  city: String,
  country: String,
  temperature: Number,
  description: String,
  icon: String,
});

// Joi schema for validating input
const weatherSchema = Joi.object({
  city: Joi.string().required(),
  country: Joi.string().required(),
  temperature: Joi.number().required(),
  description: Joi.string().required(),
  icon: Joi.string().required(),
});

// Route to handle storing weather data
app.post('/api/weather', async (req, res) => {
  try {
    const { error } = weatherSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const weatherData = new WeatherData(req.body);
    await weatherData.save();
    res.json({ message: 'Weather data saved successfully' });
  } catch (err) {
    console.error('Error saving weather data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
