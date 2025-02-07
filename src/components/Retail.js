'use client';
import React from 'react';

const Retail = () => {
  return (
    <div>
      <section className="relative ml-12 mr-16 rounded-xl w-full h-[500px] overflow-hidden" data-aos="zoom-in-up">
        <img
          src="/Retail.jpg"
          className="absolute inset-0 w-full h-full rounded-xl object-cover opacity-90"
          alt="Healthcare"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-25">
        </div>
      </section>


      <section className="py-16 ">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="flex justify-center items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-950 text-center" data-aos="zoom-in-up">
              RETAIL SOLUTION MODULES
            </h2>
          </div>

          <div className="lg:flex items-center justify-center lg:justify-between gap-12">

            <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8 lg:mb-0">
              <div className="flex flex-col items-center p-2  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/retail/meeting.png"
                  alt="Icon 1"
                  className="w-16 h-16  mb-4"
                />
                <p className="font-semibold ml-4 text-gray-950">Dealer Appointment</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/retail/inventory.png"
                  alt="Icon 2"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold text-gray-950">Inventory Management</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/retail/fulfillment.png"
                  alt="Icon 3"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold ml-4 text-gray-950">Order Taking FSU</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/retail/meeting%20(1).png"
                  alt="Icon 4"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold text-gray-950">Collection Management</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/retail/order.png"
                  alt="Icon 4"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold ml-4 text-gray-950">Primary/
                  Secondary Order
                  Management
                </p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/retail/customer-service%20(1).png"
                  alt="Icon 4"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold text-gray-950">Customer Support</p>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="lg:w-1/2  mt-8 lg:mt-0">
              <p className="text-lg font-normal text-gray-950 mb-8" data-aos="zoom-in-up">
                Wrocus's smart business empowering solutions centre around helping the retail industry to optimise inventory management, enhance customer experience, streamline supply chain operations, stay competitive, secure data, and integrate advanced technologies for improved efficiency and growth. We aim to deliver a consistent and personalised shopping experience across various channels, including online and in-store with enhanced data security and wastage control.
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
                    src="https://kloudrac.com/assets/img/retail/distribution-center.png"
                    alt="Icon 1"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Distributor Management System</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/retail/application%20(2).png"
                    alt="Icon 2"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Field Sales App</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/retail/outlets.png"
                    alt="Icon 3"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Retailer Management</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/retail/customer-relationship.png"
                    alt="Icon 3"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Loyalty Management</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/retail/supermaket.png"
                    alt="Icon 3"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Store 360 Management</p>
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
                    <span className="mr-2">95%</span>
                    {/* Green Up Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                      <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                    </svg>
                  </p>
                  <p className="font-semibold text-gray-950">Customer Data Processing</p>
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
                  <p className="font-semibold text-gray-950">Sales Productivity</p>
                </div>

                {/* Data Processing Errors */}
                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <p className="text-4xl font-bold mb-4 flex items-center" >
                    <span className="mr-2">92%</span>
                    {/* Red Down Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-red-800">
                      <path d="M12 5v13M12 19l7-7M12 19l-7-7" />
                    </svg>
                  </p>
                  <p className="font-semibold text-gray-950">Data Processing Errors</p>
                </div>

                {/* Business Growth */}
                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <p className="text-4xl font-bold mb-4 flex items-center" >
                    <span className=" mr-2">90%</span>
                    {/* Green Up Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                      <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                    </svg>
                  </p>
                  <p className="font-semibold text-gray-950">Store Handling</p>
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
            <h2 className="text-xl font-semibold text-gray-950">DEALER MANAGEMENT</h2>
            <h2 className="text-xl font-semibold text-gray-950">FIELD SALES APP(SF1)</h2>
            <h2 className="text-xl font-semibold text-gray-950">LOYALITY APPLICATION</h2>
          </div>

          {/* Content Under Each Header */}
          <div className="flex justify-between">
            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">360 View of Account</li>
                <li className="mb-4 font-semibold ml-14">Primary Order</li>
                <li className="mb-4 font-semibold ml-14">Secondary Orders</li>
                <li className="mb-4 font-semibold ml-14">Case Management</li>
                <li className="mb-4 font-semibold ml-14">Campaign Management</li>
                <li className="mb-4 font-semibold ml-14">Scheme and Promotions</li>
                <li className="mb-4 font-semibold ml-14">Inventory Management</li>
                <li className="mb-4 font-semibold ml-14">Loyalty Management</li>
                <li className="mb-4 font-semibold ml-14">New Launch</li>
                <li className="mb-4 font-semibold ml-14">Report and Dashboards</li>
              </ul>
            </div>

            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Beats Planning</li>
                <li className="mb-4 font-semibold ml-14">Store Planning (360)</li>
                <li className="mb-4 font-semibold ml-14">Geo Tagging</li>
                <li className="mb-4 font-semibold ml-14">SKU Recommendation</li>
                <li className="mb-4 font-semibold ml-14">Order Punching</li>
                <li className="mb-4 font-semibold ml-14">Trade Promotions</li>
                <li className="mb-4 font-semibold ml-14">Visit & Expense Management</li>
                <li className="mb-4 font-semibold ml-14">Store Survey</li>
                <li className="mb-4 font-semibold ml-14">Inventory Management</li>
                <li className="mb-4 font-semibold ml-14">Loyalty Management</li>

              </ul>
            </div>

            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Registration</li>
                <li className="mb-4 font-semibold ml-14">eKyc Enabled</li>
                <li className="mb-4 font-semibold ml-14">Store 360°</li>
                <li className="mb-4 font-semibold ml-14">View Reward Points</li>
                <li className="mb-4 font-semibold ml-14">Redeem Reward Points</li>
                <li className="mb-4 font-semibold ml-14">Refer an Influencer</li>
                <li className="mb-4 font-semibold ml-14">UPI /Wallet Integration</li>
                <li className="mb-4 font-semibold ml-14">Account Deactivation</li>
                <li className="mb-4 font-semibold ml-14">Help and Support</li>
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
          <div className="flex justify-center items-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-950" data-aos="zoom-in-up">
              WHY WROCUS FOR RETAIL
            </h2>
          </div>

          {/* Three Boxes in One Line */}
          <div className="flex justify-between gap-8">
            {/* Box 1 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Improved Customer Engagement</p>
            </div>

            {/* Box 2 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Enhanced Customer Coordination</p>
            </div>

            {/* Box 3 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Continuous Improvement</p>
            </div>
          </div>

          {/* Three Boxes in Next Line */}
          <div className="flex justify-between gap-8 mt-8">
            {/* Box 4 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Scalability</p>
            </div>

            {/* Box 5 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Compliance and Security</p>
            </div>

            {/* Box 6 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Data Insights & Analytics</p>
            </div>
          </div>

          {/* Three Boxes in Next Line */}
          <div className="flex justify-between gap-8 mt-8">
            {/* Box 7 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Increased Customer Satisfaction</p>
            </div>

            {/* Box 8 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Enhanced Operational Efficiency</p>
            </div>

            {/* Box 9 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Increased Revenue Opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retail;
