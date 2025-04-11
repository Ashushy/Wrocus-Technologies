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
