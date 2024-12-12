import React from 'react'

function SkillsSec() {
  return (
    <section className="skills section" id="skills">
            
    <div className="skills__container ">          
        
            <h2 className="heading">Profesional <span>Skills</span></h2>
            <p className="skills__text"></p>
            <div className="skills__data">
                <div className="skills__names">
                    <i className='bx bxl-html5 skills__icon'></i>
                    <span className="skills__name">HTML5</span>
                </div>
                <div className="skills__bar skills__html">

                </div>
                <div>
                    <span className="skills__percentage">95%</span>
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__names">
                    <i className='bx bxl-css3 skills__icon'></i>
                    <span className="skills__name">CSS3</span>
                </div>
                <div className="skills__bar skills__css">
                    
                </div>
                <div>
                    <span className="skills__percentage">85%</span>
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__names">
                    <i className='bx bxs-paint skills__icon'></i>
                    <span className="skills__name">UX/UI</span>
                </div>
                <div className="skills__bar skills__ux">
                    
                </div>
                <div>
                    <span className="skills__percentage">30%</span>
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__names">
                    <i className='bx bxl-javascript skills__icon' ></i>
                    <span className="skills__name">JAVASCRIPT</span>
                </div>
                <div className="skills__bar skills__js">
                    
                </div>
                <div>
                    <span className="skills__percentage">20%</span>
                </div>
            </div>
    </div>
</section>
  )
}

export default SkillsSec