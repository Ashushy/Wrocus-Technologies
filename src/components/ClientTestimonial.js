'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { initializeAOS } from '@/app/utils/Aos_setup';

// Sample data for testimonials including image URLs
const testimonials = [
  {
    role: 'Success Manager',
    name: 'John Doe',
    text: 'This company exceeded my expectations. Their attention to detail and customer service is unparalleled.',
    image: 'https://etimg.etb2bimg.com/photo/87261183.cms' // Placeholder image URL
  },
  {
    role: 'Manager',
    name: 'Jane Smith',
    text: 'Working with this team has been a fantastic experience. Their professionalism and dedication are top-notch.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CQIMiyn44Rj9rbUflyH69dj0MaObVOeQPw&s' // Placeholder image URL
  },
  {
    role: 'Company Owner',
    name: 'Michael Johnson',
    text: 'I am incredibly proud of the work we do. Our commitment to excellence is reflected in every project we undertake.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/306764204888467.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png' // Placeholder image URL
  },
  {
    role: 'Client',
    name: 'John Doe',
    text: 'This company exceeded my expectations. Their attention to detail and customer service is unparalleled.',
    image: 'https://e7.pngegg.com/pngimages/733/149/png-clipart-bureau-veritas-india-pvt-ltd-business-bureau-veritas-marine-offshore-others-emblem-text.png' // Placeholder image URL
  },
  {
    role: 'Manager',
    name: 'Jane Smith',
    text: 'Working with this team has been a fantastic experience. Their professionalism and dedication are top-notch.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PFaB3X1qcMh7ZwSD7HiAXa-QvAz5BroCtQ&s' // Placeholder image URL
  },
  {
    role: 'Company Owner',
    name: 'Michael Johnson',
    text: 'I am incredibly proud of the work we do. Our commitment to excellence is reflected in every project we undertake.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQps8ve-lA2zYqKa6DA_-em5XLdgScm0h24Q&s' // Placeholder image URL
  }
];

// Custom arrow components
const PrevArrow = (props) => (
  <button
    className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-white p-4 rounded-full focus:outline-none z-10 hover:bg-gray-800"
    onClick={props.onClick}
    aria-label="Previous Slide"
    style={{backgroundColor:'black'}}
  >
    &#9664;
  </button>
);

const NextArrow = (props) => (
  <button
    className="slick-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-4 rounded-full focus:outline-none z-10 hover:bg-gray-800"
    onClick={props.onClick}
    aria-label="Next Slide"
    style={{backgroundColor:'black'}}
  >
    &#9654;
  </button>
);

const ClientTestimonial = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="relative p-6" style={{backgroundColor:'whitesmoke'}} data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <h2 className="text-2xl font-bold text-center mb-6">Success Stories of Innovation and Excellence</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white  border border-gray-200 rounded-lg shadow-md flex flex-col p-6"
            style={{ height: '350px', display: 'flex', flexDirection: 'column' }} // Fixed height and flexbox layout
          >
            {/* Container for image */}
            <div className="flex justify-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="object-contain w-40 h-20" />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-center mb-2 flex-grow-0">
                <h3 className="text-xl font-semibold text-black">{testimonial.role}</h3>
                <h4 className="text-lg font-medium text-black">{testimonial.name}</h4>
              </div>
              <p className="  text-black text-center flex-grow">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClientTestimonial;
