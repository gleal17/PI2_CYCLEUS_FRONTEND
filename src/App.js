import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Station from './pages/station';
import Login from './pages/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element= {<Register/>}/>
        <Route path="/station" element= {<Station/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
