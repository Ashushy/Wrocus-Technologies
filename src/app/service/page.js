import ITConsulting from '@/components/ITConsulting';
import MobileDevelopment from '@/components/MobileDevelopment';
import Navbar from '@/components/Navbar';
import OdooDevelopment from '@/components/OdooDevelopment';
import QaTesting from '@/components/QaTesting';
import WebDesignDevelopment from '@/components/WebDesignDevelopment';
import React from 'react';

const Page = () => {
    return (
        <div className="relative">
              {/* <Navbar /> */}
            <div className="relative z-10 container mx-auto px-4 text-black text-center">
                <h1 className="text-4xl font-bold mt-5 text-blue-600">"Your Vision, Our Expertise"</h1>
                <p className="text-lg mb-2">Transform your online presence and drive results with our tailored services.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center p-5 gap-5">
                <div className="flex-1 text-center md:text-left ">
                    <h2 className="text-3xl font-semibold mt-5 md:mt-4">Introduction</h2>
                    <p className="text-sm mt-4 max-w-3xl mx-auto leading-relaxed leading-[2]">
                        At Wrocus Technology, we understand that every business has unique challenges and goals.
                        Our mission is to provide tailored solutions that empower your brand to thrive in the digital landscape.
                        With a dedicated team of experts in web development, UI/UX design, SEO, and digital marketing,
                        we leverage cutting-edge technologies such as Odoo for enterprise resource planning, Python for robust application development,
                        and .NET for building high-performance applications.
                        Whether you’re looking to build a new website, enhance user experience, or boost your online presence,
                        we’re here to guide you every step of the way. Let’s embark on this journey together and achieve remarkable results!
                    </p>

                </div>
                <div className="flex-1 text-center mt-5 md:mt-5">
                    <img
                        src='https://cdn.vectorstock.com/i/500p/77/82/it-service-delivery-cdn-software-program-app-vector-38707782.jpg'
                        alt="Cloud Computing"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>

            <WebDesignDevelopment />
            <MobileDevelopment/>
            <QaTesting/>
            <ITConsulting/>
            <OdooDevelopment/>



        </div>
    );
};

export default Page;
