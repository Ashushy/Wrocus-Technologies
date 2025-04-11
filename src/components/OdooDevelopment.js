import Link from 'next/link';
import React from 'react';

const OdooDevelopment = () => {
  const odooService = [
    {
      title: 'Odoo Consultant',
      description: 'Get expert advice on your ERP strategy to optimize processes and overcome challenges.',
      icon: "/odoo consultant.jpg",
      id: 'odoo-consulting'
    },
    {
      title: 'Odoo Implementation',
      description: 'Implement Odoo solutions tailored to your business needs with a focus on successful outcomes.',
      icon: "/odoo implementation.jpg",
      id: 'odoo-implementaion'
    },
    {
      title: 'Odoo Integration',
      description: 'Integrate Odoo with third-party applications for improved workflows and data consistency.',
      icon: "/odoo_integration_AI.jpg",
      id: 'odoo-integration'
    },
    {
      title: 'Odoo Migration',
      description: 'Seamlessly migrate your data to Odoo with minimal downtime and maximum efficiency.',
      icon: "/odoo migartion.jpg",
      id: 'odoo-migration'
    },
    {
      title: 'Odoo App Development',
      description: 'Create custom applications tailored to your specific needs with our expert development team.',
      icon: "/odoo app development.jpg",
      id: 'odoo-appdev'
    },
   
    {
      title: 'Odoo Customization',
      description: 'Tailor Odoo modules to fit your unique business processes and requirements effectively.',
      icon: "/odoo customization.jpg",
      id: 'odoo-customization'
    },
   
    {
      title: 'Odoo Module Development',
      description: 'Develop dynamic modules that enhance the functionality of your Odoo system for better scalability.',
      icon: "/odoo module development.jpg",
      id: 'odoo-module-development'
    },
    {
      title: 'Odoo Website Development',
      description: 'Design and develop websites that seamlessly integrate with your Odoo ERP for enhanced performance.',
      icon: "/odoo website development.jpg",
      id: 'odoo-website-dev'
    },
   
 
   
  ];


  return (
    <div className='bg-blue-50 py-4 p-5'>
      <div className='py-2'>
        <h2 className='text-2xl lg:text-4xl text-center py-1 p-4 font-bold text-black'>Odoo Development Services We Offer</h2>
        <p className='text-center mb-5 text-black'>Explore our diverse Odoo ERP solutions and development services to elevate your digital transformation.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 cursor-pointer'>
          {odooService.map((item, id) => (
            <div key={id} className='border border-gray-300 p-6 rounded-lg shadow-lg
             bg-white transition-transform duration-300 transform hover:scale-105 '>
           <Link href={`#${item.id}`}>
           <div className='flex items-center justify-center mb-3'>
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width="80"
                  height="80"
                  className='mr-3'
                />
                <h3 className='font-semibold text-xl text-gray-950'>{item.title}</h3>
              </div>
           </Link>
              <p className='mt-6 text-gray-700'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OdooDevelopment;
