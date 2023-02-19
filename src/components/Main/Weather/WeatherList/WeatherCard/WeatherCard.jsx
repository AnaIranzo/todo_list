import React, { Component } from "react";
import './WeatherCard.css'
import imgClear from '../../../../../assets/cat-4720659_640.jpg'
import imgClouds from '../../../../../assets/sky-7136828_640.jpg'
import imgRain from '../../../../../assets/corgi-4415649_960_720.jpg'
import imgSnow from '../../../../../assets/australian-shepherd-5902417_640.jpg'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

class WeatherCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      weatherCard: this.props.data
    }
    //console.log(this.state.weatherCard);
    
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

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={this.handleImages()}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {this.state.weatherCard.dt_txt}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {this.state.weatherCard.main.temp} ºC
        </Typography>
        <Typography>
        {this.state.weatherCard.weather[0].description}
        </Typography>
      </CardContent>
      
    </Card>
    
  {/*   <h2>{this.state.weatherCard.dt_txt}</h2>
    <img src={this.handleImages()} alt="" />
    <p>{this.state.weatherCard.main.temp} ºC</p>
    <p>{this.state.weatherCard.weather[0].description}</p> */}
    </>
  }
}

export default WeatherCard;
