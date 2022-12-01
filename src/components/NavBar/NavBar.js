import React from 'react'
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="NetFlix Logo" />
        <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="Avatar" />
        <div className='Nav_links'>
          <a href='/'>Home</a>
          <a href='/'>Tv Shows</a>
          <a href='/'>Tv Movies</a>
          <a href='/'>New & Popular</a>
          <a href='/'>My List</a>
          <a href='/'>Browse By Language</a>
          </div>
          <div className='Nav Right'>
      
          <span>Kids</span>
           
          

          </div>

        </div>
      
  )
}

export default NavBar