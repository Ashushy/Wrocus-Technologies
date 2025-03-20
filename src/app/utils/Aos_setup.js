import AOS from 'aos';
import 'aos/dist/aos.css';

export const initializeAOS = () => {
  AOS.init({
    duration: 800, // Animation duration in milliseconds
    easing: 'ease-out', // Animation easing
    once: false, // Animation should re-trigger on scroll
  });

  // Refresh AOS on window resize
  const handleResize = () => AOS.refresh();
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
};
