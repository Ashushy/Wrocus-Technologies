import Link from 'next/link';
import React from 'react';

const OurLeadership = () => {
    return (
        <div className='bg-white mt-5 p-5 py-5'>
            <p className='text-center text-customPurplee font-bold mb-4'>GET TO KNOW OUR LEADERS</p>
            <h2 className='text-center font-extrabold text-4xl mb-3'>Our Leadership Team</h2>
            <p className='text-center   mb-2 text-gray-600 font-medium'>
                We help businesses elevate their value through custom software development
            </p>
            <p className='text-center text-gray-600 font-medium'>
                product design, QA and consultancy services.
            </p>
            <div className='flex flex-col md:flex-row justify-center gap-5 max-w-full mt-5'>
            <div className='flex flex-col items-center mt-6 w-full md:w-1/2 lg:w-1/3 p-6'>
                    <img
                        className='rounded-full  w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover'
                        src='slider/Aseemsir.jpg'
                        alt='Aseem Gupta'
                    />
                     <p className='text-center font-bold text-xl md:text-2xl mt-6'>Aseem Gupta</p>
                     <Link href="https://www.linkedin.com/in/aseemgupta04/" target='_blank'>Connect to linkedin</Link>
                     {/* <h2 className='text-center text-lg md:text-xl'>ASSOCIATE DIRECTOR</h2>  */}
                </div>
                <div className='flex flex-col items-center mt-6 w-full md:w-1/2 lg:w-1/3 '>
                    <img
                        className='rounded-full   w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[310px] lg:h-[310px] lg:mt-4 '
                        src='Atulsir.jpg'
                        alt='Atul Singhal'
                    />
                     <p className='text-center font-bold text-xl md:text-2xl mt-6'>Atul Singhal</p>
                     <Link href="https://www.linkedin.com/in/atulsinghal789/" target='_blank' >Connect to linkedin</Link>
                    {/* <h2 className='text-center text-lg md:text-xl'>DIRECTOR</h2> */} 
                </div>
               
            </div>
        </div>
    );
};

export default OurLeadership;
