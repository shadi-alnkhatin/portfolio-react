import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
        distance:'80px',
        duration:2000,
        delay:200
    });
    sr.reveal('.home-content, .skills__container, .heading', { origin: 'top' });
    sr.reveal(
      '.home-img, .services-container, .portfolio-box, .testimonials__container, .contact form',
      { origin: 'bottom' }
    );
    sr.reveal('.home-content h1, .work__container, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });
  }, []);
};

export default useScrollReveal;
