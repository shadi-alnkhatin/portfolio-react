import React from 'react'

function HeroSec() {
  return (
    <section className="home" id="home">
    <div className="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Shadi Alnkhatin</h1>
      <h3>
        And I'm a <span className="multiple-text"></span>
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
    </div>
  </section>
  
  )
}

export default HeroSec