'use client'
import React, { useEffect, useState, useRef } from 'react';
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { initializeAOS } from '../utils/Aos_setup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const QualityAutoPage = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);
    const[isFormVisible,setFormVisible]=useState(false)

    const containerStyle = {
        backgroundColor: 'rgb(243 244 246)',
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    };

    return (
        <div className="bg-white">
              {/* <Navbar /> */}


            {/* Hero Section */}
            <section className="relative bg-blue-50 text-black py-8">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-2xl md:text-4xl mt-6 font-extrabold mb-6 leading-tight">
                        Revolutionize Your Quality Control with Our Automation Solutions
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                        Streamline your quality control processes with our cutting-edge automation services. Enhance efficiency, reduce errors, and achieve superior quality outcomes.
                    </p>
                    {/* <a   className="bg-blue-400 text-blue-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-300 transition duration-300">
                        Get Started
                    </a> */}
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-12 bg-white shadow-lg" data-aos="zoom-in-up">
                <div className="px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-black">Our Quality Automation Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service Cards */}
                        {[
                            {
                                imgSrc: '/automated testing.jpg',
                                title: 'Automated Testing',
                                description: 'Implement automated testing frameworks to ensure consistent and reliable test coverage across your products.',
                            },
                            {
                                imgSrc: '/advanced automation.jpg',
                                title: 'Advanced Automation Tools',
                                description: 'Leverage state-of-the-art tools to automate complex workflows and enhance productivity in your quality control processes.',
                            },
                            {
                                imgSrc: '/Real time monitoring.jpg',
                                title: 'Real-Time Monitoring',
                                description: 'Implement real-time monitoring solutions to track and manage quality metrics continuously and proactively.',
                            },
                            {
                                imgSrc: '/quality automation.jpg',
                                title: 'Quality Automation Solutions',
                                description: 'Streamline your testing processes with our quality automation solutions, ensuring precision and reliability in every release.',
                            },
                        ].map((service, index) => (
                            <div key={index} className="bg-blue-950 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl" data-aos="zoom-in-up">
                                <div className="flex justify-center mb-4">
                                    <img src={service.imgSrc} alt={service.title} className="w-full h-40 object-cover rounded-lg shadow-md" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                                <p className="text-sm md:text-base text-white">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Industry Insights */}
            <section className="py-12 bg-gray-100">
                <div className="text-center" data-aos="zoom-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-950">Industry Insights</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
                        {/* Insights */}
                        {[
                            {
                                title: 'The Benefits of Quality Automation',
                                description: 'Quality automation enhances efficiency, reduces human error, and ensures consistent product quality by automating repetitive tasks.',
                            },
                            {
                                title: 'Key Strategies for Quality Automation',
                                description: 'Discover essential strategies to implement quality automation effectively, including best practices for tool selection and workflow integration.',
                            },
                            {
                                title: 'Latest Trends in Automation',
                                description: 'Stay informed about the latest trends in automation technologies and how they are transforming quality control across industries.',
                            },
                            {
                                title: 'Impact of Automation on Quality',
                                description: 'Discover how automation impacts quality assurance and the overall effectiveness of quality control processes.',
                            },
                        ].map((insight, index) => (
                            <div
                                key={index}
                                className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            >
                                <h3 className="text-2xl font-semibold mb-4 text-white">{insight.title}</h3>
                                <p className="text-gray-200">{insight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Resources Section */}
            <section className="py-12 bg-blue-50">
                <div className=" px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-blue-950">Additional Resources</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Resources */}
                        {[
                            {
                                title: 'Automation Implementation Guide',
                                description: 'Download our guide to help you implement automation solutions effectively in your quality control processes.',
                            },
                            {
                                title: 'Quality Automation Checklist',
                                description: 'Get our comprehensive checklist to ensure that your automation setup meets all necessary quality standards.',
                            },
                            {
                                title: 'Quality Automation Best Practices',
                                description: 'Explore essential best practices for implementing quality automation effectively, ensuring optimal results and efficiency.',
                            },
                            {
                                title: 'Webinar on Automation Best Practices',
                                description: 'Join our upcoming webinar to learn about the best practices in automation and how they can benefit your quality control processes.',
                            },
                        ].map((resource, index) => (
                            <div key={index} className="bg-white p-12 rounded-lg shadow-lg max-w-xs" data-aos="zoom-in-up">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-950">{resource.title}</h3>
                                <p className="text-gray-950 mb-4">{resource.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Contact Section */}
            <div style={containerStyle} data-aos="zoom-in-up">
                <div className="relative container mx-auto text-center py-18 px-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
                        Ready to Revolutionize Your Quality Control?
                    </h1>
                    <p className="text-lg md:text-lg mb-8">
                        Contact us today to discover how our Quality Automation solutions can streamline your processes and boost your product quality.
                    </p>
                </div>

                 
                    <button
                        type="button"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                    onClick={() => setFormVisible(true)}
                    >
                        GET IN TOUCH
                    </button>
               
            </div>
            {
                    isFormVisible && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <ContactForm onClose={() => setFormVisible(false)} isCloseBtnVisible />
                            </div>
                        </div>
                    )
                }

            

            {/* <Footer /> */}
        </div>
    );
}

export default QualityAutoPage;