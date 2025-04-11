import React from 'react';

const OdooAppDev = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-4" id='odoo-appdev'>
            {/* Hero Section */}
            <section className="relative bg-white" data-aos="zoom-in">
                <div className="absolute inset-0" />
                <div className="relative text-center py-6">
                    <h1 className="text-4xl font-bold text-gray-950 transition-opacity duration-500 ease-in" style={{ color: '#0056b3' }}>
                        Odoo App Development
                    </h1>
                    <p className="text-lg text-gray-950 mt-4 max-w-3xl mx-auto transition-opacity duration-500 ease-in">
                        Custom applications designed to fit your business needs and optimize your workflows.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="p-8 bg-white" data-aos="zoom-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom App Development</h3>
                        <img
                            src='/Odoo-Dedicated-Developer.jpg'
                            className="transition-opacity duration-500 ease-in"
                        />
                        <p className="text-gray-600 text-start">
                            Develop customized applications that perfectly align with your unique business processes, driving operational efficiency and empowering your teams to achieve their goals with intuitive and robust solutions.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Integration Services</h3>
                        <img
                            src='/odoo integration.jpg'
                            className='mt-12 lg:ml-16 transition-opacity duration-500 ease-in'
                            style={{ height: '250px' }}
                        />
                        <p className="text-gray-600 mt-16 text-start">
                            Effortlessly integrate your Odoo applications with your existing systems, ensuring a smooth flow of information and empowering your teams to make data-driven decisions that enhance productivity and streamline operations.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg flex flex-col transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4 mt-5 p-2 ">UI/UX Design</h3>
                        <div className="flex-grow mb-4 flex justify-center">
                            <img
                                src='/odoo ui ux.jpg'
                                className="transition-opacity duration-500 ease-in object-cover mt-8"
                                style={{ height: '220px', width: 'auto' }} // Adjusted for consistent sizing
                                alt="UI/UX Design"
                            />
                        </div>
                        <p className="text-gray-600 text-center flex-grow mt-4">
                            Elevate user experience through thoughtfully crafted, intuitive designs tailored for your applications, making every interaction not only efficient but also enjoyable for your users.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default OdooAppDev;
