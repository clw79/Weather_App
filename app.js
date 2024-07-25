//API CONNECTION
const apiKey = "c7ff465c45bf9b9d3d7c7bb85b19043a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=lehi";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

//GETTING INFORMATION FROM API
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);

    let data = await response.json();

    //DISPLAYING API INFORMATION ON APP
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "mph";

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value)
    });

    console.log(data);
}

checkWeather();
