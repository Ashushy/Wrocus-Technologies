 'use client';
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect, useState, useRef } from 'react';
import { FaGlobe, FaSmile, FaUsers, FaCheckCircle } from 'react-icons/fa';

const CompanyOverview = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  // State for dynamic numbers
  const [countries, setCountries] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(400);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Effect to increment numbers
  useEffect(() => {
    if (isVisible) {
      const targetCountries = 5;
      const targetHappyCustomers = 250;
      const targetTeamMembers = 50;
      const targetProjectsCompleted = 150;

      const incrementNumbers = () => {
        const increment = (setter, target, current) => {
          if (current < target) {
            setter(prev => Math.min(prev + Math.ceil(target / 100), target));
          }
        };

        const interval = setInterval(() => {
          increment(setCountries, targetCountries, countries);
          increment(setHappyCustomers, targetHappyCustomers, happyCustomers);
          increment(setTeamMembers, targetTeamMembers, teamMembers);
          increment(setProjectsCompleted, targetProjectsCompleted, projectsCompleted);

          if (
            countries >= targetCountries &&
            happyCustomers >= targetHappyCustomers &&
            teamMembers >= targetTeamMembers &&
            projectsCompleted >= targetProjectsCompleted
          ) {
            clearInterval(interval);
          }
        }, 50);
      };

      incrementNumbers();
    }
  }, [isVisible, countries, happyCustomers, teamMembers, projectsCompleted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-12 px-6 bg-gray-50 mb-5" data-aos="zoom-in-up">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-gray-950 mb-4">Company Overview</h1>
        <p className="text-lg text-gray-950">
          Discover how we make an impact globally and locally. Our achievements reflect our commitment to excellence and innovation.
        </p>
      </div>

      {/* Card Container */}
      <div className="flex flex-wrap justify-between">
        {/* Card 1: Countries Worldwide */}
        <div className="w-full sm:w-1/4 p-2">
          <div className="bg-blue-950 border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:scale-105 h-full" data-aos="zoom-in-up">
            <div className="p-12 flex flex-col justify-between h-full">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-800 text-blue-300 rounded-full flex items-center justify-center">
                  <FaGlobe className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-semibold text-white ml-4">{countries}+ Countries Worldwide</h2>
              </div>
              <p className="text-white">
                Wrocus Technology serves businesses in Australia, Singapore, UK, USA, and India with a dedicated team providing software development solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Happy Customers */}
        <div className="w-full sm:w-1/4 p-2">
          <div className="bg-blue-950 border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:scale-105 h-full" data-aos="zoom-in-up">
            <div className="p-12 flex flex-col justify-between h-full">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-800 text-green-300 rounded-full flex items-center justify-center">
                  <FaSmile className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-semibold text-white ml-4">{happyCustomers}+ Happy Customers</h2>
              </div>
              <p className="text-white">
                We retain our customers through proactive support, transparency, and complete control of the project.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Team Members */}
        <div className="w-full sm:w-1/4 p-2">
          <div className="bg-blue-950 border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:scale-105 h-full" data-aos="zoom-in-up">
            <div className="p-12 flex flex-col justify-between h-full">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-800 text-purple-300 rounded-full flex items-center justify-center">
                  <FaUsers className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-semibold text-white ml-4">{teamMembers}+ Team Members</h2>
              </div>
              <p className="text-white">
                Our diverse and talented team brings a wealth of experience and expertise, driving our success and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Projects Completed */}
        <div className="w-full sm:w-1/4 p-2">
          <div className="bg-blue-950 border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:scale-105 h-full" data-aos="zoom-in-up">
            <div className="p-12 flex flex-col justify-between h-full">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-800 text-yellow-300 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-semibold text-white ml-4">{projectsCompleted}+ Projects Completed</h2>
              </div>
              <p className="text-white">
                Our team has successfully delivered numerous projects, ensuring client satisfaction and exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

 
export default CompanyOverview;
