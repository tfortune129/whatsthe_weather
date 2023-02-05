// console.log('Weather app start')

// const WEATHER_KEY = '80e13b63ec5ae7ad4b77734e6f61dd2d';

// const request = async url => {


//     const res = await fetch(url);
//     return res.ok ? res.json() : Promise.reject({error: 500})
//     // data = await res.json();

//     // console.log(data)
// };

// const getWeather = async

const myForm = document.getElementById('myForm');
const submit = document.getElementById('submitButton')
const city = document.getElementById('cityName')

myForm.addEventListener('submit', function (event){
  event.preventDefault();
  getWeather('New York');
});


// const myForm = document.getElementById('myForm');
// myForm.addEventListener('submit', getFormData)
function getWeather(cityName) {
    var key = '80e13b63ec5ae7ad4b77734e6f61dd2d';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) 
    //return response as json
    .then(function(data) {
       postWeather (data);
    //    const temperature = data.main.temp;
    //    const fahrenheit = (temperature - 273.15) * 9/5 + 32;
    //    console.log(fahrenheit);

    })
    .catch(function() {
      // catch() function to run if there are any errors in function 
    });
  }
getWeather()


function postWeather (data) {
    const temperature = data.main.temp;
    const fahrenheit = Math.round(parseFloat((temperature - 273.15) * 9/5 + 32));
    const icon = data.weather[0].icon;
    const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    
    document.getElementById('icon').innerHTML = "<img src='" + iconUrl + "' alt='Weather Icon'>";
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('location').innerHTML = data.name;
} 


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