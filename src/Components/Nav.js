import React, { useEffect, useState } from 'react'

function Nav() {
    const [isMenuActive, setIsMenuActive] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuActive(!isMenuActive);
    };
  
    const highlightActiveLink = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');
      const top = window.scrollY;
  
      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
  
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(id)) {
              link.classList.add('active');
            }
          });
        }
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', highlightActiveLink);
        return () => {
        window.removeEventListener('scroll', highlightActiveLink);
      };
    }, []);
  return (
    <header className="header">
            <a href="#" className="logo">SHADI.</a>
            <div  onClick={toggleMenu}>
              <i className={`bx ${isMenuActive ? 'bx-x' : 'bx-menu'}`} id="menu-icon"></i>
            </div> 
            <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
                <a href="#home" className="active" onClick={toggleMenu}>Home</a>
                <a href="#about" onClick={toggleMenu}>ABOUT</a>
                <a href="#skills"onClick={toggleMenu}>SKILLS</a>
                <a href="#services"onClick={toggleMenu}>SERVICES</a>
                <a href="#work"onClick={toggleMenu}>PROJECTS</a>
                <a href="#contact"onClick={toggleMenu}>CONTACT</a>
            </nav>
    </header>
  )
}

export default Nav