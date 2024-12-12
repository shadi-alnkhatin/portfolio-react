import React from 'react'

function Nav() {
  return (
    <header className="header">
            <a href="#" className="logo">SHADI.</a>
            <i className='bx bx-menu' id="menu-icon"></i>
            <nav className="navbar ">
                <a href="#home" className="active">Home</a>
                <a href="#about">ABOUT</a>
                <a href="#skills">SKILLS</a>
                <a href="#services">SERVICES</a>
                <a href="#work">PROJECTS</a>
                <a href="#testimonials">TESTIMONIALS</a>
                <a href="#contact">CONTACT</a>
            </nav>
    </header>
  )
}

export default Nav