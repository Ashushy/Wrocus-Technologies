import React from 'react';

const MobileDevelopment = () => {
    return (
        <div className='p-5 bg-gray-50'>
            <p className='text-center text-4xl font-bold mb-8 text-blue-700'>Mobile App Development</p>

            {/* Android Section */}
            <div className='flex flex-col md:flex-row md:items-stretch justify-between mb-10 shadow-lg rounded-lg bg-white overflow-hidden'>
                <div className='md:w-1/2 p-6 flex flex-col justify-between'>
                    <div>
                        <p className='text-start text-4xl font-bold mb-2 text-blue-600'>Android</p>
                        <p className='text-start text-md mb-4'>
                            We develop high-quality Android applications tailored to meet your business needs and user expectations. Our services include:
                        </p>
                        <ul className='list-disc list-inside text-start mb-4 text-md'>
                            <li>Intuitive user interface design for better engagement</li>
                            <li>Seamless user experience that keeps users coming back</li>
                             
                        </ul>
                        <p className='font-semibold text-lg'>Technologies Used:</p>
                        <p className='text-md'>Java, Kotlin</p>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <img
                        src='https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuZHJvaWQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D'
                        alt='Android development'
                        className='w-full h-auto object-cover'
                        style={{height:'300px'}}
                    />
                </div>
            </div>

            {/* iOS Section */}
            <div className='flex flex-col md:flex-row md:items-stretch justify-between shadow-lg rounded-lg bg-white overflow-hidden'>
                <div className='md:w-1/2'>
                    <img
                        src='https://miro.medium.com/v2/resize:fit:800/1*uuWJdGWGTScaaEmEwbgdfg.png'
                        alt='iOS development'
                        className='w-full h-auto object-cover'
                    />
                </div>
                <div className='md:w-1/2 p-6 flex flex-col justify-between'>
                    <div>
                        <p className='text-start text-4xl font-bold mb-2 text-blue-600'>iOS</p>
                        <p className='text-start text-md mb-4'>
                            Our iOS app development services focus on creating sleek, high-performance applications that provide a great user experience. Our offerings include:
                        </p>
                        <ul className='list-disc list-inside text-start mb-4 text-md'>
                            <li>Crafting beautiful interfaces using Swift and Objective-C</li>
                            <li>Optimizing performance for smooth operation on Apple devices</li>
                             
                        </ul>
                        <p className='font-semibold text-lg'>Technologies Used:</p>
                        <p className='text-md'>Swift, Objective-C</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileDevelopment;
