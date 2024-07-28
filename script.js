const apiKey = "1231130709c9a26dd5831cc9d1001f98"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
let valueInput = document.querySelector(".place");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let pic = document.querySelector(".weatherpic");
let btn = document.querySelector(".search");

async function checkWeather(c){

const response= await fetch(apiUrl + `&q=${c}&appid=${apiKey}`);
if(response.status ===404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}else{ 
document.querySelector(".error").style.display = "none";
let data = await response.json();
console.log(data)

city.innerHTML = data.name;
temp.innerHTML = `${Math.round(data.main.temp)}°C`;
document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
document.querySelector(".windy").innerHTML = `${data.wind.speed} Km/h`;
if(data.weather[0].main == ("Clear")){
    pic.src = "images/clear.png";
}
if(data.weather[0].main == ("Clouds")){
    pic.src = "images/clouds.png";
}
if(data.weather[0].main == ("Drizzle")){
    pic.src = "images/drizzle.png";
}
if(data.weather[0].main == ("Mist")){
    pic.src = "images/mist.png";
}
if(data.weather[0].main == ("Rain")){
    pic.src = "images/rain.png";
}
if(data.weather[0].main == ("Snow")){
    pic.src = "images/snow.png";
}
document.querySelector(".weather").style.display = "block";
}
}
//checkWeather();
btn.addEventListener("click",() =>{
    checkWeather(valueInput.value);
});