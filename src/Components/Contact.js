import React from 'react'

function Contact() {
  return (
    <section className="contact" id="contact">
    <h2 className="heading">
      Contact<span>ME!</span>
    </h2>
  
    <form action="#" id="contactForm">
      <div className="input-box">
        <input
          type="text"
          minLength="3"
          maxLength="15"
          required
          name="Name"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="Email"
          required
          placeholder="Email Address"
        />
      </div>
      <div className="input-box">
        <input
          type="number"
          required
          placeholder="0788136963"
          name="Mobile"
        />
        <input
          type="text"
          required
          maxLength="30"
          name="Subject"
          placeholder="Email Subject"
        />
      </div>
      <textarea
        name="Message"
        required
        maxLength="200"
        cols="30"
        rows="10"
        placeholder="Your Message"
      ></textarea>
      <input type="submit" className="btn" id="alertButton" value="Send Message" />
    </form>
  </section>
  
  )
}

export default Contact