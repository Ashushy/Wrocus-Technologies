// 'use client'
// import EditModel from '@/components/EditModel';
// import { IF } from '@/components/IF';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// const Page = () => {
//   const [jobData, setJobdata] = useState([])
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(true)
//   const [editingJob, setEditingJob] = useState(null)
//   const [formData, setFormData] = useState({
//     jobtitle: "",
//     jobdescription: '',
//     location: '',
//     jobtype: '',
//     salary: '',
//     company: '',
//     email: '',
//     applicationdeadline: '',
//     skill: '',
//     experience: '',
//     jobcategory: '',
//     benefit: ''
//   })
//   const [editModel, setEditModel] = useState(false)
//   const [deleteMessage, setDeleteMessage] = useState(null)
//   useEffect(() => {
//     getJobData();
//   }, [])
//   const getJobData = async () => {
//     try {
//       const res = await fetch('https://wrocubackendapi.onrender.com/api/getalljob')
//       if (!res.ok) {
//         throw new Error(`Error:${res.status}`)
//       }
//       const data = await res.json();
//       setJobdata(data.jobData);
//     } catch (error) {
//       setError(error, "Error Occured while fething the data")
//     }
//     finally {
//       setLoading(false)
//     }
//   }
//   const handleEditClick = (job) => {
//     setEditingJob(job._id)
//     setEditModel(true)
//     setFormData({
//       company: job.company,
//       jobtitle: job.job_title,
//       location: job.location,
//       email: job.contact_email,
//       experience: job.experience_level,
//       jobcategory: job.job_category,
//       jobtype: job.job_type,
//       salary: job.salary,
//       benefit: job.benefit,
//       jobdescription: job.job_description,
//       applicationdeadline: new Date(job.application_deadline).toISOString().substring(0, 10),
//       skill: job.skill
//     })
//   }
//   const handleSubmit = async (allData) => {
//     try {
//       const res = await fetch(`https://wrocubackendapi.onrender.com/api/updatejobpost/${editingJob}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(allData)
//       })
//       if (!res.ok) {
//         throw new Error(`error occured:${res.status}`)
//       }
//       const updatedJob = await res.json();
//       setJobdata((prevData) => prevData.map((job) => (job._id === editingJob ? updatedJob : job)))
//       setTimeout(() => {
//         setEditModel(false)
//       }, 2000);
//     } catch (error) {
//     }
//   }
//   const handleDeleteClick = async (id) => {
//     try {
//       const res = await fetch(`https://wrocubackendapi.onrender.com/api/deletejobpost/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       })
//       if (!res.ok) {
//         throw new Error(`Error:${res.status}`);
//       }
//       const data = await res.json();
//       setDeleteMessage(data.message)
//       setJobdata((prevJobs) => prevJobs.filter((job) => job._id !== id));
//       setTimeout(() => {
//         setDeleteMessage('')
//       }, 1000);
//     } catch (error) {
//     }
//   }
//   if (loading) {
//     return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <p>Loading...</p>
//     </div>
//   }
//   if (error) {
//     return <div>{error}</div>
//   }
//   return (
//     <>
//       <section className="lg:p-1  flex justify-center bg-gray-100 ">
//         <div className="max-w-7xl w-full">
//           <div className="bg-white p-4 rounded-lg ">
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl font-semibold text-gray-800"> Listings All Job </h2>
//               <section className="p-4 lg:mx-4 ">
//                 <div className="w-full max-w-lg">
//                   <div className="flex shadow-md rounded-md">
//                     <input
//                       type="text"
//                       placeholder="Search jobs..."
//                       className="flex-grow p-3 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2
//                        focus:ring-blue-500 text-gray-700 placeholder-gray-400"
//                        style={{width:'400px'}}/>
//                   </div>
//                 </div>
//               </section>
//               <div className="flex justify-end">
//                 {jobData.length > 0 ? (
//                   <Link href="/appliedjob">
//                     <button className="bg-blue-600 text-white px-5 py-3 mb-4 rounded-md hover:bg-blue-700 transition duration-200">
//                       View All Applied
//                     </button>
//                   </Link>
//                 ) : (
//                   <Link href="/createjob">
//                     <button className="bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 transition duration-200">
//                       Create Job
//                     </button>
//                   </Link>
//                 )}
//               </div>
//             </div>
//             {deleteMessage && (
//               <div className="bg-green-100 text-green-800 p-4 rounded-md my-4">
//                 {deleteMessage}
//               </div>
//             )}
//             <div className="space-y-6">
//               {jobData && jobData.length > 0 ? (
//                 jobData.map((item) => (
//                   <div
//                     key={item._id}
//                     className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
//                     {/* Header Section */}
//                     <div className="flex items-center justify-between border-b pb-4 mb-4">
//                       <h3 className="text-xl font-bold text-gray-800">{item.job_title}</h3>
//                       <p className="text-sm text-gray-500">
//                         Posted on {new Date(item.createdAt).toLocaleDateString('en-US')}
//                       </p>
//                     </div>
//                     {/* Job Details */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                       <div>
//                         <p className="text-sm text-gray-600">Company</p>
//                         <p className="font-semibold text-gray-800">{item.company}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Location</p>
//                         <p className="font-semibold text-gray-800">{item.location}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Contact Email</p>
//                         <p className="font-semibold text-gray-800">{item.contact_email}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Experience Level</p>
//                         <p className="font-semibold text-gray-800">{item.experience_level}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Category</p>
//                         <p className="font-semibold text-gray-800">{item.job_category}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Job Type</p>
//                         <p className="font-semibold text-gray-800">{item.job_type}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Salary</p>
//                         <p className="font-semibold text-gray-800">{item.salary}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Benefits</p>
//                         <p className="font-semibold text-gray-800">{item.benefit}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Application Deadline</p>
//                         <p className="font-semibold text-red-600">
//                           {new Date(item.application_deadline).toLocaleDateString('en-US')}
//                         </p>
//                       </div>
//                     </div>
//                     {/* Job Description */}
//                     <div className="mt-4">
//                       <p className="text-md text-gray-800 mt-5 ">Job Description</p>
//                       <p className="text-gray-600">{item.job_description}</p>
//                     </div>
//                     {/* Action Buttons */}
//                     <div className="flex justify-end space-x-4 mt-6">
//                       <button
//                         className="py-2 px-6 bg-blue-600 text-white rounded-md flex items-center space-x-2 hover:bg-blue-700 transition-transform hover:scale-105"
//                         onClick={() => handleEditClick(item)}
//                       >
//                         <i className="fas fa-edit"></i>
//                         <span>Edit</span>
//                       </button>

