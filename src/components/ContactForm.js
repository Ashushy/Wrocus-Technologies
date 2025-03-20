'use client'
import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({onClose, isCloseBtnVisible = false}) => {
    const[loading,setLoading]=useState(false)
    

 
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        websiteurl: '',
        email: '',
        company: '',
        phonenumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            // await axios.post('http://localhost:3000/api/users', userData);
            await axios.post('https://www.wrocus.com/api/users', userData);

           
            toast.success('Your message has been sent successfully!', { autoClose: 3000 });
            setUserData({
                firstname: '',
                lastname: '',
                websiteurl: '',
                email: '',
                company: '',
                phonenumber: '',
                message: ''
            });
            //  setTimeout(()=>{
                // onClose(false);
                setLoading(false)
            //  },3000)
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error('There was an error sending your message. Please try again.', { autoClose: 3000 });
        }

        console.log("userData", userData);
    };

    return (
        <div className='justify-center'>
             <ToastContainer 
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999,
                    pointerEvents: 'none',
                }} 
            />
            <div className='bg-gray-100 p-10'>
                <div className='bg-white p-10'>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium">First name</label>
                                <input type="text" id="first_name" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required
                                    onChange={handleChange}
                                    name='firstname'
                                    value={userData.firstname}
                                />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium">Last name</label>
                                <input type="text" id="last_name" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required
                                    onChange={handleChange}
                                    name='lastname'
                                    value={userData.lastname}
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block mb-2 text-sm font-medium">Company</label>
                                <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="optional"
                                    onChange={handleChange}
                                    name='company'
                                    value={userData.company}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium">PhoneNumber</label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="123-45-678"
                                    required
                                    onChange={handleChange}
                                    name='phonenumber'
                                    value={userData.phonenumber}
                                />
                            </div>
                            <div>
                                <label htmlFor="website" className="block mb-2 text-sm font-medium">Website URL</label>
                                <input
                                    type="text"
                                    id="website"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="optional"
                                    onChange={handleChange}
                                    name='websiteurl'
                                    value={userData.websiteurl}
                                    required={false}
                                />
                            </div>
                            <div className="">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email address</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com"
                                    required
                                    onChange={handleChange}
                                    name='email'
                                    value={userData.email}
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                                placeholder="Message"
                                required
                                onChange={handleChange}
                                name="message"
                                value={userData.message}
                            />
                        </div>
                       <div className='flex justify-between'>
                       <button type="submit"
                        disabled={loading} 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                            
                            {loading ? 'Sending...' : 'Submit'}
                            
                            </button>
                           {isCloseBtnVisible && <button type="submit"

                            onClick={()=>onClose(false)}
                        disabled={loading} 
                        className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                            
                           close
                            
                            </button>}
                           

                       </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
