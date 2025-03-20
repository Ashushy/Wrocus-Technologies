import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';

const OdooModuleDevelopment = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    return (
        <>
            <section className="bg-gray-50 p-8" id='odoo-module-development'>
                <div className="container mx-auto text-center" data-aos="zoom-in">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6"style={{ color: '#0056b3' }}>Odoo Module Development</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        At Wrocus Technology, we specialize in developing custom Odoo modules that enhance your business operations and cater to your specific needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-start">Custom Module Design</h3>
                            <p className="text-gray-600 text-start mt-6">
                                Our team designs bespoke modules tailored to your business processes, ensuring seamless integration and functionality.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-start">Integration with Existing Systems</h3>
                            <p className="text-gray-600 mt-6 text-start">
                                We ensure that your new modules integrate smoothly with your existing Odoo setup, enhancing overall efficiency.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-start">User-Friendly Interfaces</h3>
                            <p className="text-gray-600 text-start mt-6">
                                Our modules are designed with user experience in mind, providing intuitive interfaces that your team will love.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white p-8" data-aos="flip-up">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Odoo Module Development Services?</h2>
                    <p className="text-gray-600 mb-6 text-center">
                        With years of experience and a dedicated team of experts, we deliver high-quality Odoo modules that drive results and streamline your operations.
                    </p>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div className='w-full md:w-1/2 mt-12'>
                            <ul className="list-disc list-inside text-start text-gray-600 mt-8 leading-6">
                                <li className="mb-2">Tailored solutions to fit your unique business needs.</li>
                                <li className="mb-2">Robust support and maintenance for all modules.</li>
                                <li className="mb-2">Proven track record of successful implementations.</li>
                                <li className="mb-2">Focus on maximizing your return on investment.</li>
                                <li className="mb-2">Expert team with extensive knowledge of Odoo’s capabilities.</li>
                                <li className="mb-2">Agile development approach to ensure timely delivery.</li>
                                <li className="mb-2">Comprehensive testing to guarantee module performance and stability.</li>
                            </ul>
                        </div>
                        <div className='w-full md:w-1/2 flex justify-center'>
                            <img
                                src='https://www.wedoo.co.nz/web/image/2000-1d1ed497/Odoo%20App%20Ecosystem%20%281%29.jpg?access_token=aac86a3e-9057-4025-a98d-80ceff3040be'
                                alt="Odoo Versions"
                                className='mt-6 object-contain w-full   max-w-lg  ' // Improved image styling
                                style={{height:'400px'}}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OdooModuleDevelopment;
