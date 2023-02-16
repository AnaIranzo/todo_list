import React, { Component } from "react";
import WeatherList from "./WeatherList/WeatherList";
import { v4 as uuidv4 } from 'uuid';
import './Weather.css'


//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={process.env.REACT_APP_API_KEY_W}&units=metric
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={process.env.REACT_APP_API_KEY_W}
class Weather extends Component {

  constructor(props){
    super(props)
    this.state = {
      cityName : '',
      weather: [],
      lat:0,
      lon: 0,
    }
    this.cityName = React.createRef(); 
  }

  async componentDidMount(){
    await this.handleLocation();
    await this.handleLoadWeather();
    
   
  }

  componentDidUpdate(prevProps, prevState){
  
    
      if(this.state.cityName !== prevState.cityName && this.state.cityName.length >0){
      this.setState({cityName:this.state.cityName});
      this.handleLoadWeather();
    }
    
    console.log('componentDidUpdate');
}

  handleLoadWeather = async () => {
    if (this.state.cityName !== '') {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&appid=${process.env.REACT_APP_API_KEY_W}&units=metric`);
        const data = await response.json();
        if (data.cod === '200') {
          this.setState({
            weather: data.list
          })
        }else {
          alert('Error en la búsqueda')
        this.setState({
          weather: []
        })
        }
      } catch (error) {
        
      }
    }else{
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&appid=${process.env.REACT_APP_API_KEY_W}&units=metric`);
        
        const data = await response.json();
        if (data.cod === '200') {
          this.setState({
            weather: data.list
          })
        }else {
          alert('Error en la búsqueda')
        this.setState({
          weather: []
        })
        }
        
      } catch (error) {
        alert('Error en la búsqueda')
      }
    }
    

  }

  handleClick = async () => {
    // alert(this.cityName.current.value);
    this.setState({cityName: this.cityName.current.value});
    console.log(this.cityName);
  }

  handleLocation = async () => {
  navigator.geolocation.getCurrentPosition(success,error);
    let latCoord = 0
    let lonCoord = 0
  function success(position) {
    console.log(position);
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);
    latCoord = position.coords.latitude
    lonCoord = position.coords.longitude
    
  }

  this.setState({lat: latCoord});
  this.setState({lon: lonCoord});

  
  function error() {
    console.log('Geolocation error!');
  }
}




  render() {
    return <>
    <h2>Weather</h2>
    <input type="text" name="" id="" ref={this.cityName} />
    <button onClick={this.handleClick}>Enviar</button>
    
    <h2>{this.state.cityName}</h2>
    <WeatherList data={this.state.weather} key={uuidv4()}/>
    
    
    </>
  }
}

export default Weather;
