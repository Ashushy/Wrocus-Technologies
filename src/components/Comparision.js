'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';

const Comparision = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    const features = [
        {
            title: "Minimize Development Challenges",
            description: "At our core, we focus on simplifying the development process. By gaining deep insights into each client's unique requirements, we create customized solutions that address specific challenges.",
            img: 'https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/05/senior-developer-vs-lead-developer-1128x635.jpg'
        },
        {
            title: "Hire Top Talent ",
            description: "We understand that the success of your projects hinges on the people behind them. That's why we prioritize connecting you with the industry's best talent. Our rigorous selection process ensures that you hire skilled professionals who not only meet your technical requirements but also fit seamlessly into your team culture.",
            img: 'https://cdn.prod.website-files.com/627cdcca8bc0d22df9b2672f/6583ed03555ae237432a0ed0_Recruit-the-Recruiter-Guide-to-Building-a-Kickass-Recruitment-Team.webp'
        },
        {
            title: "Free Expert Consultation",
            description: "Take advantage of our complimentary expert consultation, designed to help you identify your unique challenges and opportunities. Our experienced consultants will provide personalized insights and recommendations tailored to your specific goals.",
            img: 'https://media.istockphoto.com/id/1347197740/photo/business-people-having-casual-discussion-during-meeting.jpg?s=612x612&w=0&k=20&c=HSnFzyuwUDZFCehBv0W0jjRfwY1eKjGV1Lkek8lXY2Q='
        },
        {
            title: "Innovation",
            description: "At Wrocus Technology, we prioritize innovation as the cornerstone of our success. Our commitment to continuous investment in cutting-edge technology allows us to stay ahead in a rapidly evolving digital landscape.",
            img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/IT_Engineer_Salary.jpg"
        },
        {
            title: "Expert Team",
            description: "Our strength lies in our highly skilled team, whose diverse expertise spans multiple disciplines. Comprising specialists in software development, data analysis, cybersecurity, and user experience, we tackle challenges with a better approach.",
            img: "https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8="
        },
        {
            title: "Customer Focus",
            description: "We believe that every client is unique, which is why we specialize in delivering tailored solutions that align perfectly with their specific needs and goals. Our approach begins with a thorough understanding of each client's business.",
            img: 'https://t3.ftcdn.net/jpg/07/47/56/70/360_F_747567018_hxg1VGJo2bGjavrzbMnPuUQmipoHimnF.jpg'
        },

    ];

    return (
        <div className="mt-4 py-4 px-4 bg-gray-100 rounded-lg shadow-md"  >
            <div className="text-center">
                <h2 className="text-3xl font-medium text-gray-800 mb-4">
                    What sets
                    <span className="text-blue-600"> Wrocus Technology</span> apart from the competition?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"data-aos="zoom-in">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md  p-6 hover:shadow-lg transition-shadow duration-300"data-aos="zoom-in">

                            <img
                                src={feature.img}
                                alt={feature.title}
                                className="h-48 w-full object-cover mb-4 rounded"
                            />
                            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm mb-2 leading-6">{feature.description}</p>
                            {/* <button className=" mt-2 text-blue-500  px-4 rounded transition-colors duration-300">
                                Talk with our experts
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Comparision;
