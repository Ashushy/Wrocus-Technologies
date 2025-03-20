import React from 'react';

const QaTesting = () => {
    return (
        <div className='p-5 bg-gray-200 mt-5'>
            
            {/* Testing Section */}
            <div className='flex flex-col md:flex-row md:items-stretch justify-between shadow-lg rounded-lg bg-white overflow-hidden'>
                <div className='md:w-1/2'>
                    <img
                        src='https://www.testmonitor.com/hubfs/Blog%20%23126%20-%207%20SAP%20Testing%20Best%20Practices%20for%20Enhancing%20User%20Experience-min.png'
                        alt='QA Testing'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='md:w-1/2 p-6 flex flex-col justify-between'>
                    <div>
                        <p className='text-start text-4xl font-bold mb-2 text-blue-600'>Quality Assurance Testing</p>
                        <p className='text-start text-md mb-4'>
                            Our QA testing ensures that your applications are bug-free and user-friendly. We specialize in:
                        </p>
                        <ul className='list-disc list-inside text-start mb-4 text-md'>
                            <li>Manual and automated testing strategies</li>
                            <li>Functional, performance, and regression testing</li>
                            <li>Usability testing to ensure great user experience</li>
                            <li>Security testing to safeguard user data</li>
                            <li>Continuous integration and deployment support</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Methodologies Section */}
            <div className=' p-6 shadow-lg rounded-lg bg-white'>
                <p className='text-start text-3xl font-bold mb-4 text-blue-600'>Testing Methodologies</p>
                <p className='text-start text-md mb-4'>
                    We employ various methodologies to ensure comprehensive testing:
                </p>
                <ul className='list-disc list-inside text-start mb-4 text-md'>
                    <li>Agile Testing for rapid development cycles</li>
                    <li>Test-Driven Development (TDD) for early bug detection</li>
                    <li>Behavior-Driven Development (BDD) to enhance collaboration</li>
                </ul>
            </div>

           

            {/* Call to Action Section */}
            <div className='text-center mt-10'>
                <p className='text-lg mb-4'>Ensure your application is top-quality with our expert QA testing services.</p>
                <button className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>
                    Request a Free QA Assessment
                </button>
            </div>
        </div>
    );
}

export default QaTesting;
