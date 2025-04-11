import React from 'react';

const OurClient = () => {
  const logos = [
    {
      src: "/ajjtaklogo.jpg",
      alt: "Aaj Tak",
      size: { width: 80, height: 60 }
    },
    {
      src: "/delihvery logo.jpg",
      alt: "Delhivery",
      size: { width: 120, height: 80 }
    },
    {
      src: "/HT Media logo.jpg",
      alt: "HT",
      size: { width: 80, height: 80 }
    },
    {
      src: "/Times logo.jpg",
      alt: "Times Internet",
      size: { width: 80, height: 200 }
    },
    {
      src: "/car dekho.jpg",
      alt: "Car Dekho Logo",
      size: { width: 80, height: 60 }
    },
    {
      src: "/magicbricks.jpg",
      alt: "Magicbricks",
      size: { width: 80, height: 80 }
    },
    {
      src: "/hungama.jpg",
      alt: "Hungama",
      size: { width: 80, height: 80 }
    }
  ];

  return (
    <>
      <div className='mt-3 '>
        {/* <h2 className='text-4xl font-bold text-center mb-8'>Clients We Support</h2> */}

        {/* Inline style for animation */}
        <style>
          {`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .sliderr {
              display: flex;
              animation: slide 15s linear infinite;
              white-space: nowrap;
            }
            
            .logo-container {
              display: flex;
              flex-shrink: 0;
            }
            .logo-container .logo {
              flex: 0 0 auto; /* Prevent shrinking */
              margin-right: 20px; /* Space between logos */
            }
          `}
        </style>

        <div className='overflow-hidden bg-white p-4 '>
          <div className='sliderr'>
            <div className='logo-container flex justify-between gap-20'>
              {logos.map((logo, index) => (
                <div key={index} className='logo flex items-center p-2 hover:shadow-xl transition-shadow duration-300 rounded-lg'>
                  <img
                    src={logo.src}
                    width={logo.size.width}
                    height={logo.size.height}
                    alt={logo.alt}
                    className='object-contain'
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless effect */}
              {logos.map((logo, index) => (
                <div key={`duplicate-${index}`} className='logo flex justify-between items-center 
                p-4  hover:shadow-xl transition-shadow duration-300 rounded-lg'>
                  <img
                    src={logo.src}
                    width={logo.size.width}
                    height={logo.size.height}
                    alt={logo.alt}
                    className='object-contain'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurClient;
