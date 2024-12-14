import React from 'react'

function AboutSec() {
  return (
    <section className="about" id="about">
            <div className="about-img">
                <img src={`${process.env.PUBLIC_URL}/img/developer.webp`} alt=""/>
            </div>
            <div className="about-content">
                <h2 className="heading">About<span>Me</span></h2>
               
                <p>
                Hey there! I'm Shadi Alnkhatin, a <b>full-stack developer</b> currently based in Jordan and currently i'm in an intensive bootcamp at Orange Coding Academy.<br/> I specialize in building robust web applications using technologies like React, Laravel, and MySQL. While my primary focus is full-stack development, I am highly adaptable and enjoy exploring new tools to meet project needs.
                  <br />
                  I'm looking for entry-level
                  role opportunities where I can merge my love for code with my love for learning to solve challenging problems. If you have an opening that might be a good fit, let's connect and explore the possibilities!                </p>
            </div>
    </section>
  )
}

export default AboutSec