
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Main/>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
