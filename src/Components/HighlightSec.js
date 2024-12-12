import React from 'react'

function HighlightSec() {
  return (
    <section className="highlight section" id="highlight">
            <h2 className="heading">Why Work <span>with Me?</span></h2>
            <div id="carouselExampleControls" className="carousel slide highlight-carousel" data-ride="carousel">
                <div className="carousel-inner">
                    {/* <!-- First Slide --> */}
                    <div className="carousel-item active">
                        {/* <img src="https://media.istockphoto.com/id/1184802478/vector/abstract-blurred-background-defocused-blue-gradient.jpg?s=612x612&w=0&k=20&c=F-Ulisq_XFsix3-KE0DJvfFZ49Z5yq4CnzanL_TTmo0=" className="highlight__img d-block w-100" alt=""> */}
                        <div className="carousel-caption d-md-block highlight__box">
                            <i className="fas fa-lightbulb highlight__icon"></i>
                            <h3 className="highlight__title">Creative Problem Solver</h3>
                            <p className="highlight__description">
                                I approach challenges with creativity, thinking outside the box to find unique solutions for design and development problems.
                            </p>
                        </div>
                    </div>
                    {/* <!-- Second Slide --> */}
                    <div className="carousel-item">
                        {/* <img src="https://media.istockphoto.com/id/1184802478/vector/abstract-blurred-background-defocused-blue-gradient.jpg?s=612x612&w=0&k=20&c=F-Ulisq_XFsix3-KE0DJvfFZ49Z5yq4CnzanL_TTmo0=" className="highlight__img d-block w-100" alt=""> */}
                        <div className="carousel-caption d-md-block highlight__box">
                            <i className="fas fa-hourglass-half highlight__icon"></i>
                            <h3 className="highlight__title">Time Management</h3>
                            <p className="highlight__description">
                                With solid time-management skills, I consistently meet deadlines and ensure the project moves forward smoothly.
                            </p>
                        </div>
                    </div>
                </div>
            
                {/* <!-- Carousel Controls --> */}
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
        
    </section>
  )
}

export default HighlightSec