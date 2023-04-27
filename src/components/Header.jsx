import React from 'react'
import "./StyleMain.css"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <div class="header__navbar">
        <Link to="/home">
            <p>Home</p>
        </Link>
        <Link to="/oscar">
            <p>Oscar</p>
        </Link>
        <Link to="/info">
            <p>Info</p>
        </Link>
      <h2>
        Will <br />
        Smith
      </h2>
      <Link to="/films">
            <p>Films</p>
        </Link>
        <Link to="/reviews">
            <p>Reviews</p>
        </Link>
        <Link to="/social">
            <p>Social</p>
        </Link>
    </div>
    </div>
  )
}

export default Header