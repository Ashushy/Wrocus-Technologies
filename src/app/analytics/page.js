'use client'
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { useState } from 'react';

const services = [
  {
    title: 'Web Analytics',
    description: 'Track website traffic, user behavior, and conversion rates to optimize your online presence.',
    benefits: [
      'User acquisition and retention',
      'Conversion rate optimization (CRO)',
      'A/B testing'
    ],
    img: 'https://media.licdn.com/dms/image/D4E12AQGsP9ccZDQ2fQ/article-cover_image-shrink_720_1280/0/1702464637647?e=2147483647&v=beta&t=HwLz7wrGOBbN9Y-lIyWgvNeF01wD2-HzImrPpniX9nI',
  },
  {
    title: 'Mobile App Analytics',
    description: 'Understand how users interact with your mobile app and identify areas for improvement.',
    benefits: [
      'User engagement analysis',
      'App store optimization (ASO)',
      'Crash reporting'
    ],
    img: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2021/11/the-role-of-mobile-app-analytics-to-build-successful-apps.png',
  },
  {
    title: 'Data Visualization',
    description: 'Transform raw data into actionable insights with visually appealing and informative dashboards.',
    benefits: [
      'Custom dashboard development',
      'Data storytelling',
      'Interactive visualizations'
    ],
    img: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Visualization.jpg',
  },
];

const successStories = [
  {
    title: 'E-Commerce Growth',
    description: 'Our client, an e-commerce store, saw a 30% increase in sales after implementing our web analytics and conversion rate optimization strategies.',
    // img: 'https://www.servcorp.co.uk/media/34561/e-commerce-img.jpeg',
  },
  {
    title: 'Mobile App Engagement',
    description: 'We helped a mobile app company improve user engagement by 40% through targeted analytics and user feedback analysis.',
    // img: 'https://via.placeholder.com/150?text=Mobile+App',
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Our data visualization solutions empowered a finance firm to make data-driven decisions that resulted in a 25% increase in profitability.',
    // img: 'https://via.placeholder.com/150?text=Data+Visualization',
  },
];

const ServiceCard = ({ title, description, img, benefits }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
    <img src={img} alt={`${title} image`} className="w-full h-48 object-cover object-center" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <strong className="text-lg">Key Benefits:</strong>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 7l-12 12-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const SuccessCard = ({ title, description, img }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl p-4">
    {/* <img src={img} alt={`${title} image`} className="w-full h-32 object-cover object-center mb-4" /> */}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AnalyticsPage = () => {
  const [isFormVisible, setFormVisible] = useState(false)
  return (
    <>
      {/*   <Navbar /> */}
      <header className="relative bg-blue-50 text-gray-800 py-8 bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/your-background-image.jpg')" }}>
        <div className="relative z-10 container mx-auto text-center mt-4 mb-1">
          <h1 className="text-2xl lg:text-4xl font-extrabold leading-tight relative">
            Transform Your Business with Expert Analytics Services
            <span className="absolute inset-0 bg-gradient-to-r opacity-30 rounded-lg"></span>
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto font-semibold leading-relaxed">
            We provide in-depth insights that empower you to make informed, data-driven decisions and enhance operational efficiency.
          </p>

        </div>
      </header>

      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 text-center">Our Analytics Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              img={service.img}
              benefits={service.benefits}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <SuccessCard
              key={index}
              title={story.title}
              description={story.description}
              img={story.img}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="text-center mb-8 mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">Ready to Transform Your Business?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Contact us today to learn more about how our Salesforce integration services can help your business succeed.
        </p>
        <div className="mt-8">

          <button
            onClick={() => setFormVisible(true)}
            className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get in Touch
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
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default AnalyticsPage;
