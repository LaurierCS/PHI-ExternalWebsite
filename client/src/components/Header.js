import React from "react";
import history from "../browserHistory";
import logo from "../logo.svg";
const Header = () => {
    return (
        <div class="header-container">
            <header class="nav-header">
                <p>123@email.com</p>
                <p>(123) 456 - 7891</p>
            </header>

            <div class="logo">
                <img src={logo} class="logo" />

                <nav class="navbar">
                    <ul class="nav-links">
                        <a href="home">Home</a>
                        <a href="about">About Us</a>
                        <a href="events">Events</a>
                        <a href="team">Meet the Team</a>
                        <a href="projects">Projects</a>
                        <a href="contact">Contact Us</a>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
