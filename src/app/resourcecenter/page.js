'use client';
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaLightbulb, FaChartLine, FaTools, FaEye, FaComments, FaFileAlt } from 'react-icons/fa'; // Import icons from react-icons
import { initializeAOS } from '../utils/Aos_setup';

const ResourceCenterPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">

        {/* <Navbar /> */}

      <main className="flex-1 p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-black mb-4">Earned Value Management System(EVMS)</h1>
        <div className="max-w-7xl mx-auto bg-white p-4 md:p-4 rounded-lg shadow-lg   flex flex-col md:flex-row">

          {/* Text Content */}
          <div className="flex-1 p-4 md:p-4 flex flex-col justify-center">

            <p className="text-lg text-gray-800 mb-2 leading-relaxed " style={{ fontFamily: 'roboto', fontSize: '19px' }}>
              We use <span className='text-black text-xl'>Earned Value Management System (EVMS)</span> for tracking Schedule and Cost slippages in a Project, where requirements are well understood at the onset and design and architecture can be drafted in good detail. This approach allows us to maintain control over project progress and make data-driven decisions. By integrating performance metrics, we can quickly identify potential issues and implement corrective actions proactively.
            </p>


          </div>

          {/* Image Content */}
          <div className="flex-1 p-4 md:p-8 flex justify-center items-center">
            <img
              src='https://miro.medium.com/v2/resize:fit:1400/1*RqdfX0KDkJo3mdgqy_1ORw.jpeg'
              alt="Earned Value Management"
              className="object-contain rounded-lg shadow-lg border border-gray-200 w-full h-72 md:h-80"
            />
          </div>
        </div>
        <div className='bg-gray-50 p-4 mt-5 py-2'>

          <div className='bg-white shadow-lg p-8'>
            <h2 className="text-2xl text-center md:text-4xl font-bold text-gray-900 mb-4">Advantages of Earned Value Management System:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
              <li>A simple system for tracking Cost and Schedule slippages</li>
              <li>Easily monitor budgeted cost of work performed (Earned Value) vs actual cost of material and resources (T&M)</li>
              <li>Easily monitor under budgeting (slow execution) of high complexity and priority modules to keep the overall project on track</li>
              <li>Provides clear visibility into project performance and progress, facilitating informed decision-making</li>
              <li>Helps identify potential risks and issues early, enabling proactive management and mitigation strategies</li>

            </ul>
          </div>

        </div>

        <section className="bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-200 mt-8 max-w-7xl mx-auto" data-aos="zoom-in-up">
          <h2 className="text-3xl text-center md:text-4xl font-semibold text-black mb-4">Agile Methodology: Sprint and Scrum</h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            We use Sprint and Scrum based Agile Methodology when requirements are evolving and design and architecture may change significantly as new requirements get added. This setup is also ideally suited when a client is conceptualizing a Minimum Viable Product in the shortest possible time to test market response. In this system, requirements, design, cost, and schedule can change up to acceptable levels of variance.
          </p>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">Key Benefits:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Adaptable to changing requirements and market conditions</li>
                <li>Fast delivery of Minimum Viable Product (MVP) for market testing</li>
                <li>Continuous feedback loop to refine and improve the product</li>
                <li>Flexible design and architecture adjustments as needed</li>
                <li>Improved team collaboration and communication</li>
                <li>Enhanced ability to manage risk and uncertainty</li>
                <li>Frequent reassessment and realignment of project goals</li>
                <li>Early and continuous delivery of valuable software</li>
                <li>Increased customer satisfaction through regular updates</li>
                <li>Effective management of project scope and changes</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center items-center p-12">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20231213103431/agile.png"
                alt="Agile vs Waterfall"
                className="w-full h-auto rounded-lg shadow-md p-5"
              />
            </div>
          </div>
        </section>
        

        <section className="bg-gray-50 p-4 md:p-8 rounded-lg shadow-lg border border-gray-200 mt-8 max-w-7xl mx-auto" data-aos="zoom-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">Risk Mitigation</h2>
          <p className="text-xl text-gray-800 mb-6 leading-relaxed text-center">
            Risk mitigation is a critical aspect of project management and organizational strategy.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center">Our Risk Mitigation Strategy</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
              <div className="absolute top-0 right-0 p-4">
                <FaLightbulb className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Risk Identification</h4>
              <p className="text-gray-700">
                We systematically identify potential risks through comprehensive analysis and stakeholder consultations to ensure that all possible risks are recognized early.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
              <div className="absolute top-0 right-0 p-4">
                <FaChartLine className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h4>
              <p className="text-gray-700">
                Our team evaluates the likelihood and potential impact of identified risks, prioritizing them based on their significance and potential disruption to the project or organization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
              <div className="absolute top-0 right-0 p-4">
                <FaTools className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Mitigation Strategies</h4>
              <p className="text-gray-700">
                We develop and implement strategies to reduce or eliminate risks, including contingency planning, risk transfer, and risk acceptance based on the nature of the risk and its impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
              <div className="absolute top-0 right-0 p-4">
                <FaEye className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Monitoring and Review</h4>
              <p className="text-gray-700">
                Continuous monitoring of risk factors and periodic reviews ensure that our risk management strategies remain effective and are adjusted as necessary based on evolving conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
              <div className="absolute top-0 right-0 p-4">
                <FaComments className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Communication</h4>
              <p className="text-gray-700">
                We maintain open lines of communication with stakeholders to keep them informed about risk status and mitigation efforts, ensuring transparency and collaborative problem-solving.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
              <div className="absolute top-0 right-0 p-4">
                <FaFileAlt className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h4>
              <p className="text-gray-700">
                Detailed documentation of risk management activities and decisions provides a reference for future projects and aids in understanding the risk landscape.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ResourceCenterPage;
