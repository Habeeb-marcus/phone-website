import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Section1 from './components/Section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4 />
      </div>
    </BrowserRouter>
  );
}

export default App;
