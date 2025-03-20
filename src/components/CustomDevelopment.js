import React from 'react';

const ProjectCard = ({ title, description, features }) => {
    return (
        <div className='bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105'>
            <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
            <p className='text-gray-700 mb-4'>{description}</p>
            <h3 className='text-lg font-semibold mb-2'>Key Features:</h3>
            <ul className='list-disc list-inside mb-4'>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
                Learn More
            </button>
        </div>
    );
};

const CustomAppDevelopmentProjects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A custom e-commerce application that allows users to browse products, make purchases, and manage their accounts.",
            features: [
                "User-friendly interface for product browsing.",
                "Secure payment gateway integration.",
                "Order tracking and management.",
                "Personalized recommendations based on user behavior."
            ]
        },
        {
            title: "Healthcare Management System",
            description: "A web and mobile application for managing patient records, appointments, and billing for healthcare providers.",
            features: [
                "Secure patient data storage with HIPAA compliance.",
                "Appointment scheduling and reminders.",
                "Telehealth capabilities for remote consultations.",
                "Integration with wearable devices for health monitoring."
            ]
        },
        {
            title: "Real Estate Listing App",
            description: "A mobile application connecting buyers and sellers, featuring property listings and virtual tours.",
            features: [
                "Advanced search filters for location, price, and amenities.",
                "Interactive maps showing property locations.",
                "Virtual reality tours for properties.",
                "User reviews and ratings for agents and listings."
            ]
        },
        {
            title: "Project Management Tool",
            description: "A custom application designed for teams to collaborate effectively and manage projects.",
            features: [
                "Task assignment and tracking with deadlines.",
                "Integrated chat and file sharing.",
                "Gantt charts for visual project timelines.",
                "Reporting tools for tracking progress and performance."
            ]
        },
        {
            title: "Fitness Tracking App",
            description: "A mobile app that helps users track fitness goals, workouts, and nutrition.",
            features: [
                "Activity tracking using GPS and sensors.",
                "Personalized workout and meal plans.",
                "Community features for challenges and social engagement.",
                "Integration with wearable fitness devices."
            ]
        },
        {
            title: "Social Media Management Tool",
            description: "A comprehensive application for managing social media accounts, analyzing engagement, and scheduling posts.",
            features: [
                "Multi-platform account management.",
                "In-depth analytics and reporting.",
                "Content calendar for scheduling posts.",
                "Automated engagement features."
            ]
        }
    ];

    return (
        <div className='py-2 bg-gray-100 mt-2'>
            <div className='max-w-6xl mx-auto p-4'>
                <h1 className='text-center text-5xl font-bold mb-6 text-blue-600'>Our Custom App Development Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            features={project.features}
                        />
                    ))}
                </div>
                
                <div className='text-center mt-8'>
                    <p className='text-lg text-gray-800 italic mb-4'>
                        Interested in launching your own custom app? Let us help you turn your vision into reality!
                    </p>
                    <button className='px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'>
                        Contact Us Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomAppDevelopmentProjects;
