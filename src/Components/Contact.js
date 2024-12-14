import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cf4e3gl',
        'template_blb6y7k', 
        form.current,
        'BHl7f-bYWeXMnYyty'   
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(' Message sent successfully!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: 'Bounce',
            });
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again later.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: 'Bounce',
          });
        }
      );

    e.target.reset(); 
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact<span>ME!</span>
      </h2>

      <form ref={form} onSubmit={sendEmail} id="contactForm">
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
            type="tel"
            
            placeholder="0788136963 (optional)"
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
        <input type="submit" className="btn" value="Send Message" />
      </form>
      <ToastContainer />
    </section>
  );
}

export default Contact;

