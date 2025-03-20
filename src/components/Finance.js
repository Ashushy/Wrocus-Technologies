'use client';
import { initializeAOS } from '@/app/utils/Aos_setup';
import React from 'react';

const Finance = () => {
    return (
        <div>
            {/* Image with Overlay Text */}
            <section className="relative ml-12 mr-16 rounded-xl w-full h-[500px] overflow-hidden" data-aos="zoom-in-up">
                <img
                    src="https://kloudrac.com/assets/img/finance/financial-banner.jpg"
                    className="absolute inset-0 w-full h-full rounded-xl object-cover opacity-90"
                    alt="Healthcare"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-25">
                </div>
            </section>


            {/* Kloudrac Healthcare Solution Section */}
            <section className="py-16 ">
                <div className="container mx-auto px-6 text-center lg:text-left">
                    {/* Flexbox for Centering Heading */}
                    <div className="flex justify-center items-center mb-12" data-aos="zoom-in-up">
                        <h2 className="text-3xl font-bold text-gray-950 text-center">
                            WROCUS: END TO END FINANCIAL SOLUTIONS
                        </h2>
                    </div>

                    {/* Flexbox Layout for Icons and Text */}
                    <div className="lg:flex items-center justify-center lg:justify-between gap-12">

                        {/* Left Side - Icons in small boxes */}
                        <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8 lg:mb-0">
                            <div className="flex flex-col items-center p-2  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/finance/real-estate.png"
                                    alt="Icon 1"
                                    className="w-16 h-16  mb-4"
                                />
                                <p className="font-semibold ml-4 text-gray-950">Home Loan</p>
                            </div>
                            <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/finance/assets.png"
                                    alt="Icon 2"
                                    className="w-16 h-16 mb-4"
                                />
                                <p className="font-semibold text-gray-950">Gold Loan</p>
                            </div>
                            <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/finance/money-bag.png"
                                    alt="Icon 3"
                                    className="w-16 h-16 mb-4"
                                />
                                <p className="font-semibold ml-4 text-gray-950">MSME Loan</p>
                            </div>
                            <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/finance/loan.png"
                                    alt="Icon 4"
                                    className="w-16 h-16 mb-4"
                                />
                                <p className="font-semibold text-gray-950">Education Loan</p>
                            </div>
                            <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/finance/personal.png"
                                    alt="Icon 4"
                                    className="w-16 h-16 mb-4"
                                />
                                <p className="font-semibold ml-4 text-gray-950">Personal Loan</p>
                            </div>
                            <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                <img
                                    src="https://kloudrac.com/assets/img/finance/car-loan.png"
                                    alt="Icon 4"
                                    className="w-16 h-16 mb-4"
                                />
                                <p className="font-semibold text-gray-950">Car Loan</p>
                            </div>
                        </div>

                        {/* Right Side - Text */}
                        <div className="lg:w-1/2  mt-8 lg:mt-0">
                            <p className="text-lg font-normal text-gray-950 mb-8" data-aos="zoom-in-up">
                                Our smart and custom-made business excellence solutions are designed to help financial services enhance budget management, 
                                pricing, and contract management. With our all-inclusive personalised CRM, finance companies receive tailored solutions that streamline client management, enhance data accuracy, automate compliance processes, improve customer engagement, and provide actionable insights for informed decision-making. Tasks like managing and optimising financial assets, providing strategic advice, and achieving financial goals are simple.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hospital Industry Perspective Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center lg:text-left">
                    {/* Heading */}
                    <div className="flex justify-center items-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-950" data-aos="zoom-in-up">
                            FINANCIAL SERVICES PERSPECTIVE
                        </h2>
                    </div>

                    {/* Flexbox Layout for "OUR SOLUTION" and "YOUR BENEFITS" */}
                    <div className="lg:flex items-center justify-between gap-12">
                        {/* Left Side - OUR SOLUTION */}
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl ml-40 font-bold text-gray-950 mb-8" data-aos="zoom-in-up">
                                OUR SOLUTION
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/finance/capital.png"
                                        alt="Icon 1"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Loan Origination System</p>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/finance/asset-management.png"
                                        alt="Icon 2"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Insurance Management</p>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/finance/pie-chart.png"
                                        alt="Icon 3"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Home Loan Lifecycle</p>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/finance/loan%20(1).png"
                                        alt="Icon 3"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Auto Loan Lifecycle</p>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/finance/loan%20(2).png"
                                        alt="Icon 3"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Personal Loan Application</p>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <img
                                        src="https://kloudrac.com/assets/img/finance/team%20(1).png"
                                        alt="Icon 3"
                                        className="w-16 h-16 mb-4"
                                    />
                                    <p className="font-semibold ml-4 text-gray-950">Partner Management</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - YOUR BENEFITS */}
                        <div className="lg:w-1/2 mt-8 lg:mt-0">
                            <h3 className="text-2xl font-bold ml-36 text-gray-950 mb-8" data-aos="zoom-in-up">
                                YOUR BENEFITS
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-12">
                                {/* Patient Data Processing */}
                                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <p className="text-4xl font-bold mb-4 flex items-center">
                                        <span className="mr-2">45%</span>
                                        {/* Green Up Arrow */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                                            <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                                        </svg>
                                    </p>
                                    <p className="font-semibold text-gray-950">Loan Application Processing</p>
                                </div>

                                {/* Sales Productivity */}
                                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <p className="text-4xl font-bold mb-4 flex items-center">
                                        <span className="mr-2">44%</span>
                                        {/* Green Up Arrow */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                                            <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                                        </svg>
                                    </p>
                                    <p className="font-semibold text-gray-950">Data Entry Accuracy</p>
                                </div>

                                {/* Data Processing Errors */}
                                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <p className="text-4xl font-bold mb-4 flex items-center">
                                        <span className="mr-2">95%</span>
                                        {/* Red Down Arrow */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-red-800">
                                            <path d="M12 5v13M12 19l7-7M12 19l-7-7" />
                                        </svg>
                                    </p>
                                    <p className="font-semibold text-gray-950">Data Processing Errors</p>
                                </div>

                                {/* Business Growth */}
                                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                                    <p className="text-4xl font-bold mb-4 flex items-center">
                                        <span className=" mr-2">28%</span>
                                        {/* Green Up Arrow */}
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

            {/* Marketing and Outreach, Partner Management, Patient Lifecycle Management */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center lg:text-left" data-aos="zoom-in-up">
                    {/* Three Headers in One Line */}
                    <div className="flex justify-between bg-blue-300 mb-12">
                        <h2 className="text-xl font-semibold text-gray-950">MARKETING & AWARNESS</h2>
                        <h2 className="text-xl font-semibold text-gray-950">SALES AND OPERATIONS</h2>
                        <h2 className="text-xl font-semibold text-gray-950">VERIFICATION AND DISBURSAL</h2>
                    </div>

                    {/* Content Under Each Header */}
                    <div className="flex justify-between">
                        <div className="w-1/3 text-left">
                            <ul>
                                <li className="mb-4 font-semibold ml-14">Social Media Engagement</li>
                                <li className="mb-4 font-semibold ml-14">EMI Calculator</li>
                                <li className="mb-4 font-semibold ml-14">Cross Sell Products</li>
                                <li className="mb-4 font-semibold ml-14">Email Verification</li>
                                <li className="mb-4 font-semibold ml-14">Campaign Management</li>
                                <li className="mb-4 font-semibold ml-14">Personalized Loan Offer</li>
                                <li className="mb-4 font-semibold ml-14">Eligibility calculator</li>
                                <li className="mb-4 font-semibold ml-14">Upsell Products</li>
                                <li className="mb-4 font-semibold ml-14">Mobile Verification</li>
                                <li className="mb-4 font-semibold ml-14">Offers Management</li>
                            </ul>
                        </div>

                        <div className="w-1/3 text-left">
                            <ul>
                                <li className="mb-4 font-semibold ml-14">Applicant Lead Management</li>
                                <li className="mb-4 font-semibold ml-14">Online Application Submission</li>
                                <li className="mb-4 font-semibold ml-14">Beat Planning</li>
                                <li className="mb-4 font-semibold ml-14">Activity Management</li>
                                <li className="mb-4 font-semibold ml-14">Mobile Friendly UI</li>
                                <li className="mb-4 font-semibold ml-14">TAT management</li>
                                <li className="mb-4 font-semibold ml-14">Credit Checks</li>
                                <li className="mb-4 font-semibold ml-14">Visit & Expense Management</li>
                                <li className="mb-4 font-semibold ml-14">Eligibility calculator</li>
                                <li className="mb-4 font-semibold ml-14">Data Management</li>

                            </ul>
                        </div>

                        <div className="w-1/3 text-left">
                            <ul>
                                <li className="mb-4 font-semibold ml-14">Document Management</li>
                                <li className="mb-4 font-semibold ml-14">eKyc Enabled</li>
                                <li className="mb-4 font-semibold ml-14">Applicant 360°</li>
                                <li className="mb-4 font-semibold ml-14">Repayment Plan</li>
                                <li className="mb-4 font-semibold ml-14">Automated underwriting</li>
                                <li className="mb-4 font-semibold ml-14">Document Verifications (OCR Enabled)</li>
                                <li className="mb-4 font-semibold ml-14">cKyc Enabled</li>
                                <li className="mb-4 font-semibold ml-14">Dynamic Disbursal Process</li>
                                <li className="mb-4 font-semibold ml-14">Fraud & AML Check</li>
                                <li className="mb-4 font-semibold ml-14">Attractive Analytics & Reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section: Kloudrac Healthcare Solution Benefits */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-6 text-center lg:text-left">
                    {/* Heading */}
                    <div className="flex justify-center items-center mb-12" data-aos="zoom-in-up">
                        <h2 className="text-3xl font-semibold text-gray-950">
                            WROCUS HEALTHCARE SOLUTION BENEFITS
                        </h2>
                    </div>

                    {/* Three Boxes in One Line */}
                    <div className="flex justify-between gap-8">
                        {/* Box 1 */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Faster Loan Processing</p>
                        </div>

                        {/* Box 2 */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Improved Efficiency</p>
                        </div>

                        {/* Box 3 */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Accurate Risk Assessment</p>
                        </div>
                    </div>

                    {/* Three Boxes in Next Line */}
                    <div className="flex justify-between gap-8 mt-8">
                        {/* Box 4 */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Reduced Default Rates</p>
                        </div>

                        {/* Box 5 */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Customizable Workflows</p>
                        </div>

                        {/* Box 6 */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Reduced Manual Errors</p>
                        </div>
                    </div>

                    {/* Three Boxes in Next Line */}
                    <div className="flex justify-between gap-8 mt-8">
                        {/* Box 7 */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Enhanced Reporting & Analytics</p>
                        </div>

                        {/* Box 8 */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
                            <p className="font-semibold text-lg text-gray-950 text-center">Mobile Accessibility</p>
                        </div>

                        {/* Box 9 */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up"> 
                            <p className="font-semibold text-lg text-gray-950 text-center">Auto Document Verification</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Finance;
