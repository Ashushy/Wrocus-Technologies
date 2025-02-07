'use client'
import React, { useEffect } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WifiIcon from '@mui/icons-material/Wifi';
import { initializeAOS } from '@/app/utils/Aos_setup';

const TechnologyIndex = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <>
            <div
                className="relative bg-cover bg-center bg-no-repeat h-[600px] sm:h-[800px] lg:h-[500px] w-full mt-10"
                style={{ backgroundImage: 'url(https://wrocus.com/wp-content/uploads/2021/08/We-Deliver-Solution.jpg)' }}
                data-aos="zoom-in-up"
            >
                {/* Text Section */}
                <div className="absolute inset-0 flex flex-col items-center mt-12 text-center p-4 sm:p-6 lg:p-10">
                    <h2 className="text-white text-sm sm:text-lg font-semibold mb-2 ">// TECHNOLOGY INDEX</h2>
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        We Deliver Solutions with
                        <br />
                        the Goal of Trusting Relationships
                    </h2>
                </div>

                {/* Grid of Boxes */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 lg:p-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
                        <div className="flex flex-col items-center justify-center border border-customBorder shadow-md p-4 sm:p-6 transition-colors duration-300 hover:bg-customPrimary " style={{border:'1px solid rgba(255, 255, 255, 0.3)'}}>
                            <LanguageIcon className="text-white text-2xl sm:text-3xl transition-colors duration-300 " />
                            <h3 className="text-sm sm:text-lg font-semibold text-white mt-2">WEB</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center border border-customBorder shadow-md p-4 sm:p-6 transition-colors duration-300 hover:bg-customPrimary " style={{border:'1px solid rgba(255, 255, 255, 0.3)'}}>
                            <AdbIcon className="text-white text-2xl sm:text-3xl transition-colors duration-300 " />
                            <h3 className="text-sm sm:text-lg font-semibold text-white mt-2">ANDROID</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center border border-white shadow-md p-4 sm:p-6 transition-colors duration-300 hover:bg-customPrimary"style={{border:'1px solid rgba(255, 255, 255, 0.3)'}}>
                            <AppleIcon className="text-white text-2xl sm:text-3xl transition-colors duration-300  " />
                            <h3 className="text-sm sm:text-lg font-semibold text-white mt-2">IOS</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center border border-white shadow-md p-4 sm:p-6 transition-colors duration-300 hover:bg-customPrimary"style={{border:'1px solid rgba(255, 255, 255, 0.3)'}}>
                            <SettingsInputAntennaIcon className="text-white text-2xl sm:text-3xl transition-colors duration-300  " />
                            <h3 className="text-sm sm:text-lg font-semibold text-white mt-2">IoT</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center border border-white shadow-md p-4 sm:p-6 transition-colors duration-300 hover:bg-customPrimary"style={{border:'1px solid rgba(255, 255, 255, 0.3)'}}>
                            <SmartToyIcon className="text-white text-2xl sm:text-3xl transition-colors duration-300  " />
                            <h3 className="text-sm sm:text-lg font-semibold text-white mt-2">RPA</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center border border-white shadow-md p-4 sm:p-6 transition-colors duration-300 hover:bg-customPrimary"style={{border:'1px solid rgba(255, 255, 255, 0.3)'}}>
                            <WifiIcon className="text-white text-2xl sm:text-3xl transition-colors duration-300  " />
                            <h3 className="text-sm sm:text-lg font-semibold text-white mt-2">WIRELESS</h3>
                        </div>
                    </div>
                </div>

            </div>

            {/* happy client  */}
            <div className="flex mt-10 p-10 gap-10 w-full">
                {/* First Half */}
                <div
                    className="flex-1 bg-cover bg-center h-[300px]"data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    style={{ backgroundImage: 'url(https://wrocus.com/wp-content/uploads/2021/08/country-worlwide-1.jpg)' }}
                >
                    <p className='p-10 text-5xl text-white font-bold'>5 +</p>
                    <p className='p-2 text-3xl text-white font-bold'>Countries Worldwide</p>
                    <p className='p-2  text-white'>

                        WROCUS serves businesses in Australia, Singapore, UK, USA and India with a dedicated team providing software development solutions.</p>
                </div>

                {/* Second Half */}
                <div
                    className="flex-1 bg-cover bg-center h-[300px]"data-aos="flip-left"
                    style={{ backgroundImage: 'url(https://wrocus.com/wp-content/uploads/2021/08/happy-customers.jpg)' }}
                >
                    <p className='p-10 text-5xl text-white font-bold'>250 +</p>
                    <p className='p-2 text-3xl text-white font-bold'>  Happy Customers</p>
                    <p className='p-2  text-white'>

                        We retain our customers through proactive support, transparency and</p>
                </div>
            </div>
         
        </>
    );
};

export default TechnologyIndex;
