import React, { Component } from "react";
import './Footer.css'
class Footer extends Component {

  constructor(props){
    super(props)
    this.state = {
      
      weather: [],
      lat:0,
      lon: 0,
      weatherIcon:''
    }
    this.cityName = React.createRef(); 
  }


  async componentDidMount(){
    await this.handleLocation();
    await this.handleLoadWeather();
    await this.handleIcon();
    
  }

  componentDidUpdate(prevProps, prevState){
  /* 
      if (this.state.lat !== prevState.lat) {
        this.setState({...this.state,lat: this.state.lat,lon: this.state.lon});
        //this.handleLoadWeather();
      } */
    
    
}

handleLoadWeather = async () => {

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&appid=${process.env.REACT_APP_API_KEY_W}&units=metric`);
      
      const data = await response.json();


      
      if (data.cod === '200') {
        this.setState({...this.state,
          weather: data.list
        });
        



      }else {
        alert('Error en la búsqueda')
      this.setState({...this.state,
        weather: []
      })
      }
      
    } catch (error) {
      //alert('Error en la búsqueda')
    }
  
}

handleIcon = async () => {
  if (this.state.weather.length>0) {
    const responseIcon = await fetch(`https://openweathermap.org/img/w/${this.state.weather[0].weather[0].icon}.png `)
    const icon = await responseIcon.url
    this.setState({...this.state, weatherIcon: icon})
  }
  
}



  handleLocation = async () => {
    if (navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({...this.state,lat: position.coords.latitude,lon: position.coords.longitude});
      
        });   
      }
    }







  render() {
    console.log(this.state.weather);
    return <footer>
      <h2>To do list footer</h2>

    <section> 
      <p>{this.state.weather.length >0?this.state.weather[0].main.temp: ''} ºC</p>
      <img src={this.state.weatherIcon} alt="" />
      <p>{this.state.weather.length >0?this.state.weather[0].weather[0].description:''}</p>
      
      
      </section>
    </footer>;
  }
}

export default Footer