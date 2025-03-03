"use client";
import React, { useEffect } from "react";

const ViewJobModal = ({ isOpen, closeModal, job }) => {
    if (!isOpen || !job) return null;

    // Disable background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Convert job description into bullet points
    const jobDescriptionPoints = job.job_description
        ? job.job_description.split("\n").filter((point) => point.trim() !== "").map((point) => `${point.trim()}`)
        : [];

    return (
        <div className="fixed inset-0 flex items-start justify-center bg-gray-900 bg-opacity-50 p-4">
            {/* Modal Container with spacing from navbar */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[85vh] overflow-y-auto mt-24">
                <h2 className="text-2xl font-bold text-blue-600">{job.job_title}</h2>
                <div className="mt-4 space-y-2 text-gray-800">
                    <p><strong>Company:</strong> {job.company}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Email:</strong> {job.contact_email}</p>
                    <p><strong>Experience Level:</strong> {job.experience_level}</p>
                    <p><strong>Job Category:</strong> {job.job_category}</p>
                    <p><strong>Job Type:</strong> {job.job_type}</p>
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Benefits:</strong> {job.benefit}</p>
                    <p><strong>Application Deadline:</strong> {new Date(job.application_deadline).toDateString()}</p>
                    
                    {/* Job Description in Proper Bullet Points */}
                    {jobDescriptionPoints.length > 0 && (
                        <div>
                            <strong>Job Description:</strong>
                            <ul className=" mt-2 space-y-2 pl-4 text-gray-700">
                                {jobDescriptionPoints.map((point, index) => (
                                    <li key={index} className="leading-relaxed">{point}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Close Button */}
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={closeModal}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ViewJobModal;
