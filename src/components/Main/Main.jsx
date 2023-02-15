import React, { Component } from "react";
import List from './List/List'
import Weather from "./Weather/Weather";
import Home from "./Home/Home";
import NotFound from "../NotFound/NotFound";
import {Routes,Route} from 'react-router-dom';

class Main extends Component {
  render() {
    return <main>
      <Routes>
        <Route path="/todo" element={<List/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </main>;
  }
}

export default Main;