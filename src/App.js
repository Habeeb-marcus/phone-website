import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Section1 from './components/Section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';
import Form from './components/Forms/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4 />
        <Section5 />
        <Form/>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
