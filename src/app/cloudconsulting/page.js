'use client';
import React, { useEffect, useState, useRef } from 'react';



import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { initializeAOS } from '../utils/Aos_setup';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const page = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);

    const [isFormVisible, setFormVisible] = useState(false);
    const modalRef = useRef(null);
    const handleCloseModal = () => {
        setFormVisible(false);
    };
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleCloseModal();
        }
    };
    useEffect(() => {
        if (isFormVisible) {
            window.addEventListener('click', handleClickOutside);
        }
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isFormVisible]);




    // Styles for the container
    const containerStyle = {
        backgroundColor: 'rgb(239 246 255)',
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    };

    return (
        <>
            {/*   <Navbar /> */}
            <div className="bg-white">


                <main>
                    <section className="text-center bg-blue-50 mb-8 py-12">
                        <h1 className="text-4xl mt-8 font-extrabold mb-6 text-black">Cloud Consulting Services</h1>
                        <p className="text-xl text-black max-w-5xl mx-auto">
                            Unlock the power of the cloud with our expert consulting services. We help businesses of all sizes leverage cloud technologies to optimize operations, reduce costs, and drive innovation.
                        </p>
                        <div className="flex justify-center mt-8">
                            <a className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
                                Explore Our Services
                            </a>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {/* Cloud Migration Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://raw.githubusercontent.com/Zafar9708/AnbruchIT/refs/heads/main/public/Assets/cloudConsultant/cloud-migration-min.webp" alt="Cloud Migration" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Migration</h3>
                            <p className="text-white mb-4">
                                Seamlessly transition your IT infrastructure to the cloud, optimizing performance and cost-efficiency.
                            </p>
                            <ul className="list-disc list-inside text-left text-white mb-4">
                                <li>Assessment and planning</li>
                                <li>Data migration</li>
                                <li>Cloud architecture design</li>
                            </ul>
                        </div>

                        {/* Cloud Optimization Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://github.com/Zafar9708/AnbruchIT/blob/main/public/Assets/cloudConsultant/cloud-cost-optimization-fb.png?raw=true" alt="Cloud Optimization" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Optimization</h3>
                            <p className="text-white mb-4">
                                Maximize the value of your cloud investment through performance tuning, cost optimization, and security best practices.
                            </p>
                            <ul className="list-disc list-inside text-white text-left mb-4">
                                <li>Cost analysis and reduction</li>
                                <li>Performance optimization</li>
                                <li>Security assessments</li>
                            </ul>
                        </div>

                        {/* Cloud Security Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://github.com/Zafar9708/AnbruchIT/blob/main/public/Assets/cloudConsultant/EC_Data_Security_Lock_750.jpg?raw=true" alt="Cloud Security" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Security</h3>
                            <p className="text-white mb-4">
                                Protect your sensitive data and ensure compliance with rigorous security standards.
                            </p>
                            <ul className="list-disc list-inside text-white text-left mb-4">
                                <li>Risk assessments</li>
                                <li>Security audits</li>
                                <li>Incident response planning</li>
                            </ul>
                        </div>

                        {/* Cloud Consulting Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://github.com/Zafar9708/AnbruchIT/blob/main/public/Assets/cloudConsultant/cloud_consulting.jpg?raw=true" alt="Cloud Consulting" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Consulting</h3>
                            <p className="text-white mb-4">
                                Get expert guidance on your cloud journey, from strategy development to implementation and ongoing support.
                            </p>
                            <ul className="list-disc list-inside text-white text-left mb-4">
                                <li>Cloud strategy development</li>
                                <li>Technology selection</li>
                                <li>Cloud migration planning</li>
                            </ul>
                        </div>

                        {/* Cloud DevOps Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://github.com/Zafar9708/AnbruchIT/blob/main/public/Assets/cloudConsultant/cloud_devops.jpg?raw=true" alt="Cloud DevOps" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud DevOps</h3>
                            <p className="text-white mb-4">
                                Integrate development and operations to streamline workflows, automate deployments, and improve efficiency.
                            </p>
                            <ul className="list-disc list-inside text-white text-left mb-4">
                                <li>CI/CD pipeline setup</li>
                                <li>Infrastructure as Code (IaC)</li>
                                <li>Monitoring and logging</li>
                            </ul>
                        </div>

                        {/* Cloud Analytics Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://github.com/Zafar9708/AnbruchIT/blob/main/public/Assets/cloudConsultant/cloud_Analaytics.jpg?raw=true" alt="Cloud Analytics" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Analytics</h3>
                            <p className="text-white mb-4">
                                Leverage data analytics to gain insights and drive business decisions in the cloud.
                            </p>
                            <ul className="list-disc list-inside text-white text-left mb-4">
                                <li>Data warehousing</li>
                                <li>Business intelligence</li>
                                <li>Predictive analytics</li>
                            </ul>
                        </div>
                    </div>
                </main>

                <section className="text-center mb-3 py-4 bg-gray-100">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-black">Our Cloud Consulting Offerings</h2>
                    <p className="text-md font-semibold text-black max-w-3xl mx-auto mb-6">
                        Explore our comprehensive range of services designed to elevate your cloud journey:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {/* Innovative Solutions Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Innovative Solutions</h3>
                            <p className="text-white mb-4">
                                Explore cutting-edge cloud solutions tailored to meet the unique needs of your business.
                            </p>
                        </div>

                        {/* Cost Management Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cost Management</h3>
                            <p className="text-white mb-4">
                                Optimize your cloud spending with strategic cost management and budgeting techniques.
                            </p>
                        </div>

                        {/* Compliance & Governance Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Compliance & Governance</h3>
                            <p className="text-white mb-4">
                                Ensure your cloud environment adheres to industry regulations and best practices.
                            </p>
                        </div>

                        {/* Multi-Cloud Strategy Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Multi-Cloud Strategy</h3>
                            <p className="text-white mb-4">
                                Leverage the benefits of multiple cloud providers to enhance flexibility and avoid vendor lock-in.
                            </p>
                        </div>

                        {/* Disaster Recovery Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Disaster Recovery</h3>
                            <p className="text-white mb-4">
                                Develop robust disaster recovery plans to ensure business continuity in the face of disruptions.
                            </p>
                        </div>

                        {/* Industry-Specific Solutions Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Industry-Specific Solutions</h3>
                            <p className="text-white mb-4">
                                Tailor cloud solutions that address the unique challenges and opportunities within your industry.
                            </p>
                        </div>
                    </div>
                </section>


                <div style={containerStyle} data-aos="zoom-in-up">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">Elevating Your Business with Cloud Solutions</h2>
                    <p className="text-xl mt-6 text-gray-600 mb-6">
                        Expert cloud consulting services designed to optimize your operations, enhance scalability.
                    </p>

                    <button
                    onClick={()=>setFormVisible(true)}

                        className="bg-blue-950 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-700"
                    >
                        Get In Touch
                    </button>

                </div>
                {
                 isFormVisible &&(

                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <ContactForm onClose={() => setFormVisible(false)} isCloseBtnVisible />
                    </div>
                </div>
                 )
                }

      



                {/* <Footer /> */}
            </div>
        </>
    );
};

export default page;