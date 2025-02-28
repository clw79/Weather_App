//API CONNECTION
const apiKey = "c7ff465c45bf9b9d3d7c7bb85b19043a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
    console.log("button clicked");
});


//GETTING INFORMATION FROM API
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    //DISPLAYING API INFORMATION ON APP
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "mph";

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        default:
            weatherIcon.src = "images/clear.png";
            break;

    }

}
