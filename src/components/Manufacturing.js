'use client';
import React from 'react';

const Manufacturing = () => {
  return (
    <div>
      {/* Image with Overlay Text */}
      <section className="relative ml-12 mr-16 rounded-xl w-full h-[500px] overflow-hidden" data-aos="zoom-in-up">
        <img
          src="https://kloudrac.com/assets/img/manu/banner.jpg"
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
              MANUFACTURE PERSPECTIVE
            </h2>
          </div>

          {/* Flexbox Layout for Icons and Text */}
          <div className="flex flex-wrap justify-center gap-8">

            {/* Box 1 */}
            <div className="flex flex-col items-center p-6 h-[250px] w-[250px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
              <img
                src="https://kloudrac.com/assets/img/manu/analytics%20(1).png"
                alt="Icon 1"
                className="w-24 h-24 mb-6"
              />
              <p className="font-semibold text-gray-950 text-lg text-center">Market to lead</p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center p-6 h-[250px] w-[250px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
              <img
                src="https://kloudrac.com/assets/img/manu/leads.png"
                alt="Icon 2"
                className="w-24 h-24 mb-6"
              />
              <p className="font-semibold text-gray-950 text-lg text-center">Lead to prospect</p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center p-6 h-[250px] w-[250px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up"> 
              <img
                src="https://kloudrac.com/assets/img/manu/staff-management.png"
                alt="Icon 3"
                className="w-24 h-24 mb-6"
              />
              <p className="font-semibold text-gray-950 text-lg text-center">Prospect to contract</p>
            </div>

            {/* Box 4 */}
            <div className="flex flex-col items-center p-6 h-[250px] w-[250px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
              <img
                src="https://kloudrac.com/assets/img/manu/order-fulfillment.png"
                alt="Icon 4"
                className="w-24 h-24 mb-6"
              />
              <p className="font-semibold text-gray-950 text-lg text-center">Order to asset</p>
            </div>

            {/* Box 5 */}
            <div className="flex flex-col items-center p-6 h-[250px] w-[250px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
              <img
                src="https://kloudrac.com/assets/img/manu/asset-management%20(1).png"
                alt="Icon 5"
                className="w-24 h-24 mb-6"
              />
              <p className="font-semibold text-gray-950 text-lg text-center">Asset to service</p>
            </div>

            {/* Box 6 */}
            <div className="flex flex-col items-center p-6 h-[250px] w-[250px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="zoom-in-up">
              <img
                src="https://kloudrac.com/assets/img/manu/recovery.png"
                alt="Icon 6"
                className="w-24 h-24 mb-6"
              />
              <p className="font-semibold text-gray-950 text-lg text-center">Service to renew</p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6 text-center lg:text-left" data-aos="zoom-in-up">
          {/* Three Headers in One Line */}
          <div className="flex justify-between bg-blue-300 mb-4">
            <h2 className="text-xl ml-16 font-semibold text-gray-950">MARKET TO LEAD</h2>
            <h2 className="text-xl font-semibold text-gray-950">LEAD TO PROSPECT</h2>
            <h2 className="text-xl mr-24 font-semibold text-gray-950">PROSPECT TO CONTRACT</h2>
          </div>

          {/* Content Under Each Header */}
          <div className="flex justify-between">
            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Customer Intelligence</li>
                <li className="mb-4 font-semibold ml-14">Segment Management</li>
                <li className="mb-4 font-semibold ml-14">Campaign Management</li>
                <li className="mb-4 font-semibold ml-14">Offers & Journeys</li>
              </ul>
            </div>

            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Lead gen, Qualification, Distribution, Nurture</li>
                <li className="mb-4 font-semibold ml-14">Opportunity Management</li>
                <li className="mb-4 font-semibold ml-14">Account onboading/ Planning/Channel</li>
                <li className="mb-4 font-semibold ml-14">Sales Performance Management</li>
              </ul>
            </div>

            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Contract Management</li>
                <li className="mb-4 font-semibold ml-14">Price Management</li>
                <li className="mb-4 font-semibold ml-14">Quote/Config Management</li>
                <li className="mb-4 font-semibold ml-14">Sales Agreement/Forecasting</li>
               
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 text-center lg:text-left" data-aos="zoom-in-up">
          {/* Three Headers in One Line */}
          <div className="flex justify-between bg-blue-300 mb-4">
            <h2 className="text-xl font-semibold ml-14 text-gray-950">ORDER TO ASSEST</h2>
            <h2 className="text-xl font-semibold mr-0 text-gray-950">ASSEST TO SERVICE</h2>
            <h2 className="text-xl font-semibold mr-40 text-gray-950">SERVICE TO RENEW</h2>
          </div>

          {/* Content Under Each Header */}
          <div className="flex justify-between">
            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Order Orchestration</li>
                <li className="mb-4 font-semibold ml-14">Fulfillment Management</li>
                <li className="mb-4 font-semibold ml-14">Rebate Execution/Billing</li>
                <li className="mb-4 font-semibold ml-14">Asset Management</li>
              </ul>
            </div>

            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Customer Service Management</li>
                <li className="mb-4 font-semibold ml-14">Service Contract</li>
                <li className="mb-4 font-semibold ml-14">Warranty & Quality Management</li>
                <li className="mb-4 font-semibold ml-14">Predictive/Prescriptive Service</li>
              </ul>
            </div>

            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Field Service Management</li>
                <li className="mb-4 font-semibold ml-14">Service Parts Management</li>
                <li className="mb-4 font-semibold ml-14">Depot repair Management</li>
                <li className="mb-4 font-semibold ml-14">Billing</li>
               
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 text-center lg:text-left" data-aos="zoom-in-up">
        <h2 className="text-3xl font-bold text-gray-950 text-center">
              WROCUS CUSTOM SOLUTION ASSET
            </h2>
          {/* Three Headers in One Line */}
          <div className="flex justify-between bg-blue-300 mt-12 mb-4">
            <h2 className="text-xl font-semibold ml-14 text-gray-950">DEALER MANAGEMENT SYSTEM (ORG LEVEL)</h2>
            <h2 className="text-xl font-semibold mr-0 text-gray-950">DEALER PORTAL (COMMUNITY CLOUD)</h2>
            <h2 className="text-xl font-semibold  text-gray-950">DEALER INCENTIVE MANAGEMENT SYSTEM</h2>
          </div>

          {/* Content Under Each Header */}
          <div className="flex justify-between">
            <div className="w-1/3 text-left">
           
              <ul>
                <li className="mb-4 font-semibold ml-14">Lead ( New Dealer )</li>
                <li className="mb-4 font-semibold ml-14">Dealer qualification</li>
                <li className="mb-4 font-semibold ml-14">Dealer On-Boarding Process</li>
                <li className="mb-4 font-semibold ml-14">Dealer 360 Degree View</li>
                <li className="mb-4 font-semibold ml-14">Dealer Credit and Target setting</li>
                <li className="mb-4 font-semibold ml-14">Product/zone/region wise dealer Categorization.</li>
                <li className="mb-4 font-semibold ml-14">Dual Dashboard (Sales & allocated Dealers)</li>
                <li className="mb-4 font-semibold ml-14">Dealer case management</li>
                <li className="mb-4 font-semibold ml-14">Custom Reports</li>
                <li className="mb-4 font-semibold ml-14">Invoicing</li>
                <li className="mb-4 font-semibold ml-14">Inventory Visibility</li>
              </ul>
            </div>
            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Sales Order Management</li>
                <li className="mb-4 font-semibold ml-14">My Order Tracking</li>
                <li className="mb-4 font-semibold ml-14">Total and available credit</li>
                <li className="mb-4 font-semibold ml-14">Retailer Onboarding</li>
                <li className="mb-4 font-semibold ml-14">Retailer 360 degree view</li>
                <li className="mb-4 font-semibold ml-14">Associated Retailer list</li>
                <li className="mb-4 font-semibold ml-14">Retailer Ordering Patterns ( can be build )</li>
                <li className="mb-4 font-semibold ml-14">Support cases ( Product + billing)</li>
                <li className="mb-4 font-semibold ml-14">Invoicing + billing</li>
              </ul>
            </div>


            <div className="w-1/3 text-left">
              <ul>
                <li className="mb-4 font-semibold ml-14">Dealer 360 degree</li>
                <li className="mb-4 font-semibold ml-14">Dealer onboarding</li>
                <li className="mb-4 font-semibold ml-14">Dealer & warehouse relation ship</li>
                <li className="mb-4 font-semibold ml-14">Incentive slab management</li>
                <li className="mb-4 font-semibold ml-14">Incentive awards</li>
                <li className="mb-4 font-semibold ml-14">Campaigns and promotion offer management</li>
                <li className="mb-4 font-semibold ml-14">Gift inventory management</li>
               
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
