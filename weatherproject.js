const apiKey='8d6ace90572cf2233c40f7da035ac705'
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const search= document.querySelector('.search_bar input')
const searchBtn= document.querySelector('.search_bar span')
const weatherImg=document.querySelector('.cloud_img')

async function checkWeather(city){
    const responce= await fetch(apiUrl +city+ `&appid=${apiKey}`)
    const data= await responce.json();
    console.log(data)

    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.temperature').innerHTML=Math.round(data.main.temp) +"°c"
    document.querySelector('.humidity').innerHTML=data.main.humidity +"%"
    document.querySelector('.wind_Speed').innerHTML=data.wind.speed+" KM/H"
    document.querySelector('.details').innerHTML=data.weather[0].description;

    if(data.weather[0].main=="Clouds"){
        weatherImg.src= "images for weather/cloudss.png"
    }else if(data.weather[0].main=="Clear"){
        weatherImg.src= "images for weather/sun.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherImg.src= "images for weather/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherImg.src= "images for weather/cloudy.png"
    }else if(data.weather[0].main=="Mist"){
        weatherImg.src= "images for weather/fog.png"
    }else if(data.weather[0].main=="Snow"){
        weatherImg.src= "images for weather/snow.png"
    }

}

searchBtn.addEventListener('click',()=>{
    checkWeather(search.value)
})

checkWeather();

