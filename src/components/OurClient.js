import React from 'react';

const OurClient = () => {
  const logos = [
    {
      src: "https://notcommon-production.s3.amazonaws.com/uploads/collection/image/21109/open-uri20240708-17078-owizqu",
      alt: "Aaj Tak",
      size: { width: 80, height: 60 }
    },
    {
      src: "https://www.pluginhive.com/wp-content/uploads/2021/09/DELHIVERY-VAN.jpg",
      alt: "Delhivery",
      size: { width: 120, height: 80 }
    },
    {
      src: "https://cdn.brandfetch.io/idTOhC70ZS/w/400/h/400/theme/dark/icon.jpeg?c=1bx1740288256639id64Mup7acMau5-yeL&t=1732652761071",
      alt: "HT",
      size: { width: 80, height: 80 }
    },
    {
      src: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/04/56/95/045695e7-d27b-baf0-d6a3-4a02233bfcbe/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/1024x1024.jpg",
      alt: "Times Internet",
      size: { width: 80, height: 200 }
    },
    {
      src: "https://cdn.brandfetch.io/id0rnPjco0/w/400/h/400/theme/dark/icon.png?k=id64Mup7ac&t=1668516570940",
      alt: "Car Dekho Logo",
      size: { width: 80, height: 60 }
    },
    {
      src: "https://www.saasbuddy.in/community/wp-content/uploads/2024/03/magicbrick-1200x900.png",
      alt: "Magicbricks",
      size: { width: 80, height: 80 }
    },
    {
      src: "https://pbs.twimg.com/media/CGLNVTSUUAAuQmG.jpg",
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
