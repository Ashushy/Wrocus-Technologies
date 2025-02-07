'use client';
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';

const OdooMigration = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    return (
        <>
            <section className="bg-gray-50 lg:p-8"  id='odoo-migration' >
               <div data-aos="zoom-in">
               <h1 className="text-center text-2xl lg:text-3xl font-bold text-blue-800 mb-2 mt-3">Odoo Migration Services</h1>
                <p className="text-center text-gray-950  text text-sm lg:text-md">
                    Seamlessly transition to the latest version of Odoo with our expert migration services.
                </p>
                <p className="text-center p-2 text-gray-950 mb-2 lg:mb-4 text-sm lg:text-xl">
                    At Wrocus Technology, we ensure a smooth migration process tailored to your business needs.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-4">Why Migrate to Odoo?</h2>
    <ul className="list-disc list-inside text-gray-600 text-left space-y-2">
        {[
            "Access to the latest features and improvements.",
            "Enhanced performance and security.",
            "Improved user experience with a modern interface.",
            "Better integration with third-party applications.",
            "Increased scalability to support business growth.",
            "Regular updates and maintenance to keep systems running smoothly."
        ].map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
</div>



<div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-3">Our Migration Process</h2>
    <ul className="list-disc list-inside text-gray-600 space-y-2 text-start">
        {[
            "Assessment of current system and data.",
            "Planning and strategy development for migration.",
            "Data backup and preparation for transfer.",
            "Execution of migration to the new Odoo version.",
            "Post-migration testing and validation.",
            "Training for users on the new system."
        ].map((item, index) => (
            <li key={index} className="">{item}</li>
        ))}
    </ul>
</div>


                </div>
               </div>
            </section>

            <section className="bg-white p-8" data-aos="flip-up">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Benefits of Choosing Us</h2>
                <p className="text-center text-gray-600 mb-4">
                    Our experienced team at Wrocus Technology is dedicated to providing:
                </p>
                <div className='flex flex-col md:flex-row justify-between lg:p-8'>
                    <div className='w-full md:w-1/2 mt-2'>
                        <ul className="list-disc list-inside text-gray-600 text-start">
                            <li className="mb-2">Tailored migration solutions to fit your unique business requirements.</li>
                            <li className="mb-2">Continuous support throughout the migration process.</li>
                            <li className="mb-2">Expertise in various Odoo modules and functionalities.</li>
                            <li className="mb-2">Ensuring data integrity and security during the transition.</li>
                            <li className="mb-2">Comprehensive training for your team on the new system.</li>
                            <li className="mb-2">Post-migration optimization for improved performance.</li>
                            <li className="mb-2">Customized reporting and analytics features to enhance decision-making.</li>
                            <li className="mb-2">Ongoing maintenance options to keep your system up-to-date.</li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <img
                            src='https://techspawn.com/wp-content/uploads/2021/09/Odoo-Migration-2.png'
                            alt="Odoo Migration"
                            className='mt-6 object-contain w-full h-auto max-w-sm' // Responsive image
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default OdooMigration;
