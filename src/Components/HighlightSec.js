import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function HighlightSec() {
  const highlights = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Creative Problem Solver',
      description:
        'I approach challenges with creativity, thinking outside the box to find unique solutions for design and development problems.',
    },
    {
      icon: 'bx bxs-tim',
      title: 'Efficient Time Management',
      description:
        'I prioritize tasks effectively, ensuring deadlines are met while maintaining high-quality standards.',
    },
    {
      icon: 'bx bxs-grou',
      title: 'Team Player',
      description:
        'I collaborate effectively in team environments, contributing to shared goals and ensuring project success.',
    },
    {
      icon: 'bx bx-cod',
      title: 'Technical Expertise',
      description:
        'With expertise in both frontend and backend technologies, I build robust and scalable applications.',
    },
  ];

  var settings = {
    dots: true, 
   infinite: true, 
  slidesToShow: 1, 
  slidesToScroll: 1, 
  autoplay: true,
  autoplaySpeed: 3000, 
  speed: 1000, 
  cssEase: "linear", 
  };

  return (
    <section className=" highlight " id="">
      <h2 className="heading">
        Why Work <span>With Me?</span>
      </h2>
      <div className="">
        <Slider {...settings}>
          {highlights.map((highlight, index) => (
            <div className="highlight-card" key={index}>
              <i className={`highlight-icon ${highlight.icon}`}></i>
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HighlightSec;
