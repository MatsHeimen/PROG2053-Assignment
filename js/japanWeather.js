url = "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true"

let japanDate = document.getElementById("japanDate")
let japanTime = document.getElementById("japanTime")
let japanTemperature = document.getElementById("japanTemperature")
let japanWindspeed = document.getElementById("japanWindspeed")


function loadJapanWeather(url){
    console.log("reloading")
    fetch(url)
    .then((response) => response.json())
    .then((json) => { 
        data = json.current_weather
        units = json.current_weather_units

        let date = new Date(data.time)
        japanDate.innerHTML = 'Dato: ' + (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()

        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        japanTime.innerHTML = 'Tid: ' + `${hours}:${minutes}`

        japanTemperature.innerHTML = 'Temperature: ' + data.temperature + units.temperature
        japanWindspeed.innerHTML = 'Windspeed: ' + data.windspeed + units.windspeed 
        
    }
)
}

loadJapanWeather(url)

//Calls loadJapanWeather every 5 minutes
setInterval(() => loadJapanWeather(url), 300000);