//                       <button
//                         className="py-2 px-6 bg-red-600 text-white rounded-md flex items-center space-x-2 hover:bg-red-700 transition-transform hover:scale-105"
//                         onClick={() => {
//                           const confirmDelete = window.confirm(
//                             'Are you sure you want to delete this job listing?'
//                           );
//                           if (confirmDelete) {
//                             handleDeleteClick(item._id);
//                           }
//                         }}
//                       >
//                         <i className="fas fa-trash"></i>
//                         <span>Delete</span>
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center text-gray-500">No job listings available.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//       <IF condition={editModel}>
//         <EditModel
//           onClose={() => setEditModel(false)}
//           handleSubmit={handleSubmit}
//           userData={formData} />
//       </IF>
//     </>
//   );
// }
// export default Page;


'use client';
import EditModel from '@/components/EditModel';
import { IF } from '@/components/IF';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [jobData, setJobData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    jobtitle: '',
    jobdescription: '',
    location: '',
    jobtype: '',
    salary: '',
    company: '',
    email: '',
    applicationdeadline: '',
    skill: '',
    experience: '',
    jobcategory: '',
    benefit: '',
  });

  const [editModel, setEditModel] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  useEffect(() => {
    getJobData();
  }, []);

  const getJobData = async () => {
    try {
      const res = await fetch('https://wrocubackendapi.onrender.com/api/getalljob');
      if (!res.ok) {
        throw new Error(`Error:${res.status}`);
      }
      const data = await res.json();
      setJobData(data.jobData);
    } catch (error) {
      setError(error, 'Error Occurred while fetching the data');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (job) => {
    setEditingJob(job._id);
    setEditModel(true);
    setFormData({
      company: job.company,
      jobtitle: job.job_title,
      location: job.location,
      email: job.contact_email,
      experience: job.experience_level,
      jobcategory: job.job_category,
      jobtype: job.job_type,
      salary: job.salary,
      benefit: job.benefit,
      jobdescription: job.job_description,
      applicationdeadline: new Date(job.application_deadline).toISOString().substring(0, 10),
      skill: job.skill,
    });
  };

  const handleSubmit = async (allData) => {
    try {
      const res = await fetch(`https://wrocubackendapi.onrender.com/api/updatejobpost/${editingJob}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allData),
      });
      if (!res.ok) {
        throw new Error(`Error occurred: ${res.status}`);
      }
      const updatedJob = await res.json();
      setJobData((prevData) => prevData.map((job) => (job._id === editingJob ? updatedJob : job)));
      setTimeout(() => {
        setEditModel(false);
      }, 2000);
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const res = await fetch(`https://wrocubackendapi.onrender.com/api/deletejobpost/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) {
        throw new Error(`Error:${res.status}`);
      }
      const data = await res.json();
      setDeleteMessage(data.message);
      setJobData((prevJobs) => prevJobs.filter((job) => job._id !== id));
      setTimeout(() => {
        setDeleteMessage('');
      }, 1000);
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <section className="lg:p-1 flex justify-center bg-gray-100">
        <div className="max-w-7xl w-full">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">Listings All Jobs</h2>
              <section className="p-4 lg:mx-4">
                <div className="w-full max-w-lg">
                  <div className="flex shadow-md rounded-md">
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                      style={{ width: '400px' }}
                    />
                  </div>
                </div>
              </section>
              <div className="flex justify-end">
                {jobData.length > 0 ? (
                  <Link href="/appliedjob">
                    <button className="bg-blue-600 text-white px-5 py-3 mb-4 rounded-md hover:bg-blue-700 transition duration-200">
                      View All Applied
                    </button>
                  </Link>
                ) : (
                  <Link href="/createjob">
                    <button className="bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 transition duration-200">
                      Create Job
                    </button>
                  </Link>
                )}
              </div>
            </div>

            {deleteMessage && <div className="bg-green-100 text-green-800 p-4 rounded-md my-4">{deleteMessage}</div>}

            <div className="space-y-6">
              {jobData && jobData.length > 0 ? (
                jobData.map((item) => (
                  <div key={item._id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                    <div className="flex items-center justify-between border-b pb-4 mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{item.job_title}</h3>
                      <p className="text-sm text-gray-500">Posted on {new Date(item.createdAt).toLocaleDateString('en-US')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Company</p>
                        <p className="font-semibold text-gray-800">{item.company}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-semibold text-gray-800">{item.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Contact Email</p>
                        <p className="font-semibold text-gray-800">{item.contact_email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Experience Level</p>
                        <p className="font-semibold text-gray-800">{item.experience_level}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Category</p>
                        <p className="font-semibold text-gray-800">{item.job_category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Job Type</p>
                        <p className="font-semibold text-gray-800">{item.job_type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Salary</p>
                        <p className="font-semibold text-gray-800">{item.salary}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Benefits</p>
                        <p className="font-semibold text-gray-800">{item.benefit}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Application Deadline</p>
                        <p className="font-semibold text-red-600">
                        {new Date(item.application_deadline).toLocaleDateString('en-US')}/                         </p></div>
                    </div>

                    {/* Job Description as Bullet Points */}
                    <div className="mt-4">
                      <p className="text-md font-semibold text-gray-800 mt-5">Job Description</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        {item.job_description
                          .replace(/•|-/g, '') // Remove existing bullet points (•, -)
                          .split('\n') // Split by newline
                          .map((point, index) => {
                            const trimmedPoint = point.trim();
                            if (!trimmedPoint) return null; // Ignore empty lines

                            // Extract the first few words to highlight
                            const words = trimmedPoint.split(' ');
                            const highlightText = words.slice(0, 3).join(' '); // Highlight first 3 words
                            const remainingText = words.slice(3).join(' ');

                            return (
                              <li key={index} className="text-gray-700">
                                <span className="font-semibold text-gray-900">{highlightText}</span> {remainingText}
                              </li>
                            );
                          })}
                      </ul>
                    </div>



                    <div className="flex justify-end space-x-4 mt-6">
                      <button className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={() => handleEditClick(item)}>
                        Edit
                      </button>
                      <button
                        className="py-2 px-6 bg-red-600 text-white rounded-md hover:bg-red-700"
                        onClick={() => window.confirm('Are you sure?') && handleDeleteClick(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No job listings available.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <IF condition={editModel}>
        <EditModel onClose={() => setEditModel(false)} handleSubmit={handleSubmit} userData={formData} />
      </IF>
    </>
  );
};

export default Page;
