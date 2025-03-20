'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { initializeAOS } from '@/app/utils/Aos_setup';

const IndustriesHome = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);

    const industries = [
        {
            href: '/industries#healthcare',
            img: 'https://www.dbswebsite.com/uploads/DBS-20240126-article-homepage-great-design-healthcare-website-PX-5505955421-min.jpg',
            title: 'Healthcare',
            description: 'Tailored solutions for the healthcare industry that enhance patient care and operational efficiency.',
        },
        {
            href: '/industries#finance',
            img: 'https://www.keyideasinfotech.com/wp-content/uploads/2022/10/finance-thumb.webp',
            title: 'Finance',
            description: 'Enhance security, compliance, and performance in the financial sector with our advanced solutions.',
        },
        {
            href: '/industries#retail',
            img: 'https://media.istockphoto.com/id/1405760376/vector/online-shopping-design-graphic-elements-signs-symbols-mobile-marketing-and-digital-marketing.jpg?s=612x612&w=0&k=20&c=2DSpkY9ktsAfzBOcZUMkZThW3B6kvGYG1cHQ3yeaPJg=',
            title: 'Retail',
            description: 'Transform the retail experience with solutions designed to streamline operations and boost sales.',
        },
        {
            href: '/industries#manufacturing',
            img: 'https://img.freepik.com/premium-photo/automation-hightech-machinery-factory-show-industrial-automation_1037297-54997.jpg',
            title: 'Manufacturing',
            description: 'Improve productivity and supply chain management with our advanced manufacturing solutions.',
        },
        {
            href: '/industries#logistics',
            img: 'https://static.vecteezy.com/system/resources/thumbnails/027/468/676/small/businessman-holding-digital-globe-in-palm-for-logistics-import-export-background-and-container-cargo-freight-ship-transport-concept-photo.jpg',
            title: 'Logistics',
            description: 'Optimize your supply chain and delivery processes with our logistics solutions.',
        },
        {
            href: '/industries#media',
            img: 'https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.jpg?s=612x612&w=0&k=20&c=VVAxxwhrZZ7amcPYJr08LLZJTyoBVMN6gyzDk-4CXos=',
            title: 'Media',
            description: 'Enhance your media strategies with our innovative solutions tailored for the industry.',
        },
        {
            href: '/industries#education',
            img: 'https://blog.icons8.com/wp-content/uploads/2020/02/education-website-design.png',
            title: 'Education',
            description: 'Enhance learning experiences and streamline administration with our innovative educational solutions.',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCards, setShowCards] = useState([0, 1, 2, 3]);

    const handleShowMoreRight = () => {
        if (currentIndex < industries.length - 4) {
            setCurrentIndex((prev) => prev + 1);
            setShowCards((prev) => [...prev.slice(1), currentIndex + 4]);
        }
    };

    const handleShowMoreLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
            setShowCards((prev) => [currentIndex - 1, ...prev.slice(0, 3)]);
        }
    };

    return (
        <div className="bg-blue-50 flex flex-col" id="odoo">
            {/* Hero Section */}
            <section className="py-5 text-center text-black" data-aos="zoom-in-up">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
                    <p className="text-lg md:text-xl">
                        Discover how our innovative solutions impact a diverse range of industries.
                    </p>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-8 px-2">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="zoom-in-up">
                        {showCards.map((index) => (
                            <Link key={index} href={industries[index].href} legacyBehavior>
                                <a className="relative block bg-blue-950 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group" data-aos="zoom-in-up">
                                    <div className="relative" data-aos="zoom-in-up">
                                        <img
                                            src={industries[index].img}
                                            alt={industries[index].title}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6 relative z-10">
                                        <h2 className="text-2xl font-semibold mb-3">{industries[index].title}</h2>
                                        <p>{industries[index].description}</p>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>

                    {/* Dotted line with arrows */}
                    <div className="flex items-center justify-center mt-6">
                        <button onClick={handleShowMoreLeft} disabled={currentIndex === 0} className="mx-4">
                            <span className="text-2xl">&#9664;</span> {/* Left Arrow */}
                        </button>
                        <div className="flex items-center">
                            <div className="h-1 w-1 rounded-full bg-gray-300 mx-1" />
                            <div className="h-1 w-1 rounded-full bg-gray-300 mx-1" />
                            <div className="h-1 w-1 rounded-full bg-gray-300 mx-1" />
                            <div className="h-1 w-1 rounded-full bg-gray-300 mx-1" />
                        </div>
                        <button onClick={handleShowMoreRight} disabled={currentIndex >= industries.length - 4} className="mx-4">
                            <span className="text-2xl">&#9654;</span> {/* Right Arrow */}
                        </button>
                    </div>
                </div>
            </section>

            {/* Inline Styles */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

                body {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default IndustriesHome;
