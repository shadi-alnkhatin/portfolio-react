import React from 'react'

function ServicesSec() {
  return (
    <section className="services section"id="services">
            <h2 className="heading">My<span>Services</span></h2>

            <div className="services-container">
    {/* Frontend Development Service */}
    <div className="services-box">
        <i className="bx bx-desktop"></i>
        <h3>Frontend Development</h3>
        <p>Skilled in crafting user-friendly and visually appealing interfaces using modern technologies. 
           I can make responsive designs, interactive elements, and clean code to provide a seamless user experience.</p>
        <a href="#contact" className="btn">Contact Me</a>
    </div>

    {/* Backend Development Service */}
    <div className="services-box">
        <i className="bx bx-server"></i>
        <h3>Backend Development</h3>
        <p>Skilled in building robust and scalable server-side solutions, ensuring secure, efficient backend systems tailored to your application's needs. Proficient in database management and API integrations to deliver seamless functionality.</p>
        <a href="#contact" className="btn">Contact Me</a>
    </div>
</div>

    </section>
  )
}

export default ServicesSec