'use client';
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';

const OdooCustomization = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    return (
        <>
            <section className='bg-white py-4' id='odoo-customization'>
                <p className='text-center text-3xl font-bold text-gray-950 lg:py-6' style={{ color: '#0056b3' }}>Odoo Customization</p>
                
                <div className="flex flex-col md:flex-row justify-between p-6 rounded-lg mx-4 lg:my-8" data-aos="zoom-in-left">
                    <div className='w-full md:w-1/2 mb-6 md:mb-0 py-5'>
                        <h2 className='text-2xl font-bold text-gray-950 mb-4'style={{ color: '#0056b3' }}>Odoo Customization Services</h2>
                        <p className='lg:mt-4 text-start text-gray-700'>
                            At Wrocus Technology, we understand that every business has unique needs. Our Odoo customization services are designed to tailor the platform specifically for you, enhancing functionality and user experience.
                        </p>
                        <p className='mt-2 text-start text-gray-950'>
                            Whether you need custom modules, specific workflows, or unique reports, our expert team is here to ensure that Odoo fits your business like a glove.
                        </p>
                        <div className='flex justify-start gap-12 mt-12'>
                            <img
                                src='https://www.candidroot.com/website_candidroot/static/src/svg/mobile_app_page3.svg'
                                className='mt-1 h-20 md:h-24' // Responsive height
                            />
                            <img
                                src='https://www.candidroot.com/website_candidroot/static/src/svg/mobile_app_page4.svg'
                                className='h-20 md:h-24' // Responsive height
                            />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <img
                            src='https://www.ksolves.com/wp-content/uploads/2024/04/odoo-dev-banner.svg'
                            alt='Odoo Customization'
                            className='max-w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105'
                        />
                    </div>
                </div>

                <div className='p-4 mx-4 md:mx-8 flex flex-col md:flex-row justify-around gap-8' data-aos="zoom-in-left">
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-2xl font-semibold mt-6 text-gray-800 text-start'style={{ color: '#0056b3' }}>Our Customization Services Include:</h3>
                        <ul className='list-disc list-inside font-normal text-gray-950 mt-4 text-start'>
                            <li className='mb-2'>Custom Module Development</li>
                            <li className='mb-2'>Workflow Optimization</li>
                            <li className='mb-2'>User Interface Enhancements</li>
                            <li className='mb-2'>Integration with Third-party Applications</li>
                            <li className='mb-2'>Custom Reporting and Analytics</li>
                            <li className='mb-2'>Feature Extensions and Modifications</li>
                            <li className='mb-2'>Regular Maintenance and Support</li>
                        </ul>
                        <p className='mt-12 text-start text-gray-700 max-w-2xl mx-auto'>
                            Let us help you maximize the potential of Odoo for your business. Contact us today to discuss your customization needs and take your operations to the next level!
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-end mt-6 md:mt-0'>
                        <img
                            src='/odoo consulting.jpg'
                            className='bg-gray-100 p-5 w-full h-auto md:w-3/4' // Responsive width
                            alt='Quality Assurance'
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default OdooCustomization;
