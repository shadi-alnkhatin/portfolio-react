import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

  
function HeroSec() {
  const element = useRef(null); 

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        'a Full-Stack Developer',
        'Currently Trainee At Orange Coding Academy',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
    <div className="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Shadi Alnkhatin</h1>
      <h3 className='multiple-text-heading'>
        And I'm  <span className="multiple-text"ref={element}></span>
      </h3>
      <div className="social-media">
        {/* GitHub */}
        <a
          href="https://github.com/shadi-alnkhatin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        {/* Email */}
        <a
          href="mailto:shadi.alnkhatin@gmail.com?subject=Hello Shadi&body=I%20would%20like%20to%20contact%20you."
        >
          <i className="bx bxs-envelope"></i>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shadi-alnkhatin-50a3982b9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>
      <a href="#contact" className="btn">
        Let's Contact
      </a>
      <button className="btn mx-3">
        <a href={`${process.env.PUBLIC_URL}/shadi-cv.pdf`} download="Shadi_Alnkhatin_CV.pdf">
                Download CV
        </a>
      </button>
    </div>
  </section>
  
  )
}

export default HeroSec