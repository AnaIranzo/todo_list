import React, { Component } from "react";
import './WeatherCard.css'
import imgClear from '../../../../../assets/cat-4720659_640.jpg'
import imgClouds from '../../../../../assets/sky-7136828_640.jpg'
import imgRain from '../../../../../assets/corgi-4415649_960_720.jpg'
import imgSnow from '../../../../../assets/australian-shepherd-5902417_640.jpg'

class WeatherCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      weatherCard: this.props.data
    }
    console.log(this.state.weatherCard);
    
  }

  handleImages = () => {
    let img
    switch (this.state.weatherCard.weather[0].main ) {
      case 'Rain':
        img =imgRain
        break;
        case 'Clouds':
        img =imgClouds
        break;
        case 'Clear':
          img =imgClear
        break;

        case 'Snow':
          img =imgSnow
        break;
    
      default:
        break;
        
    }
    return img
  }



  render() {
    return <>
    
    <h2>{this.state.weatherCard.dt_txt}</h2>
    <img src={this.handleImages()} alt="" />
    <p>{this.state.weatherCard.main.temp} ºC</p>
    <p>{this.state.weatherCard.weather[0].description}</p>
    </>


  }
}

export default WeatherCard;
