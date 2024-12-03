import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar';
import heroImg from '../assets/intro.svg';
export default function Hero() {
  return (
    <div className="hero" id='hero'>
    <div>
        <NavBar />
    </div>
    </div>
  )
}
