'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WordAppreciation = () => {
    const [expendedIndex, setExpendedIndex] = useState(null);

    const testimonials = [
        {
            name: "Aakash Bhutani, HT Media Group",
            shortText: "Wrocus Technology provided exceptional service migrating our Circulation business application to the cloud.",
            fullText: "Wrocus Technology provided exceptional service migrating our Circulation business application to the cloud. Their expertise and dedication were evident from planning execution, resulting in a seamless transition that exceeded our expectations. Throughout the process, Wrocus demonstrated a profound understanding of our business needs and the application's intricacies."
        },
        {
            name: "Anil Gupta, Sun Max Gears Ltd",
            shortText: "We must say that Wrocus inventory control system has made our production planning and control better than ever ....",
            fullText: "We must say that Kloudrac’s inventory control system has made our production planning and control better than ever. Their software is designed to integrate all production functions onto a single screen."
        },
        {
            name: "Shekar Mehta, Udaan Infotech",
            shortText: "We immensely appreciate Wrocus and its services for streamlining our business operation and implement business management ... ",
            fullText: "Our decision to develop and implement business management software through Wrocus has made us feel proud."
        },
        {
            name: "Ashok Mittal, Blue Wings Travels",
            shortText: "Wrocus flight and hotel booking API is my go-to custom-made software for streamlining our business operation!",
            fullText: "It not only allows our representatives to find and book affordable flights but also helps them to track and manage the bookings seamlessly."
        }
    ];

    const toggleExpanded = (index) => {
        setExpendedIndex(expendedIndex === index ? null : index);
    };

    const settings = {
        dots: false, // Hide the dots
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <section className='mt-6 bg-gray-200 py-12 ' data-aos="zoom-out">
                <p className='text-3xl font-bold text-center mb-6 text-gray-950'>Words of Appreciation from Our Clients</p>
                <Slider {...settings}>
                    {
                        testimonials.map((item, index) => (
                            <div key={index} className='border p-12 mr-6 rounded bg-white'>
                                <p className='font-semibold text-gray-950 mb-3 text-xl'>{item.name}</p>
                                <p className='text-gray-950 leading-7'>{item.shortText}</p>
                                {expendedIndex === index && <p className='text-gray-950 leading-7'>{item.fullText}</p>}
                                <button onClick={() => toggleExpanded(index)} className='text-blue-500'>
                                    {expendedIndex === index ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        ))
                    }
                </Slider>
            </section>
        </div>

    );
};

export default WordAppreciation;
