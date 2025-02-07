'use client'
import Navbar from '@/components/Navbar'
import OdooAppdev from '@/components/OdooAppdev'
import OdooConsulting from '@/components/OdooConsulting'
import OdooCustomization from '@/components/OdooCustomization'
import OdooDevelopment from '@/components/OdooDevelopment'
import OdooImplementation from '@/components/OdooImplementation'
import OdooIntegration from '@/components/OdooIntegration'
import OdooMigration from '@/components/OdooMigration'
import OdooModuleDevelopment from '@/components/OdooModuleDevelopment'
import OdooWebsiteDev from '@/components/OdooWebsiteDev'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { initializeAOS } from '../utils/Aos_setup'


const page = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
  }, []);
  return (
    <>
        {/* <Navbar /> */}

        <section>
          <div
            className='flex justify-center p-4 py-4 relative'
            style={{
              backgroundImage: 'url(/bg-pheader.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100px'
            }}
          >
            <ul className="absolute flex flex-col items-center md:flex-row bottom-3 left-0 w-full text-white p-4 sm:overflow-y-auto lg:overflow-x-auto whitespace-nowrap space-x-0 md:space-x-4 space-y-2 md:space-y-0 hide-scrollbar">
              <li className='items-center' ><Link href="#odoo-consulting" className="block px-4 py-2    hover:bg-opacity-75 transition">Odoo Consultant</Link></li>
              <li><Link href="#odoo-implementaion" className="block px-4 py-2 hover:bg-opacity-75 transition">Odoo Implementation</Link></li>
              <li><Link href="#odoo-integration" className="block px-4 py-2 hover:bg-opacity-75 transition">Odoo Integration</Link></li>
              <li><Link href="#odoo-migration" className="block px-4 py-2 hover:bg-opacity-75 transition">Odoo Migration</Link></li>
              <li><Link href="#odoo-appdev" className="block px-4 py-2 hover:bg-opacity-75 transition">Odoo App Development</Link></li>
              <li><Link href="#odoo-module-development" className="block px-4 py-2 hover:bg-opacity-75 transition">Odoo Module Development</Link></li>
              <li><Link href="#odoo-customization" className="block px-4 py-2 hover:bg-opacity-75 transition">Odoo Customization</Link></li>
              <li><Link href="#odoo-website-dev" className="block px-4 py-2 hover:bg-opacity-75 transition">Odoo Website Development</Link></li>
            </ul>
          </div>
        </section>

        <style jsx>{`
    .hide-scrollbar::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    
    .hide-scrollbar {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    @media (max-width: 768px) {
      .flex {
        flex-direction: row; /* Ensure horizontal layout on mobile */
        overflow-x: auto; /* Allow horizontal scrolling */
        white-space: nowrap; /* Prevent wrapping */
      }
    }
  `}</style>


      <section data-aos="flip-up">
        <OdooDevelopment />
      </section>

      {/* <section className="mb-2 py-6 flex flex-col md:flex-row items-center bg-gray-50" data-aos="zoom-in-up">
  <div className="hidden md:block md:w-1/2 p-4 flex justify-center">
    <img
      src="https://media.licdn.com/dms/image/D5612AQFvVi1RQi2s4A/article-cover_image-shrink_720_1280/0/1683108858545?e=2147483647&v=beta&t=vuDPF_SxmJR5QSAwLD1GpECwLw3FYiDw1z_eK1CrRBc"
      alt="Development Process"
      className="rounded-lg"
      style={{ height: 'auto', maxWidth: '100%', maxHeight: '350px' }}
    />
  </div>
  <div className="md:w-1/2 p-4">
    <h2 className="text-2xl lg:text-3xl font-bold text-gray-950 mb-4 text-center md:text-left">Our Development Process</h2>
    <p className="mb-4 text-md lg:text-lg text-gray-950 text-center md:text-left">
      Our development process is designed to deliver high-quality, custom solutions that align perfectly with your business objectives.
    </p>
    <ol className="list-decimal list-inside space-y-2 text-sm">
      {[
        "Consultation: We begin by understanding your business needs and objectives.",
        "Planning: We create a roadmap detailing features, timelines, and milestones.",
        "Development: Our team builds the application, ensuring adherence to best practices and industry standards.",
        "Testing: Rigorous testing is conducted to identify and fix any issues before launch.",
        "Deployment: We assist with the smooth deployment of your custom app.",
        "Training & Support: We provide training for your team and ongoing support to maximize your app's effectiveness."
      ].map((step, index) => (
        <li key={index}><strong>{step.split(':')[0]}</strong> {step.split(':')[1]}</li>
      ))}
    </ol>
  </div>
</section> */}

      <style jsx>{`
  @media (max-width: 768px) {
    section {
      flex-direction: column; /* Stack elements on smaller screens */
      text-align: center; /* Center text on small screens */
    }
    h2 {
      margin-bottom: 1rem; /* Adjust margin for better spacing */
    }
  }
`}</style>


      <section style={{ width: '100%', overflowX: 'hidden' }} >
        <OdooConsulting />
      </section>
      <section style={{ width: '100%', overflowX: 'hidden' }} >
        <OdooWebsiteDev />
      </section>

      <section style={{ width: '100%', overflowX: 'hidden' }} >
        <OdooCustomization />
      </section>
      <section style={{ width: '100%', overflowX: 'hidden' }} >
        <OdooAppdev />
      </section>
      <section style={{ width: '100%', overflowX: 'hidden' }}   >
        <OdooModuleDevelopment />
      </section>
      <section style={{ width: '100%', overflowX: 'hidden' }}>
        <OdooMigration />
      </section>
      <section style={{ width: '100%', overflowX: 'hidden' }}>
        <OdooIntegration />
      </section>
      <section style={{ width: '100%', overflowX: 'hidden' }}>
        <OdooImplementation />
      </section>


    </>
  )
}



export default page;
