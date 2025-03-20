'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';

// Inline styles for the partner logos slider
const containerStyle = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '300px',
  backgroundColor: 'black', // Set background color to black
  padding: '20px 0', // Add padding to the top and bottom
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center the content horizontally
  overflow: 'hidden'
};

const sliderStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  whiteSpace: 'nowrap',
  animation: 'scroll 10s linear infinite'
};

// Calculate the total width of the logos and use it in the keyframes
const logoStyle = {
  flex: '0 0 auto',
  marginRight: '6rem', // Increased gap between logos
  display: 'inline-block'
};

const imgStyle = {
  maxWidth: '200px', // Adjust the size of the logos
  height: 'auto',
  display: 'block' // Ensure the logo images are block elements
};

// Keyframes animation for scrolling effect
const keyframesStyle = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const OurPartner = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={containerStyle} >
        <div style={{ textAlign: 'center', width: '100%' }}  data-aos="fede-left">
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
          Our Partners
          </h2>
          <div style={sliderStyle}>
            {/* Display logos */}
            <div style={logoStyle}>
              <img src="https://sigmacoder.in/kloudrac2/assets/img/partner-1.png" alt="Partner 1" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src="https://sigmacoder.in/kloudrac2/assets/img/Untitled%20design%20(22).png" alt="Partner 2" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src="https://sigmacoder.in/kloudrac2/assets/img/partner-2.png" alt="Partner 3" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src="https://sigmacoder.in/kloudrac2/assets/img/partner-4.png" alt="Partner 4" style={imgStyle} />
            </div>
           
            {/* Repeat logos to ensure continuous scrolling */}
             <div style={logoStyle}>
              <img src="https://sigmacoder.in/kloudrac2/assets/img/partner-1.png" alt="Partner 1" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src="https://sigmacoder.in/kloudrac2/assets/img/Untitled%20design%20(22).png" alt="Partner 2" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src="https://sigmacoder.in/kloudrac2/assets/img/partner-2.png" alt="Partner 3" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src="https://sigmacoder.in/kloudrac2/assets/img/partner-4.png" alt="Partner 4" style={imgStyle} />
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPartner;
