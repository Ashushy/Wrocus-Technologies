'use client';
import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

const ContactHomepage = () => {
    const [openContact, setOpenContact] = useState(false);

    const handleOverlayClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            setOpenContact(false);
        }
    };

    useEffect(() => {
        if (openContact) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'unset'; // Re-enable scrolling
        }
        return () => {
            document.body.style.overflow = 'unset'; // Clean up on unmount
        };
    }, [openContact]);

    return (
        <>
            <section>
                <div
                    className='relative'
                    style={{
                        backgroundImage: 'url(contactImage.jpg)',
                        height: '500px',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                >
                    <div className='absolute top-40 left-20'>
                        <p className='text-xl'>We Carry more Than Just Good Coding Skills   </p>
                        <p className='text-6xl mt-5 font-semibold mb-4'>Let's Collaborate</p>
                        <p className='text-6xl font-semibold'>for some good work</p>
                    </div>
                    <div className='absolute top-60 right-10'>
                        <button 
                            className='p-4 bg-black text-white rounded-md' 
                            onClick={() => setOpenContact(true)}
                            style={{ width: '200px' }}
                        >
                            Contact us
                        </button>
                    </div>

                    {openContact && (
                        <div 
                            id="modal-overlay"
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                            onClick={handleOverlayClick}
                            style={{ pointerEvents: 'auto' }} // Ensure overlay is clickable
                        >
                            <div className="bg-white p-8 rounded-md shadow-lg relative z-10">
                                <button 
                                    className="absolute top-4 right-4 text-xl"
                                    onClick={() => setOpenContact(false)}
                                >
                                    &times;
                                </button>
                                <ContactForm onClose={() => setOpenContact(false)} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default ContactHomepage;
