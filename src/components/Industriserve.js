'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react'

const Industriserve = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <>
            <div className='py-5 mt-5 'data-aos="zoom-in">
                <p className='text-center text-4xl font-bold'>Industries We Serve</p>
                <p className='text-center text-md  mt-2 mb-6'>Discover how our innovative solutions impact a diverse range of industries.</p>

                {/* Healthcare */}
                <section className=' bg-gray-50  mt-5'>
                    <div className='flex flex-col md:flex-row  p-5 mt-6 md:ml-5 '>
                        <div className='w-full md:w-1/2 mb-4 md:mb-0'>
                            <h2 className='text-4xl font-semibold mb-4 text-gray-950 mt-6 '>Healthcare</h2>
                            <p className='text-gray-700 mb-4'>
                                Tailored solutions for the healthcare industry that enhance patient care and operational efficiency.
                            </p>
                            <p className='text-gray-700 mb-4'>
                                Our innovative services include:
                            </p>
                            <ul className='list-disc list-inside text-gray-700'>
                                <li>Advanced patient management systems</li>
                                <li>Telehealth solutions for remote care</li>
                                <li>Data analytics for improved decision-making</li>
                                <li>Integration of AI for predictive healthcare</li>
                            </ul>
                            <p className='text-gray-700 mt-4'>
                                Partner with us to elevate your healthcare services and achieve better outcomes for your patients.
                            </p>
                        </div>
                        <div className='w-full md:w-1/2 flex justify-end'>
                            <img
                                src='https://spinfocom.co.in/industries/images/spinfocom-Healthcare-industry.svg'
                                alt='Healthcare Image'
                                className='rounded-lg ' // Added shadow for style
                                style={{ height: '380px', width: '600px' }}
                            />
                        </div>
                    </div>
                </section>

                {/* Finance */}
                <section className='bg-gray-50 mt-5'>
                    <div className='flex flex-col md:flex-row p-5 mt-6 md:ml-5'>
                        <div className='w-full md:w-1/2 flex justify-start'>
                            <img
                                src='https://media.licdn.com/dms/image/C4E12AQFlSpRxUZ2cag/article-cover_image-shrink_720_1280/0/1600551602029?e=2147483647&v=beta&t=6mh6HnRpCnEuhxCzt2lcY3ecL2-gk86pNfmupFUSbIE'
                                alt='Finance Image'
                                className='rounded-lg mt-4'
                                style={{ height: '300px', width: '600px' }}
                            />
                        </div>
                        <div className='w-full md:w-1/2 mb-4 md:mb-0'>
                            <h2 className='text-4xl font-semibold mb-4 text-gray-950 mt-6'>Finance</h2>
                            <p className='text-gray-700 mb-4'>
                                Customized financial solutions designed to optimize performance and enhance profitability.
                            </p>
                            <p className='text-gray-700 mb-4'>
                                Our comprehensive services include:
                            </p>
                            <ul className='list-disc list-inside text-gray-700'>
                                <li>Financial forecasting and analysis</li>
                                <li>Risk management strategies</li>
                                <li>Investment portfolio management</li>
                                <li>Compliance and regulatory support</li>
                            </ul>
                            <p className='text-gray-700 mt-4'>
                                Collaborate with us to drive your financial success and achieve your business goals.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Retails */}
                <section className='bg-gray-50 mt-5'>
                    <div className='flex flex-col md:flex-row p-5 mt-6 md:ml-5'>
                        <div className='w-full md:w-1/2 mb-4 md:mb-0'>
                            <h2 className='text-4xl font-semibold mb-4 text-gray-950 mt-6'>Retail</h2>
                            <p className='text-gray-700 mb-4'>
                                Tailored solutions for the retail industry that enhance customer experience and operational efficiency.
                            </p>
                            <p className='text-gray-700 mb-4'>
                                Our innovative services include:
                            </p>
                            <ul className='list-disc list-inside text-gray-700'>
                                <li>Point-of-sale (POS) systems for seamless transactions</li>
                                <li>Inventory management solutions for real-time tracking</li>
                                <li>Customer relationship management (CRM) tools</li>
                                <li>Data analytics for sales forecasting and trend analysis</li>
                            </ul>
                            <p className='text-gray-700 mt-4'>
                                Partner with us to optimize your retail operations and provide an exceptional shopping experience for your customers.
                            </p>
                        </div>
                        <div className='w-full md:w-1/2 flex justify-end'>
                            <img
                                src='https://designtemplate.tech/Goods-Delivery-to-Retail-Store-Distribution-Flat-Vector-Design-Illustration-700-.webp'
                                alt='Retail Image'
                                className='rounded-lg'
                                style={{ height: '320px', width: '600px' }}
                            />
                        </div>
                    </div>
                </section>

                {/* Manufacturing */}
                <section className='bg-gray-50 mt-5'>
  <div className='flex flex-col md:flex-row p-5 mt-6 md:ml-5'>
    <div className='w-full md:w-1/2 flex justify-start'>
      <img
        src='https://www.instinctools.com/wp-content/uploads/2022/12/industrial-software-development-preview.jpg'
        alt='Manufacturing Image'
        className='rounded-lg shadow-lg mt-4' // Added shadow for a polished look
        style={{ height: '300px', width: '600px' }}
      />
    </div>
    <div className='w-full md:w-1/2 mb-4 md:mb-0'>
      <h2 className='text-4xl font-semibold mb-4 text-gray-950 mt-6'>Manufacturing</h2>
      <p className='text-gray-700 mb-4'>
        Innovative solutions tailored to streamline manufacturing processes and maximize efficiency.
      </p>
      <p className='text-gray-700 mb-4'>
        Our comprehensive services include:
      </p>
      <ul className='list-disc list-inside text-gray-700 mb-4'>
        <li>Supply chain optimization for better resource management</li>
        <li>Automation and robotics integration</li>
        <li>Quality control and compliance solutions</li>
        <li>Data analytics for production forecasting and improvement</li>
      </ul>
      <p className='text-gray-700'>
        Partner with us to transform your manufacturing operations, reduce costs, and improve product quality for enhanced customer satisfaction.
      </p>
    </div>
  </div>
</section>





            </div>
        </>
    )
}

export default Industriserve