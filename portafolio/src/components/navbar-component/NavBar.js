import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styles from "./Navbar.css";

export default function NavBar() {
    return(
        <div className="Navbar-container">
            <ul className="Navbar-list">

                <li className="Navbar-item">
                    <a href="#About">About</a>
                </li>
                <li className="Navbar-item">
                    <a href="#Experience">Experience</a>
                </li>
                <li className="Navbar-item">
                    <a href="#Articles">Articles</a>
                </li>
                <li className="Navbar-item">
                    <a href="/Prizes">Prizes</a>
                </li>
                <li className="Navbar-item">
                    <a href="/Projects">Projects</a>
                </li>
                <li className="Navbar-item">
                    <a href="/Contact">Contact</a>
                </li>
                <li className="Navbar-item">
                    <button className="Navbar-button">Resume</button>
                </li>
            </ul>
        </div>
    );
}