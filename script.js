const apiKey = "324fbd8cad8c6761a2dd247a7c1313ef";

const fetchWeather = (city) => {

     /**API url */
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  /**fetch function 
   * fetch data from API which returns json data
   */
  fetch(url)
    .then((res) => res.json())  // parsing data to json data
    .then((data) => display(data));

    /**
     * const response = await fetch(url);
     * const data = await response.json();
     * console.log(data);
     */
};
const display = (data) => {
     /**if api throws an error */
     if(data.cod==='404'){
          alert('Enter a proper city name');
          return;
     }
     const { name } = data;
     const {icon ,description} = data.weather[0];
     const { temp, humidity, pressure } = data.main;
     const { speed } = data.wind;
     console.log(name, icon, description, temp, humidity, speed);

     let bgImg = `https://source.unsplash.com/1900x1900/?${name}`;
     document.body.style.backgroundImage = `url(${bgImg})`;
     document.querySelector(".city").innerHTML = ` Weather in ${name}`;
     document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
     document.querySelector(".description").innerHTML = description;
     document.querySelector(".humidity").innerHTML = `humidity : ${humidity} %`
     document.querySelector(".wind").innerHTML = `wind speed : ${speed} km/h`
     document.querySelector(".temp").innerHTML = `${temp} &#176;C`;
     document.querySelector(".pressure").innerHTML =`Pressure : ${pressure} atm`
};



const search=()=>{
     fetchWeather(document.querySelector('.search-bar').value);
} 
//click event handling
let btn = document.querySelector(".search button");
btn.addEventListener('click',function(){
     search();
});

//enter key event 
document.querySelector('.search-bar').addEventListener('keyup',function(event){
     if(event.key==="Enter"){search()}
});

/**by default value is lauterbrunnen */
fetchWeather("lauterbrunnen");