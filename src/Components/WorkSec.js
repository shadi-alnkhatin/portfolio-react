import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WorkSec() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    className:'center',
    CenterMode: true,
  };

  return (
    <section className="work" id="work">
      <h2 className="heading">Latest<span>Project</span></h2>
      <div className="work__container">
        <Slider {...settings}>
          {/* Project 1 */}
          <div className="work__card">
            <img src={`${process.env.PUBLIC_URL}/img/goMovies.png`} alt="GoMovies" className="work__img" />
            <div className="work__details">
              <h3 className="work__title">GoMovies</h3>
              <p className="work__description">
                Technologies: Laravel, React, MySQL.<br/> A dynamic web application for exploring, interacting with, 
                and managing a collection of movies. It features user authentication, movie details, a favorites 
                system, and comments.
              </p>
              <a href="https://github.com/shadi-alnkhatin/Movies-Project-React-LarvelApi" target="_blank" rel="noopener noreferrer" className="work__link">View on GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="work__card">
            <img src={`${process.env.PUBLIC_URL}/img/fitZoon.png`} alt="FitZoon" className="work__img" />
            <div className="work__details">
              <h3 className="work__title">FitZoon</h3>
              <p className="work__description">
                Technologies: HTML5, CSS3, JavaScript, AJAX, PHP, MySQL. <br/>Developed an e-commerce site focused 
                on football apparel, featuring cart, wishlist, and PayPal checkout, along with search functionality 
                and an admin dashboard.
              </p>
              <a href="https://github.com/shadi-alnkhatin/Ecommerce_Project_PHP_MYSQL" target="_blank" rel="noopener noreferrer" className="work__link">View on GitHub</a>
            </div>
          </div>
          <div className="work__card">
            <img src={`${process.env.PUBLIC_URL}/img/chatty.jpg`} alt="chatty" className="work__img" />
            <div className="work__details">
              <h3 className="work__title">Chatty</h3>
              <p className="work__description">
                Technologies: Angular, Bootstrap, Asp.Net ,SqlServer. <br/>
                chatty is a real-time chat application with user authentication, profile management, friend requests, and instant messaging using SignalR
              </p>
              <a href="https://github.com/shadi-alnkhatin/university_projects/tree/main/Chaaty" target="_blank" rel="noopener noreferrer" className="work__link">View on GitHub</a>
            </div>
          </div>

          <div className="work__card">
            <img src={`${process.env.PUBLIC_URL}/img/movieMaze.png`} alt="MovieMaze" className="work__img" />
            <div className="work__details">
              <h3 className="work__title">MovieMaze</h3>
              <p className="work__description">
                Technologies: HTML5, CSS3, JavaScript, and API.<br/> Collaborated with a team to develop a dynamic 
                movie website with API integration for real-time movie data, utilizing responsive design.
              </p>
              <a href="https://github.com/shadi-alnkhatin/Movies_Web_App" target="_blank" rel="noopener noreferrer" className="work__link">View on GitHub</a>
            </div>
          </div>
          <div className="work__card">
            <img src={`${process.env.PUBLIC_URL}/img/eventSys.jpg`} alt="Events Project" className="work__img" />
            <div className="work__details">
              <h3 className="work__title">EVENTS</h3>
              <p className="work__description">
                Technologies: HTML5, CSS3, Razor Pages,Asp.Net,SqlServer.<br/>
                Developed a dynamic web application for managing, and displaying events, with user authentication, event creation, event management, and a filter functionality.
              </p>
              <a href="https://github.com/shadi-alnkhatin/university_projects/tree/main/EventMangmentSystem-master" target="_blank" rel="noopener noreferrer" className="work__link">View on GitHub</a>
            </div>
          </div>
          <div className="work__card">
            <img src={`${process.env.PUBLIC_URL}/img/quick-menu.png`} alt="QR Menu System" className="work__img" />
            <div className="work__details">
              <h3 className="work__title">QR Menu System (PAAS) </h3>
              <p className="work__description">
                Technologies: HTML5, CSS3, blade ,Laravel,MySQL.<br/>
                Developed a dynamic QR-based menu system for restaurants, enabling customers to view menus, place orders, and streamline operations using Laravel and Livewire.
              </p>
              <a href="https://github.com/shadi-alnkhatin/QuickMenu-laravel" target="_blank" rel="noopener noreferrer" className="work__link">View on GitHub</a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default WorkSec;
