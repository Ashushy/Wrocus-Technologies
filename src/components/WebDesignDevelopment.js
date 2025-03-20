import React from 'react';

const WebDesignDevelopment = () => {
    return (
        <div>
            {/* Web Design Section */}
            <section className='bg-gray-100 py-4'>
                <p className='text-center text-3xl font-bold text-blue-600 mb-5'>Web Design & Development</p>

                <section className="bg-gray-100">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* <h2 className="text-xl text-start text-blue-500">Our Design Services</h2> */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1: UI Design */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
                                <img
                                    src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219162542/Become-UI-Designer-in-2023.png"
                                    alt="UI Design"
                                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">UI Design</h3>
                                <p className="text-gray-600 flex-grow">
                                    Our UI design services focus on creating visually appealing interfaces that enhance user interaction and engagement.
                                </p>
                            </div>

                            {/* Card 2: UX Design */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
                                <img
                                    src="https://www.iotworlds.com/wp-content/uploads/2023/01/iotworlds-UI-UX-designer.jpg"
                                    alt="UX Design"
                                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">UX Design</h3>
                                <p className="text-gray-600 flex-grow">
                                    We prioritize user experience by optimizing usability, accessibility, and overall satisfaction in every design.
                                </p>
                            </div>

                            {/* Card 3: Responsive Design */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
                                <img
                                    src="https://softvity.com/wp-content/uploads/2022/04/Responsive_Website_Design_softvity.jpg"
                                    alt="Responsive Design"
                                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                                <p className="text-gray-600 flex-grow">
                                    Our responsive designs ensure your website looks great and functions well on all devices, providing a seamless experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Development Section */}
                <section className=' py-8'>
                    <div className="max-w-6xl mx-auto text-center">
                        {/* <h2 className="text-xl text-start  mb-2 text-blue-500">Our Development Services</h2> */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1: Front-End Development */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
                                <img
                                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/337518421/original/722b7f631d019aa4c74f4b19131b76a0f3fad3eb/be-your-front-end-developer-a21d.png"
                                    alt="Front-End Development"
                                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Front-End Development</h3>
                                <p className="text-gray-600 flex-grow">
                                    We create visually stunning and interactive front-end interfaces using the latest technologies like HTML, CSS, JavaScript, React JS, Angular, and Vue JS.
                                </p>
                            </div>

                            {/* Card 2: Back-End Development */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
                                <img
                                    src="https://assets.roadmap.sh/guest/6529303b545cb53d4aa730ca_1709058292005.png"
                                    alt="Back-End Development"
                                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Back-End Development</h3>
                                <p className="text-gray-600 flex-grow">
                                    Our back-end development services ensure robust server-side logic and database management for seamless application performance.
                                </p>
                            </div>

                            {/* Card 3: Full-Stack Development */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
                                <img
                                    src="https://miro.medium.com/v2/resize:fit:605/1*vTLOUrJWoo4Kzj7ly8o0jA.png"
                                    alt="Full-Stack Development"
                                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
                                <p className="text-gray-600 flex-grow">
                                    Our full-stack development team specializes in both front-end and back-end technologies, delivering comprehensive solutions tailored to your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default WebDesignDevelopment;
