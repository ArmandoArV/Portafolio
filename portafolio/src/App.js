import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from "./components/navbar-component/NavBar";
import CardsContainer from "./components/Cards-grid/CardsContainer";
import { BrowserRouter, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <NavBar />
        <CardsContainer />
    </div>
  );
}

export default App;
