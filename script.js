async function getWeather(place){
    try{

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=68963632ada74110aeb83752242607&q=${place}&aqi=no`);
    const data = await response.json();
    console.log(data);
    if(!data.error){
        let currentTemp = data.current.temp_c;
        console.log(currentTemp);
        let currentCondition = data.current.condition.text;
        console.log(currentCondition);
        let conditionImage = data.current.condition.icon;
        console.log(conditionImage);
        let location = data.location.name;
        console.log(location);
        let localtime = data.location.localtime;
        console.log(localtime);
        updateDOM(currentTemp, currentCondition, conditionImage, location, localtime);
    }else{
        console.log(data.error.message);
    }
    }
    catch(e){
       // alert('Please put a valid location');
        console.log(e);
    }
    


}

//getWeather('kerela');
let input = document.querySelector('input');
let tempElement = document.querySelector('#temp');
let locationElement = document.querySelector('#location');
let currentConditionElement = document.querySelector('#condition');
let conditionImageElement= document.querySelector('img');
let dateElement = document.querySelector('#dateTime');

let form = document.querySelector('form');
form.addEventListener('submit', function(e){
    console.log('Form submitted');
    const value = input.value;
    getWeather(value);
    e.preventDefault();
});

function updateDOM(currentTemp, currentCondition, conditionImage, location, localtime){
    tempElement.innerText = currentTemp;
    locationElement.innerText= location;
    currentConditionElement.innerText = currentCondition;
    dateElement.innerText = localtime;
    conditionImageElement.src = "https://" +conditionImage;

    
}

