'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick';

// Import slick-carousel CSS (if not already imported globally)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { initializeAOS } from '@/app/utils/Aos_setup';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Sample data for the cards
const cardData = [
    {
        id: 1,
        imgSrc: 'https://www.localwebsitedesign.com/wp-content/uploads/2014/02/responsive-web-design.png',
        title: 'Basic Project ',
        description: 'DESIGN / DEVELOPMENT',
        name: <ArrowForwardIcon />
    },
    {
        id: 2,
        imgSrc: 'https://img.freepik.com/premium-photo/low-angle-view-group-young-teenagers-holding-cell-phones-surprised-faces-looking-screen-concept-technology-connection-colorful_325573-674.jpg?semt=ais_hybrid',
        title: 'Social Media App',
        description: 'DESIGN / TECHNOLOGY',
        name: <ArrowForwardIcon />
    },
    {
        id: 3,
        imgSrc: 'https://img.freepik.com/premium-photo/professional-architect-working-office-desk-wearing-vr-headset-he-is-viewing-virtual-reality-interface_141188-6206.jpg',
        title: 'App for Virtual Reality',
        description: 'DESIGN / IDEA',
        name: <ArrowForwardIcon />
    },
    {
        id: 4,
        imgSrc: 'https://www.securitymagazine.com/ext/resources/Default-images/Responsive-Defaults/cyber-900.jpg?1554749582',
        title: 'Analysis Of Security',
        description: 'IDEAS / TECHNOLOGY',
        name: <ArrowForwardIcon />
    },
    {
        id: 5,
        imgSrc: 'https://www.cxtoday.com/wp-content/uploads/2022/03/ecommerce-3.png',
        title: 'eCommerce Website',
        description: 'DESIGN / IDEA',
        name: <ArrowForwardIcon />
    },

];

const CardGrid = () => {


    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 images at a time
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='mt-5 p-5' data-aos="zoom-in-up">
                <div className='flex justify-between items-center'>
                    <div className='w-1/3  '>
                        <h3 className='text-violet-600'>// LATEST CASE STUDIES </h3><br />
                        <h2 className='text-4xl' style={{ fontWeight: 'bold' }}> Introduce Our Projects</h2>
                    </div>
                    <div className='w-1/3 pl-4 '>
                        {/* <p  >
                            Software development outsourcing is just a tool to achieve business goals. But there is no way to get worthwhile results without cooperation and trust between a client company.</p> */}
                    </div>
                </div>
            </div>

            <div className="p-8 bg-gray-100" data-aos="zoom-in-up">
                <Slider {...settings}>
                    {cardData.map(card => (
                        <div key={card.id} className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in-up">
                            <img
                                src={card.imgSrc}
                                alt={card.title}
                                className='object-contain'
                                 
                                style={{ height: '280px', width: '100%' }}
                            />
                            <div className="p-6 bg-blue-950  text-white">
                                <h2 className="text-xl font-bold mb-2 text-white text-center">{card.title}</h2>
                                {card.description && <p className="text-white text-center font-2xl">{card.description}</p>}
                                <Link href="/casestudy"><p className='text-end text-blue-500'>{card.name}</p></Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default CardGrid;
