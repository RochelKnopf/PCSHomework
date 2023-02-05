import {Component} from 'react';
import './App.css';

export default class App extends Component() {

  state = {
    zip: 60625
  };

  getWeather(zip) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}&units=imperial&lang=he`)
      .then(response => {
        theResponse = response;
        return response.json();
      })
      .then(weatherData => {
        console.log(weatherData);

        if (!theResponse.ok) {
          throw new Error(`${theResponse.status} ${theResponse.statusText} ${weatherData.message}`);
        }

        noWeather.hide();
        hasWeather.show();

        locationElem.text(weatherData.name);
        iconElem.attr('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
        tempElem.text(weatherData.main.temp);
        descriptionElem.text(weatherData.weather[0].description);
      })
      .catch(e => {
        noWeather.show();
        hasWeather.hide();
        errorElem.text(e.message);
      });
  }


  return (
    <>
    </>
  );

}

