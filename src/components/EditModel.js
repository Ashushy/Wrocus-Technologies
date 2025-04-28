// 'use client';

// import React, { useEffect, useState } from 'react';
// import { IF } from './IF';

// const EditModel = ({ onClose, handleSubmit,userData }) => {
//     const [formData, setFormData] = useState(userData);
    
//     // Update form data state
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleClose = (e) => {
//         e.stopPropagation()
//         onClose();
//     }
//     //  const handleSubmit=()=>{
//     //     console.log("submit button is clicked")
//     //  }
//     return (
//         <>
//                 <div
//                     className="fixed inset-0 z-40 bg-black bg-opacity-50"
//                     onClick={onClose} // Close modal when clicking on the overlay
//                 ></div>

//                 <div id="timeline-modal" onClick={handleClose} tabindex="-1" aria-hidden="true" className="z-40, flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">

//                     <div onClick={(e)=>e.stopPropagation()} className="relative z-50 p-4 w-full max-w-lg max-h-full bg-white rounded-lg shadow dark:bg-gray-700 overflow-auto">
//                         <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                             <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
//                                 Modify Job Details
//                             </h3>
//                             <button
//                                 type="button"
//                                 onClick={onClose}
//                                 className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                             >
//                                 <svg
//                                     className="w-3 h-3"
//                                     aria-hidden="true"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 14 14"
//                                 >
//                                     <path
//                                         stroke="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                                     />
//                                 </svg>
//                                 <span className="sr-only">Close modal</span>
//                             </button>
//                         </div>
//                         <div className="p-4 md:p-5">
//                             <form
//                                 className="space-y-4"
//                                 onSubmit={(e) => {
//                                     e.preventDefault();
//                                     handleSubmit(formData);
//                                 }}
//                             >
//                                 {/** Job Details */}
//                                 <div>
//                                     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                                         Job Title
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="jobtitle"
//                                         value={formData.jobtitle}
//                                         onChange={handleInputChange}
//                                         className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                                         placeholder="Enter job title"
//                                         required
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                                         Job Description
//                                     </label>
//                                     <textarea
//                                         name="jobdescription"
//                                         value={formData.jobdescription}
//                                         onChange={handleInputChange}
//                                         className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                                         placeholder="Enter job description"
//                                         required
//                                     ></textarea>
//                                 </div>

//                                 {/** Location */}
//                                 <div>
//                                     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                                         Location
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="location"
//                                         value={formData.location}
//                                         onChange={handleInputChange}
//                                         className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                                         placeholder="Enter location"
//                                         required
//                                     />
//                                 </div>

//                                 {/** Job Type */}
//                                 <div>
//                                     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                                         Job Type
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="jobtype"
//                                         value={formData.jobtype}
//                                         onChange={handleInputChange}
//                                         className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                                         placeholder="e.g., Full-time, Part-time"
//                                         required
//                                     />
//                                 </div>

//                                 {/** Additional Fields */}
//                                 {['salary', 'company', 'email', 'applicationdeadline', 'skill', 'experience', 'jobcategory', 'benefit'].map(
//                                     (field) => (
//                                         <div key={field}>
//                                             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                                                 {field.charAt(0).toUpperCase() + field.slice(1)}
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name={field}
//                                                 value={formData[field]}
//                                                 onChange={handleInputChange}
//                                                 className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                                                 placeholder={`Enter ${field}`}
//                                             />
//                                         </div>
//                                     )
//                                 )}

//                                 <button
//                                     type="submit"
//                                     className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                                 >
//                                     Submit
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>

//         </>
//     );
// };

// export default EditModel;


//---------------


'use client';
import React, { useState, useEffect } from 'react';

const EditModel = ({ onClose, userData }) => {
  const [formData, setFormData] = useState({
    company: '',
    jobtitle: '',
    location: '',
    email: '',
    experience: '',
    jobcategory: '',
    jobtype: '',
    salary: '',
    benefit: '',
    jobdescription: '',
    applicationdeadline: '',
    skill: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Initialize form data when component mounts or userData changes
  useEffect(() => {
    if (userData) {
      console.log('Received userData:', userData); // Debug log
      if (!userData._id) {
        console.error('Missing _id in userData:', userData);
        setError('Invalid job data: Missing ID');
      }
      
      setFormData({
        company: userData.company || '',
        jobtitle: userData.jobtitle || userData.job_title || '',
        location: userData.location || '',
        email: userData.email || userData.contact_email || '',
        experience: userData.experience || userData.experience_level || '',
        jobcategory: userData.jobcategory || userData.job_category || '',
        jobtype: userData.jobtype || userData.job_type || '',
        salary: userData.salary || '',
        benefit: userData.benefit || '',
        jobdescription: userData.jobdescription || userData.job_description || '',
        applicationdeadline: userData.applicationdeadline || userData.application_deadline || '',
        skill: userData.skill || '',
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate we have an ID
    if (!userData?._id) {
      setError('Cannot update: Missing job post ID');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`https://wrocus-technology-backend.onrender.com/api/updatejobpost/${userData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company: formData.company,
          job_title: formData.jobtitle,
          location: formData.location,
          contact_email: formData.email,
          experience_level: formData.experience,
          job_category: formData.jobcategory,
          job_type: formData.jobtype,
          salary: formData.salary,
          benefit: formData.benefit,
          job_description: formData.jobdescription,
          application_deadline: formData.applicationdeadline,
          skill: formData.skill,
        }),
      });

      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to update job');
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.error('Update error:', err);
      setError(err.message || 'An error occurred while updating the job');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white py-2 z-10">
          <h2 className="text-2xl font-bold text-gray-800">Edit Job Posting</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            disabled={loading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Job updated successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                name="jobtitle"
                value={formData.jobtitle}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Contact Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experience Level
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Experience</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>

            {/* Job Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Category
              </label>
              <select
                name="jobcategory"
                value={formData.jobcategory}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Type
              </label>
              <select
                name="jobtype"
                value={formData.jobtype}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Type</option>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Salary
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Benefits */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Benefits
              </label>
              <textarea
                name="benefit"
                value={formData.benefit}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>

            {/* Job Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Description
              </label>
              <textarea
                name="jobdescription"
                value={formData.jobdescription}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              />
            </div>

            {/* Application Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Application Deadline
              </label>
              <input
                type="date"
                name="applicationdeadline"
                value={formData.applicationdeadline}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Required Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Required Skills
              </label>
              <input
                type="text"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 sticky bottom-0 bg-white py-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Job'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModel;