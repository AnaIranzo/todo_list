import React, { Component } from "react";
import WeatherList from "./WeatherList/WeatherList";
import { v4 as uuidv4 } from 'uuid';




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
  }

  componentDidUpdate(prevProps, prevState){
  
      if (this.state.lat !== prevState.lat) {
        this.setState({...this.state,lat: this.state.lat,lon: this.state.lon});
        this.handleLoadWeather();
      }
      if(this.state.cityName !== prevState.cityName && this.state.cityName.length >0){
        this.setState({...this.state,cityName:this.state.cityName});
        this.handleLoadWeather();
    }
    
}

  handleLoadWeather = async () => {
    if (this.state.cityName !== '') {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&appid=${process.env.REACT_APP_API_KEY_W}&units=metric`);
        const data = await response.json();
        if (data.cod === '200') {
          this.setState({...this.state,
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
          this.setState({...this.state,
            weather: data.list
          })
        }else {
          alert('Error en la búsqueda')
        this.setState({...this.state,
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
    this.setState({...this.state,cityName: this.cityName.current.value});
    
    console.log(this.cityName);
  }


  handleLocation = async () => {
  if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition((position)=>{
      this.setState({...this.state,lat: position.coords.latitude,lon: position.coords.longitude});
    
      });   
    }
  }







  render() {
    return <>
    <h2>Weather</h2>
    

    <input type="text" name="" id="" ref={this.cityName} />
    <button onClick={this.handleClick} className='button'>Enviar</button>
    
    <h2>{this.state.cityName}</h2>
    <WeatherList data={this.state.weather} key={uuidv4()}/>
    
    
    </>
  }
}

export default Weather;
