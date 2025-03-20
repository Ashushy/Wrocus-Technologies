'use client';
import React from 'react';

const Logistics = () => {
  return (
    <div>
      {/* Image with Overlay Text */}
      <section className="relative ml-12 mr-16 rounded-xl w-full h-[500px] overflow-hidden" data-aos="zoom-in-up">
        <img
          src="/Logistics.jpg"
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
          <div className="flex justify-center items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-950 text-center" data-aos="zoom-in-up">
              WROCUS:END TO END LOGISTICS SOLUTION
            </h2>
          </div>

          {/* Flexbox Layout for Icons and Text */}
          <div className="lg:flex items-center justify-center lg:justify-between gap-12">

            {/* Left Side - Icons in small boxes */}
            <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8 lg:mb-0">
              <div className="flex flex-col items-center p-2  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/logistic/door-to-door.png"
                  alt="Icon 1"
                  className="w-16 h-16  mb-4"
                />
                <p className="font-semibold ml-4 text-gray-950">Courier Services</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/logistic/freight.png"
                  alt="Icon 2"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold text-gray-950">Freight Forwarders</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/logistic/warehouse.png"
                  alt="Icon 3"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold ml-4 text-gray-950">Warehousing</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/logistic/road.png"
                  alt="Icon 4"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold text-gray-950">Road Transport (Trucking)</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/logistic/truck.png"
                  alt="Icon 4"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold ml-4 text-gray-950">Container Shipping
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
              Wrocus is acting as a one-stop solution provider for logistic control and management services. The company's efforts to facilitate the movement and management of goods have been appreciated by all our logistic partners. All software from transportation to warehouse control and supply chain to freight management has optimised the overall process of logistics.
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
              LOGISTICS SOLUTION PERSPECTIVE
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
                    src="https://kloudrac.com/assets/img/logistic/dock.png"
                    alt="Icon 1"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Freight Management</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/logistic/business-trip.png"
                    alt="Icon 2"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Trip Management</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/logistic/courier.png"
                    alt="Icon 3"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Driver Master</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/logistic/service-management.png"
                    alt="Icon 3"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Vehicle Management</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/logistic/customer.png"
                    alt="Icon 3"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Customer KYC</p>
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
            <div className="lg:w-1/2  lg:mt-0">
              <h3 className="text-2xl mt-24 font-bold ml-36 text-gray-950 mb-8" data-aos="zoom-in-up">
                YOUR BENEFITS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                {/* Patient Data Processing */}
                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <p className="text-4xl font-bold mb-4 flex items-center">
                    <span className="ml-4">97%</span>
                    {/* Green Up Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                      <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                    </svg>
                  </p>
                  <p className="font-semibold text-gray-950">Accuracy in lead and support case capturing</p>
                </div>

                {/* Sales Productivity */}
                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <p className="text-4xl font-bold mb-4 flex items-center">
                    <span className="ml-4">88%</span>
                    {/* Green Up Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                      <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                    </svg>
                  </p>
                  <p className="font-semibold text-gray-950">faster in quotation and approval process</p>
                </div>

                {/* Data Processing Errors */}
                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <p className="text-4xl font-bold mb-4 flex items-center">
                    <span className=" ml-4">55%</span>
                    {/* Green Up Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                      <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                    </svg>
                  </p>
                  <p className="font-semibold text-gray-950">increase in Sales Productivity</p>
                </div>

                {/* Business Growth */}
                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <p className="text-4xl font-bold mb-4 flex items-center">
                    <span className=" ml-4">100%</span>
                    {/* Green Up Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                      <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                    </svg>
                  </p>
                  <p className="font-semibold text-gray-950">System driven collaboration</p>
                </div>
                <div className="flex flex-col items-center p-6  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <p className="text-4xl font-bold mb-4 flex items-center">
                    <span className=" ml-4">70%</span>
                    {/* Green Up Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16  text-green-800">
                      <path d="M12 19V6M12 6l7 7M12 6l-7 7" />
                    </svg>
                  </p>
                  <p className="font-semibold text-gray-950">
                  fast turnaround time</p>
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
            <h2 className="text-xl ml-14 font-semibold text-gray-950">LEAD TO BOOK</h2>
            <h2 className="text-xl font-semibold text-gray-950">OPERATION</h2>
            <h2 className="text-xl mr-48 font-semibold text-gray-950">POST DELIVERY</h2>
          </div>

          {/* Content Under Each Header */}
          <div className="flex justify-between">
            <div className="w-1/3 text-left">

              <ul>
                <li className="mb-4 font-semibold ml-14">Brand Awareness</li>
                <li className="mb-4 font-semibold ml-14">Client onboarding</li>
                <li className="mb-4 font-semibold ml-14">Client Engagement</li>
                <li className="mb-4 font-semibold ml-14">CCompliance</li>
                <li className="mb-4 font-semibold ml-14">Template Management</li>
                <li className="mb-4 font-semibold ml-14">Opportunity Management</li>
                <li className="mb-4 font-semibold ml-14">Contract Management</li>
                <li className="mb-4 font-semibold ml-14">Pricing</li>
                <li className="mb-4 font-semibold ml-14">Team Collaboration</li>
                <li className="mb-4 font-semibold ml-14">Client visit plan</li>
              </ul>
            </div>

            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Order/Load Fulfilment</li>
                <li className="mb-4 font-semibold ml-14">Fright Plan</li>
                <li className="mb-4 font-semibold ml-14">Dispatch</li>
                <li className="mb-4 font-semibold ml-14">Carrier management</li>
                <li className="mb-4 font-semibold ml-14">Order Punching</li>
                <li className="mb-4 font-semibold ml-14">Invoice & Payment</li>
                <li className="mb-4 font-semibold ml-14">HIS & ERP Integrations</li>
                <li className="mb-4 font-semibold ml-14">Visit & Expense Management</li>
                <li className="mb-4 font-semibold ml-14">Security and compliance management</li>
                <li className="mb-4 font-semibold ml-14">Performance Management</li>

              </ul>
            </div>
            
            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Customer management & Feedback</li>
                <li className="mb-4 font-semibold ml-14">Quote to Cash</li>
                <li className="mb-4 font-semibold ml-14">Logistic Insight</li>
                <li className="mb-4 font-semibold ml-14">Fleet Management</li>
                <li className="mb-4 font-semibold ml-14">Scheduling</li>
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
              LOGISTICS SOLUTION BENEFITS
            </h2>
          </div>

          {/* Three Boxes in One Line */}
          <div className="flex justify-between gap-8">
            {/* Box 1 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Centralized Customer Information</p>
            </div>

            {/* Box 2 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Enhance Operational Efficiency</p>
            </div>

            {/* Box 3 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Improved Order & Shipment Tracking</p>
            </div>
          </div>

          {/* Three Boxes in Next Line */}
          <div className="flex justify-between gap-8 mt-8">
            {/* Box 4 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Compliance and Security</p>
            </div>

            {/* Box 5 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Efficient handling of Customer Complaints</p>
            </div>

            {/* Box 6 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Customer Retention Strategies</p>
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

export default Logistics;
