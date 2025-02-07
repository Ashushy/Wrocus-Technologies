'use client';

import React, { useEffect, useState } from 'react';
import { IF } from './IF';

const EditModel = ({ onClose, handleSubmit,userData }) => {
    const [formData, setFormData] = useState(userData);
    
    // Update form data state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClose = (e) => {
        e.stopPropagation()
        onClose();
    }

    return (
        <>
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50"
                    onClick={onClose} // Close modal when clicking on the overlay
                ></div>

                <div id="timeline-modal" onClick={handleClose} tabindex="-1" aria-hidden="true" className="z-40, flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">

                    <div onClick={(e)=>e.stopPropagation()} className="relative z-50 p-4 w-full max-w-lg max-h-full bg-white rounded-lg shadow dark:bg-gray-700 overflow-auto">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                                Modify Job Details
                            </h3>
                            <button
                                type="button"
                                onClick={onClose}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5">
                            <form
                                className="space-y-4"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit(formData);
                                }}
                            >
                                {/** Job Details */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        name="jobtitle"
                                        value={formData.jobtitle}
                                        onChange={handleInputChange}
                                        className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Enter job title"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Job Description
                                    </label>
                                    <textarea
                                        name="jobdescription"
                                        value={formData.jobdescription}
                                        onChange={handleInputChange}
                                        className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Enter job description"
                                        required
                                    ></textarea>
                                </div>

                                {/** Location */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Enter location"
                                        required
                                    />
                                </div>

                                {/** Job Type */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Job Type
                                    </label>
                                    <input
                                        type="text"
                                        name="jobtype"
                                        value={formData.jobtype}
                                        onChange={handleInputChange}
                                        className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="e.g., Full-time, Part-time"
                                        required
                                    />
                                </div>

                                {/** Additional Fields */}
                                {['salary', 'company', 'email', 'applicationdeadline', 'skill', 'experience', 'jobcategory', 'benefit'].map(
                                    (field) => (
                                        <div key={field}>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                            </label>
                                            <input
                                                type="text"
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleInputChange}
                                                className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                placeholder={`Enter ${field}`}
                                            />
                                        </div>
                                    )
                                )}

                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default EditModel;
