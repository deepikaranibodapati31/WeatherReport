const apiUrl="https://api.openweathermap.org/data/2.5/weather"
const apiKey="2e883243fe479ce91b8a9541444ba232"

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('Location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const LIcon=document.getElementById('LocIcon');



searchButton.addEventListener('click',()=>{
    const location=locationInput.value
    if(location){
        fetchWeather(location)
    }
});

function fetchWeather(location){
    const url=`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`

    fetch(url)
    .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
    .then(data=>{
        console.log(data)
        const IconElement=document.createElement('i')
        IconElement.classList.add('fas', 'fa-map-marker-alt', 'class');
        IconElement.style.marginRight = '8px';
        locationElement.textContent=data.name;
        locationElement.prepend(IconElement)
        temperatureElement.textContent=`${Math.round(data.main.temp)}°C`
        descriptionElement.textContent=data.weather[0].description;
    })
    .catch(error=>{
    console.log(error)
    });
}