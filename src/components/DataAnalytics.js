import React from 'react';

const DataAnalyticsServices = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">AI and Data Analytics Services</h1>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">Our Services</h2>
                <p className="text-gray-600 text-center">
                    We offer a comprehensive suite of AI and data analytics services designed to help your business thrive in today's data-driven world.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
                {services.map((service, index) => (
                    <div key={index} className="p-6 border rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 flex flex-col" style={{ height: '450px' }}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                        <img src={service.image} alt={service.title} className="mb-4 rounded" style={{ height: '280px', objectFit: 'fill' }} />
                        <p className="text-gray-600 flex-grow">{service.description}</p>
                    </div>
                ))}
            </div>

            <section className="text-center mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started Today!</h2>
                <p className="text-gray-600 mb-4">
                    Ready to unlock the potential of your data? Contact us to learn how our services can benefit your business.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Contact Us
                </button>
            </section>
        </div>
    );
};

const services = [
    {
        title: 'Data Analysis',
        image: 'https://www.soundandcommunications.com/wp-content/uploads/2019/11/Data-Ana.jpg',
        description: 'Analyze your data to uncover trends, insights, and actionable strategies tailored to your business needs.'
    },
    {
        title: 'Predictive Analytics',
        image: 'https://egbc-images.s3-eu-west-1.amazonaws.com/content/w620/84245.png',
        description: 'Leverage advanced algorithms to forecast future trends and make informed decisions for your organization.'
    },
    {
        title: 'AI Implementation',
        image: 'https://www.hsph.harvard.edu/wp-content/uploads/2022/09/AIC23-iStock-133332871200x800-1.jpg',
        description: 'Get expert guidance on implementing AI technologies that streamline processes and enhance operational efficiency.'
    },
    {
        title: 'Custom Solutions',
        image: 'https://www.shutterstock.com/image-photo/black-woman-working-office-communication-600nw-2312841739.jpg',
        description: 'Develop tailored solutions to meet your unique business challenges, ensuring maximum value from your data.'
    },
    {
        title: 'Training & Support',
        image: 'https://servicestrategies.com/wp-content/uploads/507987701_service-leader-2.jpg',
        description: 'Empower your team to leverage data analytics effectively, with training programs and ongoing support.'
    }
];

export default DataAnalyticsServices;
