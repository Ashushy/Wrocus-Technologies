
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import AOS from 'aos';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "aos/dist/aos.css";
import { initializeAOS } from '@/app/utils/Aos_setup';
import { MessageCircle, Send } from 'lucide-react';

const Carausel = () => {
    useEffect(() => {
        AOS.init();
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);

    const [isMobile, setIsMobile] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const chatRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            AOS.refresh();
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage = { role: "user", content: userInput };
        setMessages([...messages, userMessage]);
        setUserInput("");

        try {
            const response = await fetch("http://localhost:8000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_message: userInput }),
            });

            const data = await response.json();
            const botMessage = { role: "bot", content: data.reply };

            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const handleCarouselChange = () => {
        AOS.refresh();
    };
    const containerStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        height: isMobile ? 'auto' : '700px',
        padding: '5px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    };

    const textContainerStyle = {
        flex: 1,
        padding: isMobile ? '20px' : '40px',
        color: '#333',
        textAlign: 'left',
        fontFamily: '"Poppins", sans-serif',
    };

    const imageStyle = {
        maxWidth: '100%',
        width: isMobile ? '100%' : '750px',
        height: '460px',
        objectFit: 'cover',
        borderRadius: '10px',
        marginLeft: isMobile ? '0' : '20px',
        marginTop: isMobile ? '20px' : '0',
        marginBottom: isMobile ? '0' : '40px'
    };
    const headingStyle = {
        fontSize: '1.9em',
        marginBottom: '10px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#0056b3',
    };
    const middleTextStyle = {
        fontSize: isMobile ? '2em' : '2.5em',
        fontWeight: '700',
        lineHeight: '1.3',
        margin: '10px 0',
        color: '#007bff',
    };
    const paragraphStyle = {
        fontSize: isMobile ? '1em' : '1.2em',
        marginBottom: '10px',
        lineHeight: '1.6',
        color: '#555',
    };
    const buttonStyle = {
        padding: '12px 25px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        fontSize: '1.2em',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div className="relative">
            <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={3000} swipeable={false}>
                {/* Your original carousel content remains unchanged */}
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    // autoPlay={true}
                    interval={3000}
                    swipeable={false}
                    onChange={handleCarouselChange}
                >
                    <div className='bg-gray-100 ' style={containerStyle}>
                        <div style={textContainerStyle}>
                            <h1 className="carousel-text " style={headingStyle} data-aos="zoom-in" data-aos-delay="200">
                                Web & App Development
                            </h1>
                            <h1 className="carousel-text " style={middleTextStyle} data-aos="zoom-in" data-aos-delay="400">
                                Turn Your Ideas into Stunning Apps
                            </h1>
                            <p className="carousel-text " style={paragraphStyle} data-aos="zoom-in" data-aos-delay="500">
                                Our team of skilled developers and designers is dedicated to creating stunning apps that not only meet your requirements but also engage and delight users. We focus on innovative solutions that elevate user experiences and drive success for your business.
                            </p>
                            {/* Additional Content (Desktop Only) */}
                            {/* {!isMobile && ( */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }} data-aos="zoom-in" data-aos-delay="800">
                                <div className='mt-4' style={{ flex: 1, paddingRight: '10px' }}>
                                    <h2 className='text-blue-600 md:text-3xl text-xl font-bold mb-3' data-aos="zoom-in">Our Dedication</h2>
                                    <p style={paragraphStyle} data-aos="zoom-in">
                                        We are committed to delivering exceptional,   solutions that meet your unique needs.
                                    </p>
                                </div>
                                <div className='mt-4' style={{ flex: 1, paddingLeft: '10px' }} data-aos="zoom-in" data-aos-delay="800">
                                    <h2 className='text-blue-600 md:text-3xl text-xl font-bold mb-3' data-aos="zoom-in">Our Guarantee</h2>
                                    <p className='text-lg' data-aos="zoom-in">
                                        We stand behind our work with a commitment to quality and reliability.
                                        You can trust us to deliver exceptional results.
                                    </p>
                                </div>
                            </div>
                            {/* )} */}
                            <br />
                            <Link href="/sfdc">
                                <button className="bg-blue-600 text-white p-4  rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105 flex items-center justify-center" style={{ width: "200px" }}>
                                    Learn More
                                </button>
                            </Link>
                        </div>
                        {!isMobile && <img src="wd-removebg.png"
                            alt='Service Image' style={imageStyle} />}
                    </div>
                    {/* First Section */}
                    <div>
                        <div className='bg-gray-100' style={containerStyle}>
                            <div style={textContainerStyle}>
                                <h1 className="carousel-text" style={headingStyle} data-aos="zoom-in">
                                    Resource Hub
                                </h1>
                                <h1 className="carousel-text md:text-3xl text-xl" style={middleTextStyle} data-aos="fade-up" data-aos-delay="600">
                                    Develop Big with Our Qualified Tech Resources
                                </h1>
                                <p className="carousel-text mb-2" style={paragraphStyle} data-aos="fade-up" data-aos-delay="800">
                                    Explore our range of resources to enhance your development projects. From ReactJs to Angular, we provide the tools and frameworks that empower your development teams to create outstanding applications.
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', flexWrap: 'wrap' }}>
                                    <div className='mt-4' style={{ flex: 1, paddingRight: '10px' }} data-aos="fade-up" data-aos-delay="1000">
                                        <h2 className='text-blue-600 md:text-3xl text-xl font-bold mb-1' data-aos="fade-up">Our Technologies</h2>
                                        <p style={paragraphStyle} data-aos="fade-up">
                                            Leverage the latest frameworks and tools for optimal development efficiency.
                                        </p>
                                    </div>
                                    <div className='mt-4' style={{ flex: 1, paddingLeft: '10px' }} data-aos="fade-up" data-aos-delay="1200">
                                        <h2 className='text-blue-600 md:text-3xl text-xl font-bold mb-1' data-aos="fade-up">Begin Your Project</h2>
                                        <p style={paragraphStyle} data-aos="fade-up">
                                            Collaborate with us to turn your vision into successful outcomes.
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <Link href="/mobileapp">
                                    <button className="bg-blue-600 text-white p-4 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105 flex items-center justify-center" style={{ width: "200px" }} data-aos="fade-up">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {!isMobile && (
                                    <img
                                        src={'edit-removebg-preview.png'}
                                        alt='Resources Image'
                                        style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    {/* third section */}
                    <div className='bg-gray-100 ' style={containerStyle}>
                        <div style={textContainerStyle}>
                            <h1 className="carousel-text " style={headingStyle}>
                                Our Expertise
                            </h1>
                            <h1 className="carousel-text " style={middleTextStyle} data-aos="zoom-in">
                                End to End Implementation & Integration Services
                            </h1>
                            <p className="carousel-text " style={paragraphStyle} data-aos="zoom-in">
                                Our expert team specializes in seamless integration of Salesforce and Odoo.
                                We ensure that your business processes are optimized for success, with
                                tailored solutions that meet your unique needs.
                            </p>
                            {/* Additional Content (Desktop Only) */}
                            {/* {!isMobile && ( */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='mt-4' style={{ flex: 1, paddingRight: '10px' }}>
                                    <h2 className='text-blue-600 md:text-3xl text-xl font-bold mb-3' data-aos="zoom-in">Our Commitment</h2>
                                    <p style={paragraphStyle} data-aos="zoom-in">
                                        We continuously explore cutting-edge solutions to meet the evolving needs of our clients.
                                    </p>
                                </div>
                                <div className='mt-4' style={{ flex: 1, paddingLeft: '10px' }}>
                                    <h2 className='text-blue-600 md:text-3xl text-xl font-bold mb-3' data-aos="zoom-in">Our Promise</h2>
                                    <p className='text-lg' data-aos="zoom-in">
                                        We guarantee personalized attention and expert guidance throughout your journey.
                                    </p>
                                </div>
                            </div>
                            {/* )} */}
                            <br />
                            <Link href="/sfdc">
                                <button className="bg-blue-600 text-white p-4  rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105 flex items-center justify-center" style={{ width: "200px" }}>
                                    Learn More
                                </button>
                            </Link>
                        </div>
                        {!isMobile && <img src="od-removebg.png" alt='Service Image' style={imageStyle} />}
                    </div>
                </Carousel>
            </Carousel>
        </div>
    );
};

export default Carausel;
