<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <style>
        body { text-align: center; font-family: Arial, sans-serif; }
        .container { margin-top: 50px; }
        input { padding: 10px; margin: 10px; }
        button { padding: 10px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Weather App</h2>
        <input type="text" id="city" placeholder="Enter city name">
        <button onclick="getWeather()">Get Weather</button>
        <h3 id="result"></h3>
    </div>

    <script>
        async function getWeather() {
            let city = document.getElementById("city").value;
            let apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            let response = await fetch(url);
            let data = await response.json();
            
            if (data.cod === 200) {
                document.getElementById("result").innerText = `Temp: ${data.main.temp}°C, ${data.weather[0].description}`;
            } else {
                document.getElementById("result").innerText = "City not found!";
            }
        }
    </script>
</body>
</html>
