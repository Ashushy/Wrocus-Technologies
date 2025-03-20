// 'use client'
// import React, { useEffect, useState } from 'react';
// import ApplyJobModel from '@/components/ApplyJobModel';
// import ViewJobModal from '@/components/ViewJobModal';
// import Sidebar from '@/components/Sidebar';

// const Page = () => {
//     const [jobData, setJobdata] = useState([]);
//     const [selectedJob, setSelectedJob] = useState(null);
//     const [selectedJobId, setSelectedJobId] = useState(null);
//     const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
//     const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [filteredData, setFilteredData] = useState('');
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         getJobData(filteredData);
//     }, [filteredData]);

//     const getJobData = async (filteredData) => {
//         try {
//             const queryString = new URLSearchParams(filteredData || {}).toString();
//             console.log("Fetching jobs with query string:", queryString);
//             const res = await fetch(`https://wrocubackendapi.onrender.com/api/getalljob?${queryString}`);
//             if (!res.ok) throw new Error('Failed to fetch job data');
//             const data = await res.json();
//             setJobdata(data.jobData);
//             setLoading(false);
//         } catch (error) {
//             console.log("Error fetching job data:", error.message);
//         }
//     };

//     const handleApply = (jobId) => {
//         setSelectedJobId(jobId);
//         setIsApplyModalOpen(true);
//     };

//     const handleReadMore = (job) => {
//         setSelectedJob(job);
//         setIsViewModalOpen(true);
//     };

//     const handleSubmit = async (formData) => {
//         const payLoad = new FormData();
//         payLoad.append('name', formData.name || '');
//         payLoad.append('email', formData.email || '');
//         payLoad.append('date', formData.date || '');
//         payLoad.append('contactNumber', formData.contactNumber || '');
//         payLoad.append('currentCTC', formData.currentCTC || '');
//         payLoad.append('expectedCTC', formData.expectedCTC || '');
//         payLoad.append('currentOrganization', formData.currentOrganization || '');
//         payLoad.append('noticeperiod', formData.noticeperiod || '');
//         payLoad.append('willingToRelocate', formData.willingToRelocate ? 'true' : 'false');
    
//         if (formData.resume) {
//             payLoad.append('resume', formData.resume);
//         }
    
//         payLoad.append('selectedJobId', selectedJobId || '');
    
//         // Debugging: Check what is being added to FormData
//         console.log("🔍 FormData content before sending:");
//         for (let pair of payLoad.entries()) {
//             console.log(pair[0] + ':', pair[1]);
//         }
    
//         try {
//             const res = // const res = await fetch('https://wrocubackendapi.onrender.com/api/applyjob', 
//              await fetch(('http://localhost:5001/api/applyjob')
//             , {
//                 method: 'POST',
//                 body: payLoad,
//             });
    
//             if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    
//             const data = await res.json();
//             setSuccessMessage(data.message);
    
//             setTimeout(() => {
//                 setIsApplyModalOpen(false);
//                 setSuccessMessage('');
//             }, 1000);
//         } catch (error) {
//             console.error('❌ Error during the request:', error.message);
//         }
//     };
//     return (
//         <>
//             <section className="lg:p-2 p-4 min-h-screen bg-gray-200">
//                 <div className="grid grid-cols-12 gap-4">
//                     <div className="col-span-3 mt-1 rounded-lg">
//                         <Sidebar onFilterApply={setFilteredData} />
//                     </div>
//                     {loading ? (
//                         <div className="flex justify-center items-center h-screen w-full">
//                             <p className="text-gray-600 text-lg font-medium">Loading jobs...</p>
//                         </div>
//                     ) : (
//                         <div className="col-span-9 p-2 rounded-lg">
//                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                                 {jobData.length > 0 ? (
//                                     jobData.map((item) => {
//                                         const deadline = new Date(item.application_deadline);
//                                         const today = new Date();
//                                         const isDeadlinePassed = deadline < today;

//                                         return (
//                                             <div key={item._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
//                                                 <h3 className="text-2xl font-bold text-blue-600">{item.job_title}</h3>
//                                                 <div className="text-md text-gray-700 space-y-3">
//                                                     <p><strong>Salary:</strong> {item.salary}</p>
//                                                     <p><strong>Location:</strong> {item.location}</p>
//                                                     <p><strong>Experience Level:</strong> {item.experience_level} {item.experience_level === 'fresher' ? '' : ' Years'}</p>
//                                                     <p><strong>Work Mode:</strong> {item.job_type}</p>
//                                                     <p><strong>Job Category:</strong> {item.job_category}</p>
//                                                     {/* <p><strong>Application Deadline:</strong> {deadline.toDateString()}</p> */}
//                                                 </div>
//                                                 <div className="mt-4 flex justify-between">
//                                                     <button 
//                                                         onClick={() => handleReadMore(item)} 
//                                                         className="text-blue-600 hover:underline">
//                                                         Read More...
//                                                     </button>
//                                                     {isDeadlinePassed ? (
//                                                         <span className="py-2 px-4 bg-gray-400 text-white rounded-md cursor-not-allowed">
//                                                             Application Closed
//                                                         </span>
//                                                     ) : (
//                                                         <button 
//                                                             onClick={() => handleApply(item._id)} 
//                                                             className="py-2 px-4 bg-blue-600 text-white rounded-md hover:scale-105 transform transition duration-300">
//                                                             Apply Now
//                                                         </button>
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         );
//                                     })
//                                 ) : (
//                                     <p className="text-gray-600 text-lg font-medium text-center">No jobs available right now. Check back later!</p>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </section>

