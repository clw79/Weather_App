//API CONNECTION
const apiKey = "c7ff465c45bf9b9d3d7c7bb85b19043a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=lehi";

//GETTING INFORMATION FROM API
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);

    let data = await response.json();

    console.log(data);
}

checkWeather();
