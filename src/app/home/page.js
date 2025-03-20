import Carausel from '@/components/Carausel';
import Chatbot from '@/components/Chatbot';
import CompanyOverview from '@/components/CompanyOverview';
import Comparision from '@/components/Comparision';
import Contacthomepage from '@/components/Contacthomepage';
import Footer from '@/components/Footer';
import IndustriesHome from '@/components/IndustriesHome';
import IntroduceProject from '@/components/IntroduceProject';
import Navbar from '@/components/Navbar';
import OurClient from '@/components/OurClient';
import OurServices from '@/components/OurServices';
import Services from '@/components/Services';
import WordAppreciation from '@/components/WordAppreciation';
import React from 'react'

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
      <Carausel/>
      {/* <Chatbot /> */}
      <OurClient />
      <Services />
      <OurServices />
      <Comparision />
      {/* <Industriserve/> */}
      <IndustriesHome />
      <CompanyOverview />
      {/* <OurPartner/> */}
       <Contacthomepage/>
      <IntroduceProject />
      {/* <TechnologyIndex/> */}
      {/* <ClientTestimonial/> */}
      <WordAppreciation />
      {/* <Footer /> */}

    </div>
  )
}

export default Home;
