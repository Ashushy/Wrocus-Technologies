import React from 'react';
import Footer from './Footer';

const ClientProject = () => {
    return (
        <>
            <div
                className="p-6 mx-4 mt-6"
                style={{
                    backgroundImage: 'linear-gradient(90deg, #00DEFF 0%, #7141B1 100%)',
                    height: 'auto', // Adjusted height for better mobile view
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    flexDirection: 'column', // Stack items vertically on mobile
                }}
            >
                <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-4xl gap-5">
                    {[
                        { number: '105+', label: 'ACTIVE CLIENT' },
                        { number: '400+', label: 'PROJECT COMPLETE' },
                        { number: '250+', label: 'HAPPY CUSTOMERS' },
                        { number: '15+', label: 'TEAM ADVISORS' },
                    ].map((item) => (
                        <div className="flex flex-col items-center" key={item.label}>
                            <h2 className="text-3xl md:text-4xl font-bold">{item.number}</h2>
                            <p className="text-lg font-bold">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technology index */}
            <div className='flex flex-col md:flex-row p-6 gap-6'>
                <div className='flex-1 p-6'>
                    <p className='text-lg font-bold text-customPurplee'>// TECHNOLOGY INDEX</p>
                    <h2 className='text-2xl md:text-3xl font-extrabold mb-3'>Improve and Innovate</h2>
                    <h2 className='text-2xl md:text-3xl font-extrabold mb-3'>with the Tech Trends</h2>
                    <p className='text-gray-600'>
                        We hire and build your own remote dedicated development <br /> teams tailored to your specific needs.
                    </p>

                    {/* Technology Index Bar */}
                    <div className='mt-6'>
                        {[
                            { label: 'Mobile Development', percentage: '70%' },
                            { label: 'Web Development', percentage: '90%' },
                            { label: 'UI/UX Design', percentage: '60%' },
                            { label: 'Quality Assurance', percentage: '100%' },
                        ].map((tech) => (
                            <div className='mb-4' key={tech.label}>
                                <span className='font-semibold'>{tech.label}</span>
                                <div className='bg-gray-300 rounded-full h-4 w-full'>
                                    <div className='bg-custommBlue h-4 rounded-full' style={{ width: tech.percentage }} />
                                </div>
                                <span className='text-sm ml-2'>{tech.percentage}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex-1 p-6'>
                    <img src='slider/image2-about.png' className='w-full h-auto' alt="Tech Trends" />
                </div>
            </div>
           
        </>
    );
};

export default ClientProject;
