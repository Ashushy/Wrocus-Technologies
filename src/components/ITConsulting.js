import React from 'react';

const ITConsulting = () => {
    return (
        <div className='bg-gray-50'>
            <div className='p-5 bg-white rounded-lg shadow-md'>
                <h1 className='text-center text-4xl font-bold mb-6 text-blue-600'>IT Consulting Services</h1>

                <div className='flex flex-col md:flex-row justify-between items-start mb-2'>
                    <div className='md:w-1/2 md:pr-5'>
                        <section className='mb-2 p-5 mx-12'>
                            <h2 className='text-3xl font-bold text-blue-600'>Our Services</h2>
                            <ul className='list-disc list-inside mt-2'>
                                <li>Strategic IT Planning</li>
                                <li>Technology Assessments</li>
                                <li>Cloud Solutions and Migration</li>
                                <li>Cybersecurity Consulting</li>
                                <li>Digital Transformation Strategies</li>
                                <li>IT Infrastructure Optimization</li>
                            </ul>
                        </section>

                        <section className='mb-2 p-5 mx-12'>
                            <h2 className='text-3xl font-bold text-blue-600'>Our Approach</h2>
                            <p className='mt-2'>
                                We take a collaborative approach, working closely with your team to understand your unique challenges 
                                and tailor solutions that fit your business needs. Our focus is on delivering measurable results.
                            </p>
                        </section>

                      
                    </div>

                    <div className='md:w-1/2'>
                        <img
                            src='https://bloghaar.gumlet.io/wp-content/uploads/2023/02/5-Benefits-Of-Choosing-IT-Consulting-Services-img-2.jpg?compress=true&quality=80&w=732&dpr=2.6'
                            alt='IT Consulting'
                            className='w-full h-auto rounded-lg shadow-lg'
                        />
                    </div>
                </div>
                <div className='flex'>
                       <section className='mb-10 p-5 mx-12'>
                            <h2 className='text-3xl font-bold text-blue-600'>Client Testimonials</h2>
                            <blockquote className='border-l-4 border-blue-500 pl-4 italic mt-2'>
                                "The IT consulting team transformed our operations!" - Client Name
                            </blockquote>
                            <blockquote className='border-l-4 border-blue-500 pl-4 italic mt-4'>
                                "Their insights were invaluable to our success." - Another Client
                            </blockquote>
                            
                        </section>

                        <section className='mb-10 p-5 mx-12'>
                            <h2 className='text-3xl font-bold text-blue-600'>Case Studies</h2>
                            <p className='mt-2'>
                                Explore how we’ve helped businesses like yours achieve their IT goals:
                            </p>
                            <ul className='list-disc list-inside mt-2'>
                                <li><strong>Retail Company:</strong> Improved inventory management through cloud migration.</li>
                                <li><strong>Healthcare Provider:</strong> Enhanced data security and compliance measures.</li>
                                <li><strong>Financial Services:</strong> Streamlined operations with custom IT solutions.</li>
                            </ul>
                        </section>
                       </div>

             

                 
            </div>
        </div>
    );
};

export default ITConsulting;
