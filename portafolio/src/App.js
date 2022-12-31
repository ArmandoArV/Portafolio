import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from "./components/navbar-component/NavBar";
import CardsContainer from "./components/Cards-grid/CardsContainer";
import ExperienceCardContainer from "./components/Experience-card/ExperienceCardContainer";
import CelestialContainer from './components/CelestialObjectContainer/CelestialContainer';
import { BrowserRouter, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <>
      <NavBar />
        <CardsContainer />
        <CelestialContainer />
        <ExperienceCardContainer />
      </>
    </div>
  );
}

export default App;
/*

        */