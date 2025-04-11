'use client';
import React, { useEffect, useState, useRef } from 'react';
 
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { initializeAOS } from '../utils/Aos_setup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const StaffAugmentationServices = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  const [isFormVisible, setFormVisible] = useState(false);
  
   
   
 

    
 

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setFormVisible(false);
    }
  };

 

  // Styles for the container
  const containerStyle = {
    backgroundColor: 'rgb(243 244 246)',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  return (
    <div className="bg-gray-100">
       
      {/* <Navbar/> */}
     

      {/* Hero Section */}
      <section className="bg-blue-50 text-gray-900 py-8 md:py-12" data-aos="zoom-in-up">
  <div className="container mx-auto mt-5 px-4 text-center">
    <h1 className="text-2xl md:text-4xl font-extrabold mb-6">
      Enhance Your Team with Our Staff Augmentation Services
    </h1>
    <p className="text-lg md:text-xl mb-8">
      Access top talent quickly and efficiently with our staff augmentation services.
      Scale your team on demand and fill skill gaps without the long-term commitment.
    </p>
    
  </div>
</section>


      {/* Our Process */}
      <section className="py-12 bg-white" data-aos="zoom-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-extrabold mb-6 text-center text-gray-800">Our Staff Augmentation Process</h2>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-lg mb-4 text-gray-800">
                At <strong>Wrocus Technology,</strong> we follow a structured process to ensure that we meet your staffing needs efficiently and effectively. Our approach includes:
              </p>
              <ol className="list-decimal pl-5 space-y-4 text-gray-800">
                <li>
                  <strong>Understanding Your Needs:</strong> We begin by conducting a detailed consultation to understand your project requirements, team dynamics, and specific skill needs.
                </li>
                <li>
                  <strong>Talent Matching:</strong> Leveraging our extensive network and resources, we match your needs with qualified candidates who possess the required skills and experience.
                </li>
                <li>
                  <strong>Candidate Screening:</strong> We thoroughly vet candidates through interviews, technical assessments, and reference checks to ensure they meet our high standards.
                </li>
                <li>
                  <strong>Integration and Onboarding:</strong> Once a candidate is selected, we facilitate a smooth onboarding process to integrate them into your team effectively.
                </li>
                <li>
                  <strong>Ongoing Support:</strong> We provide continuous support and check-ins to ensure that the candidate is meeting expectations and address any issues promptly.
                </li>
              </ol>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img src="/staff augemntation.jpg" alt="Staff Augmentation" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-gray-50" data-aos="zoom-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-extrabold mb-6 text-center text-gray-800">Key Benefits of Staff Augmentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="zoom-in-up">
            {[
              {
                title: "Access to Top Talent",
                description: "Quickly tap into a pool of highly skilled professionals who can deliver exceptional results and bring valuable expertise to your projects."
              },
              {
                title: "Flexibility and Scalability",
                description: "Scale your team up or down based on project demands, ensuring you have the right resources at the right time without long-term commitments."
              },
              {
                title: "Cost Efficiency",
                description: "Optimize your budget by hiring professionals for specific projects or short-term needs, avoiding the overhead costs of permanent hires."
              },
              {
                title: "Speed to Market",
                description: "Accelerate project timelines by quickly integrating skilled professionals into your team, helping you meet deadlines and achieve goals faster."
              },
              {
                title: "Enhanced Focus",
                description: "Allow your core team to focus on strategic initiatives and high-priority tasks while specialized professionals handle specific aspects of your projects."
              },
              {
                title: "Reduced Risk",
                description: "Minimize risks associated with hiring and training permanent staff by leveraging experienced professionals who are ready to contribute immediately."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-white">{benefit.title}</h3>
                <p className="text-white">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Resources */}
      <section className="py-12 bg-gray-200" data-aos="zoom-in-up">
  <div className="container mx-auto mt-4 px-4">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-800">Insights & Resources</h2>
    <p className="text-base md:text-lg mb-8 text-center text-gray-800">
      Stay informed and make better decisions with our curated insights and resources on staff augmentation. Explore industry trends, best practices, and valuable content to enhance your understanding of how staff augmentation can benefit your organization.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12" data-aos="zoom-in-up">
      {[
        {
          title: "Industry Trends",
          description: "Discover the latest trends in staff augmentation and how they can impact your business. Stay ahead with insights into market dynamics and evolving workforce strategies."
        },
        {
          title: "Best Practices",
          description: "Learn best practices for implementing staff augmentation effectively. From selecting the right talent to integrating them into your team, get practical tips and guidelines."
        },
        {
          title: "Case Studies & White Papers",
          description: "Access detailed case studies and white papers that showcase real-world examples and research on staff augmentation. Understand how other organizations have benefited from similar solutions."
        }
      ].map((resource, index) => (
        <div key={index} className="bg-blue-50 p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-950">{resource.title}</h3>
          <p className="text-gray-800">{resource.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Custom Contact Section */}
      <div className="py-24 bg-blue-50 text-center" data-aos="zoom-in-up">
        <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">Ready to Enhance Your Team?</h1>
        <p className="text-lg md:text-lg mb-8">
          Get in touch with us today to learn more about our staff augmentation services and how we can help you achieve your business objectives with the right talent.
        </p>
   
       <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={() => setFormVisible(true)}
        >
          CONTACT US
        </button>
        
      </div>
      {
                    isFormVisible && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <ContactForm onClose={() => setFormVisible(false)} isCloseBtnVisible />
                            </div>
                        </div>
                    )
                }
    </div>
  );
};

export default StaffAugmentationServices;