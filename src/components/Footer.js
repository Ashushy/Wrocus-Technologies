// components/Footer.js
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Wrocus Technology</h3>
            <p className="text-gray-400 mb-2">D-76, Noida  Sector 63</p>
            <p className="text-gray-400 mb-2">Noida, Uttar Pradesh, 201301</p>
            <p className="text-gray-400 mb-2">Phone: 0120-496-3453

            </p>
            <p className="text-gray-400">Email: info@wrocus.com

            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">Case Study</Link></li>
              <li><Link href="/talentrecruitment" className="text-gray-400 hover:text-white">Industries</Link></li>
              
            
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
             
              {/* <a href="" className="text-gray-400 hover:text-white" target='blank'><FaTwitter /></a> */}
              <a href="https://www.linkedin.com/company/wrocus/?originalSubdomain=in" target='_blank' className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
              <a href="https://www.facebook.com/wrocustechnologies" target='_blank' className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="https://www.instagram.com/_wrocus_/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Sign up for our newsletter to get the latest updates and offers.</p>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded bg-gray-700 text-gray-300 mb-2"
              />
              <button
                type="submit"
                className="w-full p-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Wrocus Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
