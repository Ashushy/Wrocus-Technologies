'use client';
import React from 'react';

const Media = () => {
  return (
    <div>
      {/* Image with Overlay Text */}
      <section className="relative ml-12 mr-16 rounded-xl w-full h-[500px] overflow-hidden" data-aos="zoom-in-up">
        <img
          src="/Media.jpg"
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
              WROCUS:END TO END MEDIA SOLUTION
            </h2>
          </div>

          {/* Flexbox Layout for Icons and Text */}
          <div className="lg:flex items-center justify-center lg:justify-between gap-12">

            {/* Left Side - Icons in small boxes */}
            <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8 lg:mb-0">
              <div className="flex flex-col items-center p-2  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/media/flyer.png"
                  alt="Icon 1"
                  className="w-16 h-16  mb-4"
                />
                <p className="font-semibold ml-4 text-gray-950">Print Media</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/media/shopping-online.png"
                  alt="Icon 2"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold text-gray-950">Ad Sales</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/media/public-relations.png"
                  alt="Icon 3"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold ml-4 text-gray-950">Broadcast Media</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/media/education.png"
                  alt="Icon 4"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold text-gray-950">Publications</p>
              </div>
              <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                <img
                  src="https://kloudrac.com/assets/img/media/digital-marketing.png"
                  alt="Icon 4"
                  className="w-16 h-16 mb-4"
                />
                <p className="font-semibold ml-4 text-gray-950">Outdoor Media
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
              Our giant media and publication partners are reaping the numerous benefits of our custom-made software, designed to edit and produce high-quality content, images, and video. With our innovative publication tools and applications, they have streamlined their writing process, E-publication, and content management system.              </p>
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
              MEDIA PERSPECTIVE
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
                    src="https://kloudrac.com/assets/img/media/news%20(1).png"
                    alt="Icon 1"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Ad Sales for Print Media</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/media/b2b.png"
                    alt="Icon 2"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Subscription management B2B & B2C</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/media/attestation.png"
                    alt="Icon 3"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Multi level Approval Process</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/media/profile%20(1).png  "
                    alt="Icon 3"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Account onboarding</p>
                </div>
                <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
                  <img
                    src="https://kloudrac.com/assets/img/real-estate/customer-review%20(1).png"
                    alt="Icon 3"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Automated KYC process</p>
                </div>
                {/* <div className="flex flex-col items-center p-4  rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                  <img
                    src="https://kloudrac.com/assets/img/finance/team%20(1).png"
                    alt="Icon 3"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-semibold ml-4 text-gray-950">Partner Management</p>
                </div> */}
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
                    <span className="ml-4">93%</span>
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
                    <span className="ml-4">90%</span>
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
                    <span className=" ml-4">85%</span>
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
                    <span className=" ml-4">80%</span>
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
            <h2 className="text-xl ml-14 font-semibold text-gray-950">AD SALES</h2>
            <h2 className="text-xl ml-36 font-semibold text-gray-950">OUTDOOR MEDIA</h2>
            <h2 className="text-xl  font-semibold text-gray-950">SUBSCRIPTION MANAGEMENT</h2>
            <h2 className="text-xl mr-6 font-semibold text-gray-950">BROADCASTING MEDIA</h2>

          </div>


          {/* Content Under Each Header */}
          <div className="flex justify-between">
            <div className="w-1/3 text-left">

              <ul>
                <li className="mb-4 font-semibold ml-14">Agency Management</li>
                <li className="mb-4 font-semibold ml-14">Customer 360</li>
                <li className="mb-4 font-semibold ml-14">Product and Price management</li>
                <li className="mb-4 font-semibold ml-14">Release Order Management</li>
                <li className="mb-4 font-semibold ml-14">Proposal Management</li>
                <li className="mb-4 font-semibold ml-14">Lead Management</li>
                <li className="mb-4 font-semibold ml-14">Visit and Expense Management</li>
                <li className="mb-4 font-semibold ml-14">Multi City Ads</li>
                <li className="mb-4 font-semibold ml-14">Data management</li>
                <li className="mb-4 font-semibold ml-14">Project & Resource Management</li>
              </ul>
            </div>

            <div className="w-1/3 text-left">
             
              <ul>
                <li className="mb-4 font-semibold ml-14">Agency Management</li>
                <li className="mb-4 font-semibold ml-14">Vendor Management</li>
                <li className="mb-4 font-semibold ml-14">Product & Pricing</li>
                <li className="mb-4 font-semibold ml-14">Site Management</li>
                <li className="mb-4 font-semibold ml-14">Campaign Management</li>
                <li className="mb-4 font-semibold ml-14">Customer Management</li>
                <li className="mb-4 font-semibold ml-14">Inventory Management</li>
                <li className="mb-4 font-semibold ml-14">Offer Management</li>
                <li className="mb-4 font-semibold ml-14">Purchase Management</li>
                <li className="mb-4 font-semibold ml-14">Property & Location Management</li>

              </ul>
            </div>
            
            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Customer management</li>
                <li className="mb-4 font-semibold ml-14">Subscriber experience</li>
                <li className="mb-4 font-semibold ml-14">Analytics</li>
                <li className="mb-4 font-semibold ml-14">Case Management</li>
                <li className="mb-4 font-semibold ml-14">Inventory Man</li>
                <li className="mb-4 font-semibold ml-14">Billing and Payment</li>
                <li className="mb-4 font-semibold ml-14">ERP Integration</li>
                <li className="mb-4 font-semibold ml-14">Payment Gateway Integration</li>
                <li className="mb-4 font-semibold ml-14">Partner Management</li>
                <li className="mb-4 font-semibold ml-14">Customer Feedback</li>
              </ul>
            </div>

            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Account & Contact</li>
                <li className="mb-4 font-semibold ml-14">Opportunity Management</li>
                <li className="mb-4 font-semibold ml-14">Agreement Management</li>
                <li className="mb-4 font-semibold ml-14">Forecast</li>
                <li className="mb-4 font-semibold ml-14">Finance & Billing</li>
                <li className="mb-4 font-semibold ml-14">Sales enablement</li>
                <li className="mb-4 font-semibold ml-14">Rate Card Management</li>
                <li className="mb-4 font-semibold ml-14">Proposal Management</li>
                <li className="mb-4 font-semibold ml-14">Inventory Management</li>
                <li className="mb-4 font-semibold ml-14">Key Analytics</li>
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
              WROCUS MEDIA SOLUTION BENEFITS
            </h2>
          </div>

          {/* Three Boxes in One Line */}
          <div className="flex justify-between gap-8">
            {/* Box 1 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Improve Decision-Making</p>
            </div>

            {/* Box 2 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Enhance Operational Efficiency</p>
            </div>

            {/* Box 3 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">End to End Lead to Cash</p>
            </div>
          </div>

          {/* Three Boxes in Next Line */}
          <div className="flex justify-between gap-8 mt-8">
            {/* Box 4 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Connected workforce</p>
            </div>

            {/* Box 5 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Enhance tracking & Analysis</p>
            </div>

            {/* Box 6 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Better Account Management</p>
            </div>
          </div>

          {/* Three Boxes in Next Line */}
          <div className="flex justify-between gap-8 mt-8">
            {/* Box 7 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Compliance and Security</p>
            </div>

            {/* Box 8 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Account 360-degree view</p>
            </div>

            {/* Box 9 */}
            <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 h-[100px] w-full sm:w-1/3" data-aos="zoom-in-up">
              <p className="font-semibold text-lg text-gray-950 text-center">Return on Investment (ROI)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
