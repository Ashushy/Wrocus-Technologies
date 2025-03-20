'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Healthcare from '@/components/Healthcare';
import OdooDevelopment from '@/components/OdooDevelopment';
import Finance from '@/components/Finance';
import Retail from '@/components/Retail';
import Manufacturing from '@/components/Manufacturing';
import Logistics from '@/components/Logistics';
import Media from '@/components/Media';
import Education from '@/components/Education';
import { initializeAOS } from '../utils/Aos_setup';

const Industries = () => {
  const [navbarStyle, setNavbarStyle] = useState('translate-y-0');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setShowScrollTop(scrollTop > 300);
    setNavbarStyle(scrollTop > lastScrollTop ? '-translate-y-20' : 'translate-y-0');
    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <section className="relative">
        <div
          className="relative h-[250px] md:h-[300px] w-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/bg-pheader.jpg)', 
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Discover the Industries
              <p className='mt-5 text-4xl md:text-6xl sm:text-5xl'>We Serve</p>
            </h1>
          </div>
        </div>
      </section>

      <section className={`sticky top-0 z-40 w-full transition-transform duration-300 ${navbarStyle}`}>
        <nav className="bg-blue-950 p-4 sm:p-6 md:p-8 text-white">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center space-x-8 sm:space-x-12 md:space-x-24">
              <Link href="#healthcare" className="hover:text-yellow-400 font-semibold ml-12 transition-colors">Healthcare</Link>
              <Link href="#finance" className="hover:text-yellow-400 font-semibold transition-colors">Finance</Link>
              <Link href="#retail" className="hover:text-yellow-400 font-semibold transition-colors">Retail</Link>
              <Link href="#manufacturing" className="hover:text-yellow-400 font-semibold transition-colors">Manufacturing</Link>
              <Link href="#logistics" className="hover:text-yellow-400 font-semibold transition-colors">Logistics</Link>
              <Link href="#media" className="hover:text-yellow-400 font-semibold transition-colors">Media</Link>
              <Link href="#education" className="hover:text-yellow-400 font-semibold transition-colors">Education</Link>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle navigation"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-blue-950 p-4 mt-4">
              <div className="flex flex-col space-y-4">
                <Link href="#healthcare" className="text-white hover:text-yellow-400 transition-colors">Healthcare</Link>
                <Link href="#finance" className="text-white hover:text-yellow-400 transition-colors">Finance</Link>
                <Link href="#retail" className="text-white hover:text-yellow-400 transition-colors">Retail</Link>
                <Link href="#manufacturing" className="text-white hover:text-yellow-400 transition-colors">Manufacturing</Link>
                <Link href="#logistics" className="text-white hover:text-yellow-400 transition-colors">Logistics</Link>
                <Link href="#media" className="text-white hover:text-yellow-400 transition-colors">Media</Link>
                <Link href="#education" className="text-white hover:text-yellow-400 transition-colors">Education</Link>
              </div>
            </div>
          )}
        </nav>
      </section>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 right-4 bg-gray-500 z-20 text-white p-3 rounded-full hover:bg-black transition-colors duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      {/* Sections with IDs */}
      <section id="healthcare" className="w-full overflow-x-hidden py-8 sm:py-12">
        <Healthcare />
      </section>

      <section id="finance" className="w-full overflow-x-hidden py-8 sm:py-12">
        <Finance />
      </section>

      <section id="retail" className="w-full overflow-x-hidden py-8 sm:py-12">
        <Retail />
      </section>

      <section id="manufacturing" className="w-full overflow-x-hidden py-8 sm:py-12">
        <Manufacturing />
      </section>

      <section id="logistics" className="w-full overflow-x-hidden py-8 sm:py-12">
        <Logistics />
      </section>

      <section id="media" className="w-full overflow-x-hidden py-8 sm:py-12">
        <Media />
      </section>

      <section id="education" className="w-full overflow-x-hidden py-8 sm:py-12">
        <Education />
      </section>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .transition-transform {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Industries;
