import React from 'react'

function TestimonialsSec() {
  return (
    <section className="testimonials section" id="testimonials">
    <h2 className="heading">Testimonials</h2>
  
    <div className="testimonials__container">
  <div className="testimonial__card">
  <div className="testimonial_info">
        <img src={`${process.env.PUBLIC_URL}/img/hamza.jpg`} alt=""/>
        <h3 className="testimonial__author">Hamza Zamil</h3>
      </div>
    <div className="testimonial__content">
      <p className="testimonial__text">
        "Shadi is always reliable and does great work. He's a fantastic teammate who brings positive energy to every project."
      </p>
     
    </div>
  </div>

  <div className="testimonial__card">
  <div className="testimonial_info">
        <img src={`${process.env.PUBLIC_URL}/img/sami.png`} alt=""/>
        <h3 className="testimonial__author">Sami Yassin</h3>
      </div>
    <div className="testimonial__content">
      <p className="testimonial__text">
        "I enjoyed working with Shadi. He is creative, focused, and always ready to solve problems as a team."
      </p>
     
    </div>
  </div>

  <div className="testimonial__card">
  <div className="testimonial_info">
        <img src={`${process.env.PUBLIC_URL}/img/Azzam.jpg`} alt=""/>
        <h3 className="testimonial__author">Ahmad Azzam</h3>
      </div>
    <div className="testimonial__content">
      <p className="testimonial__text">
        "
        Shadi is quick to learn and eager to help. He always makes sure everyone is on the same page during group work."
      </p>
      
    </div>
  </div>
</div>

  </section>
  )
}

export default TestimonialsSec