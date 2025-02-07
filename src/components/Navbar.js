'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useAuth from '@/hooks/useAuth';
import { IF } from './IF';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [navbarStyle, setNavbarStyle] = useState('translate-y-0');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const dropdownRef = useRef(null);
    // const [name, setName] = useState('');
    const { name, isAdmin } = useAuth();
    console.log({ name, isAdmin });
    const[user,setUser]=useState(null)


    const toggleSidebar = () => setIsSidebarOpen(prevState => !prevState);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setShowScrollTop(scrollTop > 300);
        setIsNavbarFixed(scrollTop > 50);
        setNavbarStyle(scrollTop > lastScrollTop ? '-translate-y-20' : 'translate-y-0');
        setLastScrollTop(scrollTop);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdown(null);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleClickOutside);
        };
    }, [lastScrollTop]);

    const handleLogout = () => {
        localStorage.removeItem('token')
        
        
    
        
    }

    return (
        <>
            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
                    <div className="absolute top-20 right-0 bg-white w-64 h-full shadow-lg">
                        <button className=" mt-4  p-2 lg:p-4 text-lg font-semibold" onClick={toggleSidebar}>
                            Close
                        </button>
                        <nav className="flex flex-col p-4">
                            <Link href="/" className="py-2 lg:text-lg text-sm">Home</Link>
                            <Link href="/talentrecruitment" className="py-2 lg:text-lg text-sm">Talent Recruitment</Link>

                            <div className="relative"
                                onMouseEnter={() => setDropdown('services')}
                                onMouseLeave={() => setDropdown(null)}

                                ref={dropdownRef}
                            >
                                <button className="flex justify-between items-center text-black hover:text-blue-800 focus:outline-none w-full lg:text-lg text-sm">
                                    Services <ArrowDropDownIcon />
                                </button>
                                {dropdown === 'services' && (
                                    <ul className="absolute top-full left-0 bg-white text-black rounded-lg shadow-md w-48">
                                        <li><Link href="/design" className="block px-4 py-2 hover:bg-gray-200 text-sm">Design & Build</Link></li>
                                        <li><Link href="/cloudconsulting" className="block px-4 py-2 hover:bg-gray-200 text-sm">Cloud Consultancy</Link></li>
                                        <li><Link href="/managedservice" className="block px-4 py-2 hover:bg-gray-200 text-sm">Advisory & Managed Services</Link></li>
                                        <li><Link href="/salesforce" className="block px-4 py-2 hover:bg-gray-200 text-sm">Salesforce Services</Link></li>
                                        <li><Link href="/quality" className="block px-4 py-2 hover:bg-gray-200 text-sm">Quality Automation</Link></li>
                                        <li><Link href="/analytics" className="block px-4 py-2 hover:bg-gray-200 text-sm">Web Analytics</Link></li>
                                        <li><Link href="/staffaugmentation" className="block px-4 py-2 hover:bg-gray-200 text-sm">Staff Augmentation</Link></li>
                                    </ul>
                                )}
                            </div>

                            <Link href="/odoo" className="py-2 lg:text-lg text-sm">Odoo</Link>
                            <Link href="/about" className="py-2 lg:text-lg text-sm">About</Link>
                            <Link href="/carrier" className="py-2 lg:text-lg text-sm">carrier</Link>


                        </nav>
                    </div>
                </div>
            )}



            {/* Main Navbar */}
            <nav className={`sticky top-0 bg-white p-2 z-40 w-full transition-transform duration-300 ${navbarStyle}`}>
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="text-black text-lg font-bold p-5">
                        <Link href="/">
                            <img src="wrocus.png" style={{ height: '40px' }} alt="Logo" />
                        </Link>
                    </div>
                    <button
                        aria-label="Toggle navigation"
                        aria-expanded={isSidebarOpen}
                        className="text-black lg:hidden"
                        onClick={toggleSidebar}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <div className="hidden lg:flex lg:items-center lg:justify-center flex-grow">
                        <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 gap-2 text-md ">
                            <li><Link href="/" className="text-black hover:text-blue-800">Home</Link></li>
                            <li><Link href="/talentrecruitment" className="text-black hover:text-blue-800">Talent Recruitment</Link></li>
                            <li className="relative" onMouseEnter={() => setDropdown('services')} onMouseLeave={() => setDropdown(null)} ref={dropdownRef}>
                                <button className="text-black hover:text-blue-800 focus:outline-none">
                                    Services <ArrowDropDownIcon />
                                </button>
                                {dropdown === 'services' && (
                                    <ul className="absolute top-full left-0 bg-white text-black text-sm rounded-lg p-6" style={{ width: '300px' }}>
                                        <li><Link href="/design" className="block px-4 py-2 hover:bg-gray-200" >Design & Build</Link></li>
                                        <li><Link href="/cloudconsulting" className="block px-4 py-2 hover:bg-gray-200">Cloud Consulting</Link></li>
                                        <li><Link href="/managedservice" className="block px-4 py-2 hover:bg-gray-200">Advisory & Managed Services</Link></li>
                                        <li><Link href="/salesforce" className="block px-4 py-2 hover:bg-gray-200"> Salesforce Services</Link></li>
                                        <li><Link href="/quality" className="block px-4 py-2 hover:bg-gray-200">Quality Automation</Link></li>
                                        <li><Link href="/analytics" className="block px-4 py-2 hover:bg-gray-200"> Web Analytics</Link></li>
                                        <li><Link href="/staffaugmentation" className="block px-4 py-2 hover:bg-gray-200"> Staff Augmentaion</Link></li>

                                        {/* Other services... */}
                                    </ul>
                                )}
                            </li>
                            <li><Link href="/odoo" className="text-black hover:text-blue-800">Odoo</Link></li>
                            <li><Link href="/about" className="text-black hover:text-blue-800">About</Link></li>
                            <li><Link href="/career" className="text-black hover:text-blue-800">Career</Link></li>
                            <IF condition={isAdmin}>
                                <li><Link href="/createjob" className="text-black hover:text-blue-800">create jobs</Link></li>
                            </IF>
                        </ul>

                    </div>
                    <IF condition={!isAdmin}>
                        <Link href="/contact">
                            <button className='bg-black text-white p-2 rounded-lg'>Get In Touch</button>
                        </Link>
                    </IF>
                    {!name ? <Link href='/userauth'>
                        {/* <button className=' text-black ml-5 p-3 rounded-lg sm:block'>login</button> */}
                    </Link> : name}
                    {
                        name ? <button onClick={handleLogout} className=' text-black ml-5 p-3 rounded-lg sm:block'>logout</button>
                            : null
                    }

                </div>
            </nav>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-gray-500 z-20 text-white p-3 rounded-full hover:bg-black transition-colors duration-300"
                    aria-label="Scroll to top"
                >
                    <ArrowUpwardIcon style={{ fontSize: 30 }} />
                </button>
            )}
        </>
    );
};

export default Navbar;


