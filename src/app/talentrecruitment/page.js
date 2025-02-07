'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { initializeAOS } from '../utils/Aos_setup';
import ContactForm from '@/components/ContactForm';
import Modal from '@/components/Modal';

const Page = () => {
    const [openForm, setOpenForm] = useState(false)
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <div>
              {/* <Navbar /> */}
            {/* main page */}

            <div
                className='  p-4 py-6'
                style={{
                    backgroundImage: 'url(/bg-pheader.jpg)', // Ensure the image path is correct
                    backgroundSize: 'cover', // Optional: Adjust background size
                    backgroundPosition: 'center', // Optional: Adjust background position
                }}
            >

                <p className='text-2xl lg:text-4xl font-extrabold text-white text-center'>Exceptional Talent Recruitment Services</p>


            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center mx-5 mt-5 bg-white rounded-lg p-6' data-aos="fade-up-left">
    <div className="lg:w-2/5 w-full p-5">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">Unlocking Talent for Your Success!</h2>
        <p className="text-md md:text-lg text-gray-700 mt-4 leading-relaxed">
            We specialize in providing top-notch recruitment services tailored to meet the unique needs of your organization.
            Our dedicated team of experts is committed to finding the right talent to elevate your business and drive success.
            Partner with us to discover skilled professionals who align with your company’s goals and culture.
        </p>
        <div className='mt-8'>
            <Link href="contact">
                <button className='bg-blue-600 w-full md:w-auto p-4 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md'>
                    Schedule A Call
                </button>
            </Link>
        </div>
    </div>

    <div className="flex justify-center items-center w-full lg:w-1/2 mt-5 lg:mt-0">
        <img
            src='https://schaeffler-tomorrow.com/images/lg/21073'
            alt='Recruitment Image'
            className="w-full     transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{ height: '350px', objectFit: 'cover' }} // Adjusted height for better responsiveness
        />
    </div>
</div>



            {/* Service Offerings */}
            <p className='text-center mt-6 lg:text-3xl text-2xl font-bold text-black-600 p-4 bg-gray-100 ' >Service Offerings</p>
            {/* 1st Service */}
            <div className='flex p-5 bg-white flex-col md:flex-row justify-center items-center md:space-x-8 lg:mt-6 mt-2' data-aos="zoom-in-up">
                <div className='lg:p-6 rounded-lg   transform transition-transform hover:scale-105 lg:w-1/2 w-full'>
                    <h3 className='text-3xl font-bold mb-3 text-blue-700'>Talent Sourcing:</h3>
                    <p className='text-gray-700 lg:p-5 p-2 text-start'>
                        We employ a comprehensive strategy to identify and attract top talent tailored to your specific needs.
                        Our methods include leveraging online job boards, social media platforms, and tapping into our extensive
                        network of industry contacts. By focusing on both active and passive candidates, we ensure that you have
                        access to a diverse pool of skilled individuals who align with your company culture and values.
                    </p>
                </div>
                <div className=' lg:w-1/2'>
                    <img
                        src='https://blog.mettl.com/wp-content/uploads/2022/04/Cover-Image-1.png'
                        alt='Talent image'
                        className='shadow-lg rounded-lg mt-12 md:mt-0 lg:w-full h-auto '
                        style={{ height: '320px' }}

                    />
                </div>
            </div>


            {/* 2nd Service */}
            <div className='lg:py-5 lg:p-10 p-4'>
                <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8' data-aos="zoom-in-up">
                    <div className='w-full md:w-1/2 lg:w-1/2'>
                        <img
                            src='https://media.licdn.com/dms/image/C5612AQFD3INR32n-Iw/article-cover_image-shrink_600_2000/0/1520103948386?e=2147483647&v=beta&t=jDBb58njZxnkjRvZPs2IkAkeOsRlrSvFUsPqPuC2npI'
                            alt='Talent image'
                            className='shadow-lg rounded-lg w-full h-full object-cover'
                            style={{ height: '360px' }} // Set height for uniformity
                        />
                    </div>
                    <div className='p-3 mt-3 lg:p-6 rounded-lg   transform transition-transform hover:scale-105  md:w-1/2 lg:1/2'>
                        <h3 className=' text-3xl lg:text-3xl font-bold mb-2 text-blue-700 sm:text-start'>Screening & Selection:</h3>
                        <p className='text-gray-700 lg:p-5 text-start'>
                            In our Screening & Selection process, we implement a multi-step vetting approach to ensure we present only the most qualified candidates. Initially, we conduct thorough resume screenings to identify key skills and relevant experience. This is followed by in-depth phone interviews, where we assess candidates’ soft skills, cultural fit, and motivations.
                        </p>
                    </div>
                </div>
            </div>



            {/* 3rd Service */}
            <div className='lg:py-5 lg:p-10 p-3' data-aos="zoom-in-up">
                <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8'>
                    <div className='p-6 rounded-lg    transform transition-transform hover:scale-105 w-full md:w-1/2'>
                        <h3 className='text-3xl lg:text-3xl font-bold lg:mb-2 text-blue-700'>Interview Coordination:</h3>
                        <p className='text-gray-700 lg:p-5 '>
                            Our Interview Coordination service streamlines the entire interview process, making it as efficient and stress-free as possible for both your team and candidates. We handle all scheduling logistics, ensuring that interviews are arranged at convenient times for everyone involved. Additionally, we prepare candidates by providing them with insights into your company culture and interview expectations, helping them perform at their best.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img
                            src='https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/career_advice/interview_questions/coordinator.webp'
                            alt='Talent image'
                            className='shadow-lg rounded-lg mt-4 md:mt-0 w-full h-auto'
                            style={{ height: '360px', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>

            {/* 4th Service */}
            <div className='py-5 lg:p-10 p-3' data-aos="zoom-in-up">
                <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8'>
                    <div className='w-full md:w-1/2'>
                        <img
                            src='https://businessimprovement.group/wp-content/uploads/2017/07/image-6-1684x878.jpg'
                            alt='Talent image'
                            className='shadow-lg rounded-lg mt-4 md:mt-0 w-full h-auto'
                            style={{ height: '380px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className='p-6 rounded-lg    transform transition-transform hover:scale-105 w-full md:w-1/2'>
                        <h3 className='text-3xl font-bold mb-2 text-blue-700'>Onboarding Support:</h3>
                        <p className='text-gray-700 lg:p-5 p-3'>
                            Our onboarding support ensures that new hires have a smooth transition into your organization. We provide resources, training, and guidance to help them acclimate to your company culture, understand their roles, and foster early engagement. This comprehensive support ultimately leads to higher retention rates and employee satisfaction.
                        </p>
                    </div>
                </div>
            </div>




            {/* The Recruitment Process */}
            <div className='mt-8 p-4 bg-gray-50 rounded-lg shadow-md' data-aos="zoom-in-up">
                <h2 className='text-center  text-2xl lg:text-4xl font-bold mb-5 text-blue-700'>The Recruitment Process</h2>

                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='flex flex-col'>
                            {[
                                { title: "Consultation", description: "Understanding your hiring needs and organizational culture." },
                                { title: "Sourcing", description: "Identifying potential candidates through various channels." },
                                { title: "Screening", description: "Vetting candidates through resume reviews and assessments." },
                            ].map((step, index) => (
                                <div key={index} className='flex flex-col items-center mb-6 transition-transform transform hover:scale-105 p-6 bg-white rounded-lg shadow-md hover:shadow-lg'>
                                    <div className='bg-blue-600 text-white p-4 rounded-full shadow-lg'>
                                        <p className='text-lg font-semibold'>{index + 1}. {step.title}</p>
                                    </div>
                                    <p className='mt-2 text-gray-700 text-center'>{step.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-col'>
                            {[
                                { title: "Interviews", description: "Coordinating interviews to evaluate candidate fit and skills." },
                                { title: "Client Interviews", description: "Engaging with clients to assess their needs." },
                                { title: "Placement", description: "Finalizing the hiring process and ensuring smooth onboarding." }
                            ].map((step, index) => (
                                <div key={index} className='flex flex-col items-center mb-6 transition-transform transform hover:scale-105 p-6 bg-white rounded-lg shadow-md hover:shadow-lg'>
                                    <div className='bg-blue-600 text-white p-4 rounded-full shadow-lg'>
                                        <p className='text-lg font-semibold'>{index + 4}. {step.title}</p>
                                    </div>
                                    <p className='mt-2 text-gray-700 text-center'>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>

            {/* Why Choose us */}

            <div className='py-6 bg-gray-100 mt-5'>
                <h2 className='text-center text-4xl font-bold mb-6 text-blue-600'>Why Choose Our Talent Recruitment Services</h2>

                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' data-aos="zoom-in-up">
                        {[
                            {
                                title: "Tailored Approaches",
                                description: "We customize our recruitment strategies to meet your specific needs, ensuring the perfect match for your organization.",
                                icon: "🌟"
                            },
                            {
                                title: "Industry Expertise",
                                description: "Our team has extensive experience across various industries, allowing us to understand your unique challenges and requirements.",
                                icon: "🛠️"
                            },
                            {
                                title: "Dedicated Support",
                                description: "We provide continuous support throughout the recruitment process, ensuring seamless communication and a positive experience.",
                                icon: "🤝"
                            },
                            {
                                title: "Data-Driven Insights",
                                description: "Utilizing advanced analytics, we refine our processes to attract the best talent, enhancing your hiring efficiency.",
                                icon: "📊"
                            },
                            {
                                title: "Vast Network",
                                description: "Our extensive network of candidates means we can quickly connect you with top talent, reducing your time to hire.",
                                icon: "🌐"
                            },
                            {
                                title: "Commitment to Diversity",
                                description: "We prioritize diversity and inclusion, ensuring a rich pool of candidates that brings different perspectives to your team.",
                                icon: "🌈"
                            }
                        ].map((usp, index) => (
                            <div key={index} className='flex flex-col items-center p-6
                             bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'data-aos="zoom-in-up">
                                <div className='text-3xl'>{usp.icon}</div>
                                <h3 className='text-xl font-semibold mt-3'>{usp.title}</h3>
                                <p className='mt-2 text-gray-700 text-center'>{usp.description}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

            {/* <div className='py-6 bg-gray-100 mt-8 p-4'>
                <h2 className='text-center text-4xl font-bold mb-6 text-black-600'>Success Stories</h2>

                <div className='max-w-4xl mx-auto text-gray-800'>
                    <h3 className='text-2xl font-semibold mb-4'>Client Testimonials</h3>
                    <div className='bg-white p-4 rounded-lg shadow-md mb-4' data-aos="zoom-in-up">
                        <blockquote className='italic text-lg'>
                            "The team at Network_18 understood our unique needs and delivered exceptional candidates that fit our culture perfectly."
                        </blockquote>
                        <p className='text-right font-semibold'>— Jane Doe, HR Manager, ABC Corp</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-md mb-4' data-aos="zoom-in-up">
                        <blockquote className='italic text-lg'>
                            "Thanks to Wrocus Technology, we filled our critical roles quickly and efficiently, which allowed us to maintain productivity."
                        </blockquote>
                        <p className='text-right font-semibold'>— John Smith, CEO, XYZ Ltd.</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-md mb-4' data-aos="zoom-in-up">
                        <blockquote className='italic text-lg'>
                            "Their personalized service made a significant difference in our hiring process. We felt supported every step of the way."
                        </blockquote>
                        <p className='text-right font-semibold'>— Sarah Johnson, Talent Acquisition Lead, 123 Inc.</p>
                    </div>


                </div>
            </div> */}


            {/* contact to us */}
            <div className='bg-gray-00 mt-5'>
                <div className='mt-8 text-center'>
                    <div className='bg-white p-4'>
                        <p className='text-lg text-gray-800'>
                            Choose us for a recruitment experience that prioritizes your needs and delivers results. Let’s build your dream team together!
                        </p>
                        <button className='text-white bg-blue-600 p-3 mt rounded-lg mt-8' onClick={() => setOpenForm(true)} >

                            schedule a Meeting</button>
                        {openForm ?
                            <Modal isOpen={openForm} onClose={() => setOpenForm(false)}>
                                <ContactForm onClose={() => setOpenForm(false)} />
                            </Modal>

                            : ''}
                    </div>


                </div>
            </div>



            {/* <Footer /> */}
        </div>
    );
};

export default Page;
