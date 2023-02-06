// console.log('Weather app start')

// const WEATHER_KEY = '80e13b63ec5ae7ad4b77734e6f61dd2d';

// const request = async url => {

//     // console.log(data)
// };

// const getWeather = async

const myForm = document.getElementById('myForm');
const submitButton = document.getElementById('submitButton')
const cityInput = document.getElementById('cityName')

myForm.addEventListener('submit', function(event){
  event.preventDefault();
  getWeather(cityName.value);
});


// const myForm = document.getElementById('myForm');
// myForm.addEventListener('submit', getFormData)
function getWeather(cityName) {
    const key = '80e13b63ec5ae7ad4b77734e6f61dd2d';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + cityName + `&appid=` + key)  
    .then(function(resp) { 
      return resp.json() }) 
    //return response as json
    .then(function(data) {
      postWeather (data);
    //    const temperature = data.main.temp;
    //    const fahrenheit = (temperature - 273.15) * 9/5 + 32;
    //    console.log(fahrenheit);

    console.log(data)
    })
    .catch(function() {
      console.error('Please search City again.')
      // catch() function to run if there are any errors in function 
    });
  }
// getWeather()


function postWeather(data) {
    const temperature = data.main.temp;    
    const fahrenheit = Math.round(parseFloat((temperature - 273.15) * 9/5 + 32));
    const humidity = data.main.humidity;
    const mintemp = data.main.temp_min;
    const maxtemp = data.main.temp_max;
    const maxTemp = Math.round(parseFloat((maxtemp - 273.15) * 9/5 + 32));
    const minTemp = Math.round(parseFloat((mintemp - 273.15) * 9/5 + 32));
    
    const description = data.weather[0].description;
    const upperdescription = description.charAt(0).toUpperCase() + description.slice(1);


    const icon = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/` + icon + `@2x.png`;
    
    document.getElementById('icon').innerHTML = "<img src='" + iconUrl + "' alt='Weather Icon'>";
    document.getElementById('temp').innerHTML = 'Temperature now: ' + fahrenheit + '&deg;';
    document.getElementById('description').innerHTML = upperdescription;
    // document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('location').innerHTML = data.name;
    document.getElementById('maxTemp').innerHTML = 'High: ' + maxTemp + '&deg;';
    document.getElementById('minTemp').innerHTML = 'Low: ' + minTemp + '&deg;';
    document.getElementById('humidity').innerHTML = 'Humidity: ' + humidity + '%';

 //remove header image when a search is made:
  // function replaceHeader(description){
  //   const headerContainer = document.getElementById('headerContainer');


  //conditionals for weather condition: make case sensitive and index of non specific interms of position:
    if (description.toLowerCase().indexOf('rain') >= 0) {
      document.body.classList.add('rainy');
      document.getElementById('imgContainer').innerHTML = '<img src="/images/rain.jpeg" alt="Rainy Weather">';
  } else if (description.toLowerCase().indexOf('cloud') >= 0) {
      document.body.classList.add('cloudy');
      document.getElementById('imgContainer').innerHTML = '<img src="/images/cloud.jpeg" alt="Cloudy Weather">';
  } else if (description.toLowerCase().indexOf('clear') >= 0) {
    document.body.classList.add('clear');
    document.getElementById('imgContainer').innerHTML = '<img src="/images/clear.avif" alt="Clear Weather">';
  } else if (description.toLowerCase().indexOf('sunny') >= 0) {
      document.body.classList.add('sunny');
      document.getElementById('imgContainer').innerHTML = '<img src="/images/sunny.jpeg" alt="Sunny Weather">';
  } else if (description.toLowerCase().indexOf('snow') >= 0) {
      document.body.classList.add('snow');
      document.getElementById('imgContainer').innerHTML = '<img src="/images/snow.avif" alt="Snowy Weather">';
  } else {
      document.body.classList.remove('rainy');
      document.body.classList.remove('cloudy');
      document.body.classList.remove('sunny');
      document.body.classList.remove('clear');
      document.body.classList.remove('snow');
      document.getElementById('headerContainer').innerHTML = '<img src="/images/header.gif" alt="GIF">';
  }
}





////////////////////////////referece///////////////////////////////



// const getFormData = async (e) => {
//     e.preventDefault();
//     const pokemon = e.target.pokemon.value;
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

//     //use fetch or axios to make http request!
//     //fetch is built in function
//     const res = await fetch(url);
//     // console.log('res', res)
//     const data = await res.json();
//     // console.log('data', data)

//     const name = data.name;
//     // const id = data.id;
//     const imgUrl = data.sprites.front_default;
//     const abilities = data.abilities.ability;

//     console.log(abilities)

//         // abilities.forEach(ability =>{
//         //     const nameAbility = ability.name
//         //     console.log(nameAbility)
//         // });
        

//     const myData =  {
//         name: name,
//         // id: id,
//         abilities: abilities,
//         // nameAbility: nameAbility,
//         imgUrl: imgUrl
//     }
//     addToPage(myData)
    
// };

// const addToPage = (p) => {
//     // console.log(p, 'print p')
//     const card = document.createElement('div');
//     card.innerHTML = `
//     <div class="card" style="width: 18rem;">
//     <img src="${p.imgUrl}" class="card-img-top" alt="${p.name}">
//     <div class="card-body">
//       <h5 class="card-title">${p.name}</h5>
//       <p>${p.abilities}</p>
//       </div>
//   </div>
//     `;
//     const container = document.querySelector('.container');
//     if (container.innerHTML !==''){
//         container.innerHTML = '' 
    
//     }   
//     container.append(card)

// };



// const myForm = document.getElementById('myForm');
// myForm.addEventListener('submit', getFormData)