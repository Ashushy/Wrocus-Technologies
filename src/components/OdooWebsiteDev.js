'use client';
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';

const OdooWebsiteDev = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    return (
        <>
           
            <section className='bg-gray-100' id='odoo-website-dev'>
            <h1 className='text-center lg:text-4xl text-3xl p-4 font-bold ' style={{ color: '#0056b3' }}>
                Odoo Website Development
            </h1>
                <div className='mx-3 py-2' data-aos="zoom-in">
               
                    <div className='flex flex-col md:flex-row justify-center'>
                        <div className='w-full md:w-1/2 flex justify-center flex-col md:p-12'>
                            <h2 className='text-2xl font-semibold mb-4' style={{ color: '#0056b3' }}>
                                Our Expertise
                            </h2>
                            <p className='text-gray-950 text-sm lg:text-lg mb-4'>
                                At Wrocus Technology, we specialize in Odoo Website Development, providing businesses with visually appealing and highly functional websites. Our team is dedicated to creating customized solutions that align with your brand and enhance user experience.
                            </p>
                        </div>
                        <div className='w-full md:w-1/2 flex justify-center lg:mt-12'>
                            <img
                                src='https://www.captivea.com/web/image/449383-8d7e9953/Benefit-of-Odoo-consulting.svg'
                                alt="Odoo Consulting Benefits"
                                className='h-auto max-w-full max-h-[300px] object-contain transition-transform duration-300 hover:scale-105'
                            />
                        </div>
                    </div>

                    <div className='rounded-lg bg-white shadow-lg p-8 mt-6'>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className='w-full md:w-1/2 flex justify-center'>
                                <img
                                    src='/website devlopment odoo.jpg'
                                    alt="Website Development"
                                    className='h-auto max-w-full max-h-[300px] object-contain transition-transform duration-300 hover:scale-105'
                                />
                            </div>
                            <div className='w-full md:w-1/2 mt-2 md:mt-0'>
                                <h3 className='text-xl font-semibold mb-4'>Key Features</h3>
                                <ul className='list-disc list-inside text-gray-950 text-start'>
                                    <li className='mb-2'>🔹 Custom Odoo Website Design</li>
                                    <li className='mb-2'>🔹 E-commerce Integration</li>
                                    <li className='mb-2'>🔹 Responsive Design for Mobile and Tablet</li>
                                    <li className='mb-2'>🔹 SEO Optimization for Better Visibility</li>
                                    <li className='mb-2'>🔹 Content Management System (CMS) Setup</li>
                                    <li className='mb-2'>🔹 Third-party Application Integration</li>
                                    <li className='mb-2'>🔹 User-Friendly Navigation Design</li>
                                    <li className='mb-2'>🔹 Performance Optimization for Faster Loading</li>
                                    <li>🔹 Regular Maintenance and Updates</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Uncomment to add more content */}
                    <div className='flex flex-col md:flex-row  lg:p-12 bg-white py-12' data-aos="flip-up">
                    <div className='bg-white rounded-lg p-6 w-full md:w-1/2 flex justify-center flex-col'>
                        <h2 className='text-2xl font-semibold mb-4'>Why Choose Us?</h2>
                        <p className='text-gray-950'>
                            Our experienced developers ensure that your website is not only aesthetically pleasing but also functional and easy to navigate. We focus on creating a seamless user experience, optimizing performance, and ensuring that your website can scale as your business grows.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center mt-6 md:mt-0'>
                        <img
                            src='/why choose us odoo.jpg'
                            alt="Website Development"
                            className='h-auto max-w-full max-h-[300px] object-contain'
                        />
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default OdooWebsiteDev;
