import React from 'react';

const OdooIntegration = () => {
    return (
        <>
            <section className='bg-gray-100 py-8' id='odoo-integration'>
               <div data-aos="zoom-in">
               <h2 className='text-3xl font-bold text-blue-800 text-center mt-12'>Odoo Integration Services</h2>
                <div className='container mx-auto flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 p-6 flex flex-col justify-center'>
                        <p className='text-gray-950 mb-8'>
                            At Wrocus Technology, we specialize in integrating Odoo with your existing systems to enhance functionality and improve business processes. Our team ensures a seamless connection between Odoo and third-party applications, making your operations more efficient.
                    </p>
                        <h3 className='text-2xl font-semibold mt-6 mb-2'>Our Integration Services Include:</h3>
                        <ul className="list-disc list-inside text-gray-950 mb-4 text-start">
                            <li className="mb-2">ERP and CRM integration for better data flow.</li>
                            <li className="mb-2">E-commerce platform integration for seamless online sales.</li>
                            <li className="mb-2">Payment gateway integration for secure transactions.</li>
                            <li className="mb-2">Custom API integrations tailored to your business needs.</li>
                            <li className="mb-2">Real-time data synchronization across platforms.</li>
                            <li className="mb-2">Ongoing support and maintenance for all integrations.</li>
                        </ul>
                        <p className='mt-4'>
                            Let us help you harness the full potential of Odoo through effective integrations that drive growth and efficiency in your business.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <img
                            src='/odoo integartion1.jpg'
                            alt='Odoo Integration'
                            className='object-cover w-full h-auto rounded-lg mt-12 max-w-lg' // Responsive image with max-width
                        />
                    </div>
                </div>
               </div>
            </section>
        </>
    );
}

export default OdooIntegration;
