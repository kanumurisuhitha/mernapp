# Weather App

A weather forecasting application built with **React.js** (frontend), **Express.js** (backend), and **MongoDB** (database). This app fetches current weather and forecast data from the OpenWeather API and stores it in a local MongoDB database.

## Features
- Fetch weather data by city name or user's location.
- Display current weather details including temperature, condition, and an icon.
- Store weather data in a MongoDB database for future reference.
- Responsive and easy-to-use interface.

## Prerequisites
Before setting up the application, ensure the following are installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- A valid OpenWeather API key ([Get one here](https://openweathermap.org/api)).

## Setup Instructions

### Clone the Repository
```bash
# Clone the repository
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### Backend Setup
1. Navigate to the `server` folder:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and add your OpenWeather API key:
   ```env
   OPENWEATHER_API_KEY=your_openweather_api_key_here
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run at `http://localhost:5000`.

### Frontend Setup
1. Navigate to the `client` folder:
   ```bash
   cd ../client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Project Structure
```
weather-app/
├── server/
│   ├── index.js        # Backend server code
│   ├── package.json    # Backend dependencies
│   └── .env            # Environment variables (API keys)
├── client/
│   ├── src/
│   │   ├── App.js      # Frontend main component
│   │   └── App.css     # Frontend styling
│   ├── package.json    # Frontend dependencies
└── README.md           # Project documentation
```

## API Endpoints
### Backend API
- **POST** `/api/weather`
  - Fetch and store weather data for a specified city.
  - **Request Body**:
    ```json
    {
      "city": "CityName"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Weather data saved successfully",
      "weatherData": {
        "city": "CityName",
        "country": "CountryCode",
        "temperature": 25,
        "description": "clear sky",
        "icon": "01d"
      }
    }
    ```

## Usage
1. Enter a city name in the input field on the frontend and click the search button.
2. View the current weather information and forecast for the city.
3. Weather data is automatically saved to the database for future reference.

## Troubleshooting
- **CORS Errors**: Ensure the backend server has the correct CORS configuration.
- **MongoDB Connection Errors**: Verify MongoDB is running locally or update the connection string for a remote database.
- **API Key Issues**: Check your OpenWeather API key and ensure it is valid.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
