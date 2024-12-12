import React from 'react'

function WorkSec() {
  return (
    <section className="work section" id="work">
    <h2 className="heading">Latest<span>Project</span></h2>
  
    <div className="work__container ">
      <div className="work__card">
        {/* <img src="assets/img/work1.jpg" alt="Work 1" className="work__img"> */}
        <div className="coming-soon-overlay">
          <span className="coming-soon-text">Coming Soon</span>
        </div>
      </div>
      <div className="work__card">
        {/* <img src="assets/img/work2.jpg" alt="Work 2" className="work__img"> */}
        <div className="coming-soon-overlay">
          <span className="coming-soon-text">Coming Soon</span>
        </div>
      </div>
      <div className="work__card">
        {/* <img src="" alt="Work 3" className="work__img"> */}
        <div className="coming-soon-overlay">
          <span className="coming-soon-text">Coming Soon</span>
        </div>
      </div>
      
    </div>
  </section>
  )
}

export default WorkSec