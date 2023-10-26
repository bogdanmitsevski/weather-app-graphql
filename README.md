## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all npm packages

Create .env file and add parameters that are described in .env.example

### `docker-compose up`

Runs the app

Open link http://localhost:3001/graphql

MUTATION EXAMPLE

mutation {

  addWeather(input: { lat: 8, lon: -74.0060, part: "hourly,daily" }) {
    lat
    
    lon
    
    exclude
    
    sunset
    
    sunrise
    
    pressure
    
    temp
    
    feels_like
    
    pressure
    
    humidity
    
    uvi
    
    wind_speed
    
  }
  
}

QUERY EXAMPLE
query {
  weather(input: { lat: 2, lon: -74.0060, part: "hourly,daily" }) {
    sunset
    sunrise
    pressure
    temp
    feels_like
    pressure
    humidity
    uvi
    wind_speed
  }
}
