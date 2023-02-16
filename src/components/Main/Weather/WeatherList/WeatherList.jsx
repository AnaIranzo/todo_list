import React, { Component } from "react";
import WeatherCard from "./WeatherCard/WeatherCard";
import './WeatherList'

class WeatherList extends Component {
  constructor(props){
    super(props);
    this.state = {
      weatherList: this.props.data
    }
    console.log(this.weatherList);
    
  }
  
  render() {

    return <>
    
    

    <section>{this.state.weatherList.map((weather) => <WeatherCard data={weather}/> )}</section> 
    
    
    </>
    
  }
}

export default WeatherList;
