import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';

const OdooConsulting = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);

    return (
        <>
            <section className='bg-white px-5 py-2 shadow-inner' id='odoo-consulting'>
                <div className='mt-2 lg:p-12 ' data-aos="zoom-in">
                    <p className='text-center text-3xl lg:text-4xl font-bold mb-4' style={{ color: '#0056b3' }}>Odoo Consultant</p>
                    <div className='mt-2 flex flex-col md:flex-row justify-between items-center'>
                        <div className='w-full md:w-1/2 mx-6'>
                            <p className=' mb-4 lg:mb-8 text-start'>Get expert advice on your ERP strategy to optimize processes and overcome challenges. Our seasoned consultants bring years of experience in implementing and customizing ERP solutions tailored to your business needs. We analyze your current workflows, identify bottlenecks, and recommend best practices that enhance efficiency and productivity.</p>
                            <p className='hidden sm:block' >Whether you're looking to streamline operations, improve data accuracy, or integrate different systems, our team is here to guide you every step of the way. We collaborate closely with your stakeholders to ensure a smooth transition and provide training to empower your staff, ensuring they can leverage the full potential of your ERP system.</p>
                            <p className='hidden sm:block'>With our comprehensive approach.</p>
                        </div>
                        <div className='w-full md:w-1/2 flex justify-center mt-4'>
                            <img src='/odoo consultant.jpg' className='h-auto max-h-[350px] w-full object-contain' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-8 ' data-aos="zoom-in">
                <div className='flex flex-col md:flex-row justify-between gap-5 p-5 bg-white rounded-lg   hover:shadow-xl transition-shadow duration-300' data-aos="zoom-in">
                    <div className='w-full md:w-1/2 flex justify-center items-center lg:mt-12'>
                        <img
                            src='/Odoo Functional Consultant.jpg'
                            className='h-auto max-h-[300px] w-full object-contain transition-transform duration-300 hover:scale-105'
                            alt='Odoo Functional Consultant'
                        />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-center'>
                        <p className='text-gray-950 text-3xl lg:text-4xl font-bold lg:mb-8' style={{ color: '#0056b3' }}>
                            Odoo Functional Consultant
                        </p>
                        <p className='text-gray-800 sm:text-sm lg:text-md mb-4'>
                            At Wrocus Technology, we bring over 5 years of expertise in Odoo consulting services to enhance our clients' businesses. Our skilled team is dedicated to optimizing the platform, ensuring it is user-friendly and tailored to meet specific needs. With extensive experience across various industries.
                        </p>
                        <p className='mt-4 hidden sm:block text-gray-700'>
                            We possess a deep understanding of operational workflows. This knowledge enables us to provide innovative solutions that address challenges and facilitate seamless integration, empowering your organization to thrive.
                        </p>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row justify-between mt-6 p-10 py-6 gap-5  ' data-aos="zoom-in">
                    <div className='w-full md:w-1/2'>
                        <p className='text-gray-950 text-3xl lg:text-4xl font-bold mb-6 mt-6' style={{ color: '#0056b3' }}>Odoo Technical Consultant</p>
                        <p className='text-gray-950 text-sm'>At Wrocus Technology, our team of Odoo Technical Consultants brings over 5 years of specialized expertise to help optimize your ERP solutions. We focus on enhancing system performance and ensuring that your Odoo environment operates smoothly and efficiently.</p>
                        <p className='mt-6 hidden sm:block'>With a solid understanding of system configuration, custom development, and integration, we address complex technical challenges. Our goal is to deliver innovative solutions that not only streamline your operations but also empower your organization to achieve its objectives.</p>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <img src='/Odoo ERP Consultation.jpg' className='h-auto max-h-[300px] w-full object-contain' />
                    </div>
                </div>
            </section>
        </>
    );
}

export default OdooConsulting;
