import React from 'react'

function TestimonialsSec() {
  return (
    <section className="testimonials section" id="testimonials">
    <h2 className="heading">Testimonials</h2>
  
    <div className="testimonials__container">
      <div className="testimonial__card">
        <div className="testimonial__content">
          <p className="testimonial__text">
            "Working with Shadi has been a pleasure! Their front-end development skills are top-notch, and their attention to detail is impressive. They always go the extra mile to ensure the best user experience."
          </p>
          <div className="testimonial_info">
            {/* <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png" alt=""> */}
          <h3 className="testimonial__author">Sarah Johnson</h3>
          </div>
          <span className="testimonial__position">Lead Designer at CreativeWorks</span>
        </div>
      </div>
  
      <div className="testimonial__card">
        <div className="testimonial__content">
          <p className="testimonial__text">
            "Shadi is a highly motivated student with a deep passion for coding. Their ability to learn new technologies quickly and apply them effectively makes them stand out. I would highly recommend them to any project."
          </p>
          <div className="testimonial_info">
          {/* <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-black-icon.png" alt=""> */}
          <h3 className="testimonial__author">Michael Adams</h3>
          </div>
          <span className="testimonial__position">Software Engineer at TechInnovators</span>
        </div>
      </div>
  
      {/* <!-- Testimonial 3 --> */}
      <div className="testimonial__card">
        <div className="testimonial__content">
          <p className="testimonial__text">
            "I've collaborated with Shadi on several projects, and I'm always amazed by their creativity and problem-solving abilities. They're a great team player and always eager to take on challenges."
          </p>
          <div className="testimonial_info">
            {/* <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png" alt=""> */}
          <h3 className="testimonial__author">Emily Carter</h3>
          </div>
          <span className="testimonial__position">Project Manager at WebFusion</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TestimonialsSec