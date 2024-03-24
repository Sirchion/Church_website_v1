import React from 'react';
import './App.scss';
import MainNavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutUs from './Components/AboutUs/AboutUs'; 
import TestNavBar from './Components/Test/Test'; 
import Home from './Components/Home/Home'; 

const App = () => {
  return (
    <Router>
      <div>
        <MainNavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} /> 
          <Route path="/test" element={<TestNavBar/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
