import React, { useState } from 'react';
import Footer from './Footer';
import ContactForm from './ContactForm';

const OdooImplementation = () => {
  const[isFormVisible,setFormVisible]=useState(false)
  return (
    <>
      <div >
        <section className="p-8 mt-2" id='odoo-implementaion' >

          <h1 className="text-center  text-2xl lg:text-4xl font-bold lg:mb-4" style={{ color: '#0056b3' }} data-aos="zoom-in">
            Odoo Implementation Services
          </h1>
          <p className="text-center text-gray-950  font-semibold">
            At Wrocus Technology, we specialize in providing comprehensive Odoo implementation services that align with your business needs.
          </p>
        </section>

        <section className="p-4 bg-white shadow-md" data-aos="zoom-in">
          <div className="flex flex-col md:flex-row justify-between p-6">
            <div className="mx-4 w-full md:w-1/2 p-3 lg:mt-8">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <ul className="list-disc list-inside text-gray-950 mb-6 text-start">
                <li className="mb-2">Complete Odoo setup and configuration.</li>
                <li className="mb-2">Customization of modules to fit your workflow.</li>
                <li className="mb-2">Data migration from existing systems.</li>
                <li className="mb-2">User training and support for a smooth transition.</li>
                <li className="mb-2">Implementation of automated workflows for efficiency.</li>
                <li className="mb-2">Integration with third-party applications and services.</li>
                <li className="mb-2">Performance optimization for existing Odoo installations.</li>
                <li className="mb-2">Ongoing maintenance and support to address evolving needs.</li>
              </ul>



            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src='https://www.ksolves.com/wp-content/uploads/2024/04/odoo-dev-banner.svg'
                alt='Odoo Development'
                className="object-contain w-full  rounded-lg mt-4" // Ensure the image is responsive
                style={{ height: '400px' }}
              />
            </div>
          </div>
          <section className='text-center p-8 bg-white   rounded-lg mt-6'>
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">Benefits of Choosing Odoo Implementation Services</h2>
            <p className="text-gray-950 mb-6 font-semibold">
              By choosing Wrocus Technology for your Odoo implementation, you can expect:
            </p>
            <div className='flex flex-col md:flex-row justify-center items-start'>
              <ul className="list-disc list-inside text-gray-950 text-start mb-4 md:mb-0 md:mr-8">
                <li className="mb-2">Expert guidance throughout the implementation process.</li>
                <li className="mb-2">Increased efficiency and productivity across your business operations.</li>
                <li className="mb-2">Post-implementation support to ensure ongoing success.</li>
                <li className="mb-2">Flexible solutions tailored to your unique business requirements.</li>
              </ul>

            </div>
          </section>


        </section>

        <section className="p-8 bg-white shadow-md">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Get Started Today!</h2>
            <p className="text-gray-600 mb-4">
              Ready to transform your business with Odoo? Contact us today to learn more about our implementation services!
            </p>
            <button
            onClick={()=>setFormVisible(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Contact Us
            </button>
          </div>

        </section>
        {
                    isFormVisible && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <ContactForm onClose={() => setFormVisible(false)} isCloseBtnVisible />
                            </div>
                        </div>
                    )
                }
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default OdooImplementation;
