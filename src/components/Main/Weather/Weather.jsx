import React, { Component } from "react";
import WeatherList from "./WeatherList/WeatherList";
import { v4 as uuidv4 } from 'uuid';
import './Weather.css'


//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={process.env.REACT_APP_API_KEY_W}&units=metric

class Weather extends Component {

  constructor(props){
    super(props)
    this.state = {
      cityName : 'Madrid',
      weather: []
    }
    this.cityName = React.createRef(); 
  }

  async componentDidMount(){
    
    await this.handleLoadWeather();
  }

  componentDidUpdate(prevProps, prevState){
    console.log("****DATOS DEL PASADO****");
    console.log('prevProps: ', prevProps, 'prevState: ', prevState)
    
    console.log("****DATOS DEL PRESENTE****");
    console.log("++PROPS++");
    console.log(this.props);
    
    console.log("++STATE++");
    console.log(this.state);
    // length será 0, 5 o 20
      if(this.state.cityName !== prevState.cityName){
      this.setState({cityName:this.state.cityName});
      this.handleLoadWeather();
    }

    console.log('componentDidUpdate');
}

  handleLoadWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&appid=${process.env.REACT_APP_API_KEY_W}&units=metric`);
    const data = await response.json();
    this.setState({
      weather: data.list
    })
  }

  handleClick = async () => {
    // alert(this.cityName.current.value);
    this.setState({cityName: this.cityName.current.value});
    console.log(this.cityName);
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
