'use client'
import React, { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { initializeAOS } from '@/app/utils/Aos_setup';

const OurServices = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
  }, []);
  const services = [
    {
      title: 'Web Development',
      // title2: '& Development',
      description: 'We carry more than just good coding skills. Our experience makes us stand out from other web development. Our designs are tailored to meet user needs, ensuring an engaging experience.',
      icon: "/devlopment icon.jpg"
    },
    {
      title: 'Mobile Apps Development',
      // title2: 'Development',
      description: 'Create complex enterprise software, ensure reliable software integration, modernize your legacy system. We focus on building scalable and efficient mobile applications that enhance user engagement.',
      icon: "/mobile devlopment.jpg",
    },
    {
      title: 'UI/UX Design',
      // title2: 'Design',
      description: 'Build the product you need on time with an experienced team that uses a clear and effective design process. We emphasize user-centered design principles to create intuitive interfaces.',
      icon: "/ui ux icon.jpg"
    },
    {
      title: 'QA & Testing',
      // title2: '& Testing',
      description: 'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software. Our rigorous testing methodologies help identify issues early in the development cycle.',
      icon: "/qa testing.jpg",
    },
    {
      title: 'IT Consultancy',
      // title2: 'Consultancy',
      description: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios. We provide strategic insights that align IT initiatives with your business goals.',
      icon: "/it consultancy.jpg",
    },
    {
      title: 'Odoo Development',
      // title2: 'Development',
      description: 'Customizing and implementing Odoo solutions to streamline your business processes. Our expertise in Odoo allows us to tailor solutions that fit your specific needs.',
      icon: "/odoo.jpg",
    },
  ];


  return (
    <div className=" mx-auto p-6 bg-slate-100 " data-aos="zoom-in">
      <h1 className="text-4xl font-bold text-center mb-4">Solutions We Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer ">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-6 transition-transform transform hover:scale-105  "
            data-aos="zoom-in"
          >
            <div className='flex justify-evenly'>
              <div className='flex '>
                <img src={service.icon} alt={service.title} className="h-20 w-20 object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-center mt-3 text-black hover:text-blue-300 transition duration-300 cursor-pointer">{service.title}</h2>
          
              </div>
            </div>
            <p className="text-gray-600 text-start text-sm ml-9 mt-8 mb-4 leading-6">{service.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