//             {/* View Job Modal */}
//             <ViewJobModal 
//                 isOpen={isViewModalOpen} 
//                 closeModal={() => setIsViewModalOpen(false)} 
//                 job={selectedJob} 
//             />
//             {/* Apply Job Modal */}
//             <ApplyJobModel 
//                 isOpen={isApplyModalOpen} 
//                 closeModal={() => setIsApplyModalOpen(false)} 
//                 onSubmit={handleSubmit} 
//                 successMessage={successMessage} 
//             />
//         </>
//     );
// };

// export default Page;


'use client'
import React, { useEffect, useState } from 'react';
import ApplyJobModel from '@/components/ApplyJobModel';
import ViewJobModal from '@/components/ViewJobModal';
import Sidebar from '@/components/Sidebar';

const Page = () => {
    const [jobData, setJobdata] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [filteredData, setFilteredData] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getJobData(filteredData);
    }, [filteredData]);

    const getJobData = async (filteredData) => {
        try {
            const queryString = new URLSearchParams(filteredData || {}).toString();
            console.log("Fetching jobs with query string:", queryString);
            // const res = await fetch(`https://wrocubackendapi.onrender.com/api/getalljob?${queryString}`);
            const res = await fetch(`https://wrocus-technology-backend.onrender.com/api/getalljob?${queryString}`);

            if (!res.ok) throw new Error('Failed to fetch job data');
            const data = await res.json();
            setJobdata(data.jobData);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching job data:", error.message);
        }
    };

    const handleApply = (jobId) => {
        setSelectedJobId(jobId);
        setIsApplyModalOpen(true);
    };

    const handleReadMore = (job) => {
        setSelectedJob(job);
        setIsViewModalOpen(true);
    };

    const handleSubmit = async (formData) => {
        const payLoad = new FormData();
        payLoad.append('name', formData.name || '');
        payLoad.append('email', formData.email || '');
        payLoad.append('date', formData.date || '');
        payLoad.append('contactNumber', formData.contactNumber || '');
        payLoad.append('currentCTC', formData.currentCTC || '');
        payLoad.append('expectedCTC', formData.expectedCTC || '');
        payLoad.append('currentOrganization', formData.currentOrganization || '');
        payLoad.append('noticeperiod', formData.noticeperiod || '');
        payLoad.append('willingToRelocate', formData.willingToRelocate ? 'true' : 'false');

        if (formData.resume) {
            payLoad.append('resume', formData.resume);
        }

        payLoad.append('selectedJobId', selectedJobId || '');

        try {
            const res = await fetch(('https://wrocus-technology-backend.onrender.com/api/applyjob'), {
                method: 'POST',
                body: payLoad,
            });

            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

            const data = await res.json();
            setSuccessMessage(data.message);

            setTimeout(() => {
                setIsApplyModalOpen(false);
                setSuccessMessage('');
            }, 1000);
        } catch (error) {
            console.error('❌ Error during the request:', error.message);
        }
    };

    return (
        <>
            <section className="lg:p-2 p-4 min-h-screen bg-gray-200">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3 mt-1 rounded-lg">
                        <Sidebar onFilterApply={setFilteredData} />
                    </div>
                    {loading ? (
                        <div className="flex justify-center items-center h-screen w-full">
                            <p className="text-gray-600 text-lg font-medium">Loading jobs...</p>
                        </div>
                    ) : (
                        <div className="col-span-9 p-2 rounded-lg">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {jobData.length > 0 ? (
                                    jobData.map((item) => (
                                        <div key={item._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                            <h3 className="text-2xl font-bold text-blue-600">{item.job_title}</h3>
                                            <div className="text-md text-gray-700 space-y-3">
                                                <p><strong>Salary:</strong> {item.salary}</p>
                                                <p><strong>Location:</strong> {item.location}</p>
                                                <p><strong>Experience Level:</strong> {item.experience_level} {item.experience_level === 'fresher' ? '' : ' Years'}</p>
                                                <p><strong>Work Mode:</strong> {item.job_type}</p>
                                                <p><strong>Job Category:</strong> {item.job_category}</p>
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <button 
                                                    onClick={() => handleReadMore(item)} 
                                                    className="text-blue-600 hover:underline">
                                                    Read More...
                                                </button>
                                                <button 
                                                    onClick={() => handleApply(item._id)} 
                                                    className="py-2 px-4 bg-blue-600 text-white rounded-md hover:scale-105 transform transition duration-300">
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-600 text-lg font-medium text-center">No jobs available right now. Check back later!</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* View Job Modal */}
            <ViewJobModal 
                isOpen={isViewModalOpen} 
                closeModal={() => setIsViewModalOpen(false)} 
                job={selectedJob} 
            />
            {/* Apply Job Modal */}
            <ApplyJobModel 
                isOpen={isApplyModalOpen} 
                closeModal={() => setIsApplyModalOpen(false)} 
                onSubmit={handleSubmit} 
                successMessage={successMessage} 
            />
        </>
    );
};

export default Page;
