'use client';
import { initializeAOS } from '@/app/utils/Aos_setup';

import React from 'react';

const Healthcare = () => {
    return (
        <div>
            <section className="relative ml-12 mr-16 rounded-xl w-full h-[500px] overflow-hidden">
                <img
                    src="/Healthcare.jpg"
                    className="absolute inset-0 w-full h-full rounded-xl object-cover opacity-100"
                    alt="Healthcare"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                </div>
            </section>
            <section className="py-16" data-aos="zoom-in-up">
                <div className="container mx-auto px-6 text-center lg:text-left">
                    <div className="flex justify-center items-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-950 text-center">
                            WROCUS HEALTHCARE SOLUTION: END TO END HOSPITAL SOLUTION
                        </h2>
                    </div>
                    <div className="lg:flex items-center justify-center lg:justify-between gap-12">
                        <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8 lg:mb-0">
                            <div className="flex flex-col items-center p-2  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/hospital-icon/result.png"
                                    alt="Icon 1"
                                    className="w-16 h-16  mb-4"
                                />
                                <p className="font-semibold ml-4 text-gray-950">EHR/Doctor Portal</p>
                            </div>
                            <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/hospital-icon/mobile-app%20(2).png"
                                    alt="Icon 2"
                                    className="w-16 h-16 mb-4"
                                />
                                <p className="font-semibold text-gray-950">Patient App</p>
                            </div>
                            <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/hospital-icon/booking.png"
                                    alt="Icon 3"
                                    className="w-16 h-16 mb-4"
                                />
                                <p className="font-semibold ml-4 text-gray-950">Appointment Booking System</p>
                            </div>
                            <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/hospital-icon/administrator.png"
                                    alt="Icon 4"
                                    className="w-16 h-16 mb-4"
                                />
                                <p className="font-semibold text-gray-950">QMS/Admin Portal</p>
                            </div>
                            <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/hospital-icon/mobile%20(1).png"
                                    alt="Icon 4"
                                    className="w-16 h-16 mb-4"
                                />
                                <p className="font-semibold ml-4 text-gray-950">Referral Doctor App </p>
                            </div>
                            <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/4961/4961759.png"
                                    alt="Icon 4"
                                    className="w-16 h-16 mb-4"
                                />
                                <p className="font-semibold text-gray-950">24/7 Support</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2  mt-8 lg:mt-0">
                            <p className="text-lg font-normal text-gray-950 mb-8" data-aos="zoom-in-up">
                                Our business objective is to make the healthcare infrastructure more effective and efficient digitally.
                                As a part of our aim to empower hospitals, we have developed and deployed the most advanced and cost-effective
                                centralized patient information software, simplifying the task of storing and managing a large database of
                                patient records, medical history, and lab results electronically.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="container mx-auto px-6 text-center lg:text-left">
                    <div className="flex justify-center items-center mb-12" data-aos="zoom-in-up">
                        <h2 className="text-3xl font-bold text-gray-950">
                            HOSPITAL INDUSTRY PERSPECTIVE
                        </h2>
                    </div>
                    <div className="lg:flex items-center justify-between gap-12">
                        <div className="lg:w-1/2" data-aos="zoom-in-up">
                            <h3 className="text-2xl ml-40 font-bold text-gray-950 mb-8" data-aos="zoom-in-up">
                                OUR SOLUTION
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8" data-aos="zoom-in-up">
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/hospital-icon/analysis%20(2).png"
                                        alt="Icon 1"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Patient Journey Tracker</p>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/hospital-icon/system-integration.png"
                                        alt="Icon 2"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">HIS/EMR Integration</p>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/hospital-icon/chat.png"
                                        alt="Icon 3"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Real Time Messaging</p>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/hospital-icon/diet-plan.png"
                                        alt="Icon 3"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Predictive Care Plans</p>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/hospital-icon/surprise-box.png"
                                        alt="Icon 3"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Subscription Management</p>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/hospital-icon/basic-needs.png"
                                        alt="Icon 3"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Home Care Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 mt-8 lg:mt-0" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-bold ml-36 text-gray-950 mb-8">
                                YOUR BENEFITS
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-12">
                                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <p className="text-4xl font-bold mb-4 flex items-center">
                                        <span className="mr-2">95%</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                                            <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                                        </svg>
                                    </p>
                                    <p className="font-semibold text-gray-950">Patient Data Processing</p>
                                </div>
                                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <p className="text-4xl font-bold mb-4 flex items-center">
                                        <span className="mr-2">95%</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                                            <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                                        </svg>
                                    </p>
                                    <p className="font-semibold text-gray-950">Sales Productivity</p>
                                </div>
                                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <p className="text-4xl font-bold mb-4 flex items-center">
                                        <span className="mr-2">92%</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-red-800">
                                            <path d="M12 5v13M12 19l7-7M12 19l-7-7" />
                                        </svg>
                                    </p>
                                    <p className="font-semibold text-gray-950">Data Processing Errors</p>
                                </div>
                                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <p className="text-4xl font-bold mb-4 flex items-center">
                                        <span className=" mr-2">28%</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                                            <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                                        </svg>
                                    </p>
                                    <p className="font-semibold text-gray-950">Business Growth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16" data-aos="zoom-in-up">
                <div className="container mx-auto px-6 text-center lg:text-left">
                    <div className="flex justify-between bg-blue-300 mb-12">
                        <h2 className="text-xl font-semibold text-gray-950">MARKETING AND OUTREACH</h2>
                        <h2 className="text-xl font-semibold text-gray-950">PARTNER MANAGEMENT</h2>
                        <h2 className="text-xl font-semibold text-gray-950">PATIENT LIFECYCLE MANAGEMENT</h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-1/3 text-left">
                            <ul>
                                <li className="mb-4 font-semibold ml-14">Journey and Personalization</li>
                                <li className="mb-4 font-semibold ml-14">Measurement and Analytics</li>
                                <li className="mb-4 font-semibold ml-14">Brand Management</li>
                                <li className="mb-4 font-semibold ml-14">Market Segmentation</li>
                                <li className="mb-4 font-semibold ml-14">Template Management</li>
                                <li className="mb-4 font-semibold ml-14">Patient Lead Management</li>
                                <li className="mb-4 font-semibold ml-14">Personalized Marketing</li>
                                <li className="mb-4 font-semibold ml-14">Audience Management</li>
                                <li className="mb-4 font-semibold ml-14">Campaign Management</li>
                                <li className="mb-4 font-semibold ml-14">Patient Segmentation</li>
                            </ul>
                        </div>
                        <div className="w-1/3 text-left">
                            <ul>
                                <li className="mb-4 font-semibold ml-14">Partner Lead Management</li>
                                <li className="mb-4 font-semibold ml-14">Partner Account Management</li>
                                <li className="mb-4 font-semibold ml-14">Beat Planning</li>
                                <li className="mb-4 font-semibold ml-14">Activity Management</li>
                                <li className="mb-4 font-semibold ml-14">Payout Calculation</li>
                                <li className="mb-4 font-semibold ml-14">Partner Contract Management</li>
                                <li className="mb-4 font-semibold ml-14">HIS & ERP Integrations</li>
                                <li className="mb-4 font-semibold ml-14">Visit & Expense Management</li>
                                <li className="mb-4 font-semibold ml-14">Security & compliance management</li>
                                <li className="mb-4 font-semibold ml-14">Data Management</li>
                            </ul>
                        </div>
                        <div className="w-1/3 text-left">
                            <ul>
                                <li className="mb-4 font-semibold ml-14">Lead Management</li>
                                <li className="mb-4 font-semibold ml-14">Inquiry Management</li>
                                <li className="mb-4 font-semibold ml-14">Patient 360°</li>
                                <li className="mb-4 font-semibold ml-14">Post Discharge Survey</li>
                                <li className="mb-4 font-semibold ml-14">Home Service</li>
                                <li className="mb-4 font-semibold ml-14">Patient Registration</li>
                                <li className="mb-4 font-semibold ml-14">Patient Education</li>
                                <li className="mb-4 font-semibold ml-14">Care Management</li>
                                <li className="mb-4 font-semibold ml-14">Health Problem Management</li>
                                <li className="mb-4 font-semibold ml-14">Health Subscriptions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-6 text-center lg:text-left" data-aos="zoom-in-up">
                    <div className="flex justify-center items-center mb-12" data-aos="zoom-in-up">
                        <h2 className="text-3xl font-semibold text-gray-950">
                            WROCUS HEALTHCARE SOLUTION BENEFITS
                        </h2>
                    </div>
                    <div className="flex justify-between gap-8">
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Improved Patient Engagement</p>
                        </div>
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Enhanced Care Coordination</p>
                        </div>
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Continuous Improvement</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-8 mt-8">
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Scalability</p>
                        </div>
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Compliance and Security</p>
                        </div>
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Data Insights & Analytics</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-8 mt-8">
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Increased Patient Satisfaction</p>
                        </div>
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Enhanced Operational Efficiency</p>
                        </div>
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Increased Revenue Opportunities</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Healthcare;
