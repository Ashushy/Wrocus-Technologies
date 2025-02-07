'use client'
import ApplyJobModel from '@/components/ApplyJobModel';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [jobData, setJobdata] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const [expandedDescriptions, setExpandedDescriptions] = useState({}); // For tracking expanded job descriptions
    const [filteredData, setFilteredData] = useState('')
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getJobData(filteredData);
    }, [filteredData]);

    const getJobData = async (filteredData) => {
        try {
            const queryString = new URLSearchParams(filteredData || {}).toString();
            console.log("Fetching jobs with query string:", queryString);
            const res = await fetch(`https://wrocubackendapi.onrender.com/api/getalljob?${queryString}`, {
                method: 'get',
                headers: {

                }
            });
            if (!res.ok) throw new Error('Failed to fetch job data');
            const data = await res.json();
            console.log("Fetched data:", data);  // Log the response from the backend
            setJobdata(data.jobData);
            setLoading(false)
        } catch (error) {
            console.log("Error fetching job data:", error.message);
        }
    };

    const handleApply = (jobId) => {
        setSelectedJobId(jobId);
        setIsOpenModal(true);
    };

    const handleSubmit = async (formData) => {
        const payLoad = new FormData();
        payLoad.append('name', formData.name);
        payLoad.append('email', formData.email);
        payLoad.append('noticeperiod', formData.noticeperiod);
        if (formData.resume) {
            payLoad.append('resume', formData.resume);
        }
        payLoad.append('selectedJobId', selectedJobId);

        try {
            const res = await fetch('https://wrocubackendapi.onrender.com/api/applyjob', {
                method: 'POST',
                body: payLoad,
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json();
            setSuccessMessage(data.message);
            setTimeout(() => {
                setIsOpenModal(false);
                setSuccessMessage('');
            }, 1000);
        } catch (error) {
            console.error('Error during the request:', error.message);
        }
    };

    const toggleDescription = (jobId) => {
        setExpandedDescriptions(prevState => ({
            ...prevState,
            [jobId]: !prevState[jobId]
        }));
    };

    const onFilterApply = (filter) => {
        setFilteredData(filter)
        console.log("filter", filter)
    }

    return (
        <>
            {/*   <Navbar /> */}

            <section className="lg:p-2 p-4 min-h-screen bg-gray-200">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3  mt-1 rounded-lg ">
                        <Sidebar onFilterApply={onFilterApply} />
                    </div>
                    {loading ?
                        (
                            <div style={{ display: 'flex', justifyContent: 'center', item: 'center', height: '1000px', width: '1000px' }}>
                                <div role="status">
                                    <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )

                        : <div className="col-span-9  p-2 rounded-lg ">
                            <h2 className="text-2xl bg-gray-100 font-bold mb-3 text-center  text-black-600">
                                {/* <span className="text-black-500">  Job Opportunities</span> */}
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {jobData && jobData.length > 0 ? (
                                    jobData.map((item) => (
                                        <div
                                            key={item._id}
                                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                        >
                                            <div className="mb-4">
                                                <h3 className="text-2xl font-bold text-blue-600"> {item.job_title}</h3>
                                            </div>

                                            <div className="text-md  text-gray-700 space-y-3">
                                                <p><strong className="font-medium">Salary:</strong> {item.salary}</p>
                                                <p><strong className="font-medium">Location:</strong> {item.location}</p>
                                                <p><strong className="font-medium">Contact Email:</strong> {item.contact_email}</p>
                                                <p><strong className="font-medium">Experience Level:</strong> {item.experience_level}{item.experience_level === 'fresher' ? '' : ' Years'}</p>
                                                <p><strong className="font-medium">Work Mode:</strong> {item.job_type}</p>
                                                <p><strong className="font-medium">Job Category:</strong> {item.job_category}</p>

                                                <p><strong className="font-medium">Posted On:</strong> {new Date(item.createdAt).toLocaleDateString('en-US')}</p>
                                                <p><strong className="font-medium">Deadline:</strong> {new Date(item.application_deadline).toLocaleDateString('en-US')}</p>
                                                <p><strong className="font-medium">Benefit:</strong> {item.benefit}</p>

                                                {expandedDescriptions[item._id]
                                                    ? <p><strong className="font-medium">Job Description:</strong>{item.job_description}</p> : ''
                                                }


                                                <button onClick={() => toggleDescription(item._id)}
                                                    className="text-blue-600 hover:underline"
                                                >{expandedDescriptions[item._id] ? 'Read Less' : 'Read More...'}</button>

                                            </div>

                                            <div className="text-center mt-6">
                                                <button
                                                    onClick={() => handleApply(item._id)}
                                                    className="py-2 px-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:scale-105 transform transition duration-300"
                                                >
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (


                                    <div
                                        className="flex justify-end items-enda h-screen w-full"
                                    >
                                        <p className="text-gray-600 text-lg font-medium">
                                            No jobs available right now. Check back later!
                                        </p>
                                    </div>




                                )}
                            </div>

                        </div>}

                </div>
            </section>

            <ApplyJobModel
                isOpen={isOpenModal}
                closeModal={() => setIsOpenModal(false)}
                onSubmit={handleSubmit}
                successMessage={successMessage}
            />
        </>
    );
}

export default Page;
