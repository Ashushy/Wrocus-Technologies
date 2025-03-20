
'use client';
import EditModel from '@/components/EditModel';
import { IF } from '@/components/IF';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [jobData, setJobData] = useState([]);
  const [archivedJobs, setArchivedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredArchivedJobs, setFilteredArchivedJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState(null);
  const [editModel, setEditModel] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    getJobData();
  }, []);

  useEffect(() => {
    setFilteredJobs(
      jobData.filter((job) =>
        job.job_title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredArchivedJobs(
      archivedJobs.filter((job) =>
        job.job_title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, jobData, archivedJobs]);

  const getJobData = async () => {
    try {
      const res = await fetch('https://wrocus-technology-backend.onrender.com/api/getalljob');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      const activeJobs = data.jobData.filter(
        (job) => new Date(job.application_deadline) >= new Date()
      );
      const archivedJobs = data.jobData.filter(
        (job) => new Date(job.application_deadline) < new Date()
      );

      setJobData(activeJobs);
      setArchivedJobs(archivedJobs);
      setFilteredJobs(activeJobs);
      setFilteredArchivedJobs(archivedJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (job) => {
    setEditingJob(job._id);
    setEditModel(true);
    setFormData({
      company: job.company || '',
      jobtitle: job.job_title || '',
      location: job.location || '',
      email: job.contact_email || '',
      experience: job.experience_level || '',
      jobcategory: job.job_category || '',
      jobtype: job.job_type || '',
      salary: job.salary || '',
      benefit: job.benefit || '',
      jobdescription: job.job_description || '',
      applicationdeadline: job.application_deadline
        ? new Date(job.application_deadline).toISOString().substring(0, 10)
        : '',
      skill: job.skill || '',
    });
  };

  const handleDeleteClick = async (id) => {
    if (!window.confirm('Are you sure?')) return;

    try {
      const res = await fetch(`https://wrocus-technology-backend.onrender.com/api/deletejobpost/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      setJobData((prevJobs) => prevJobs.filter((job) => job._id !== id));
      setArchivedJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleUnarchiveClick = (id) => {
    const jobToUnarchive = archivedJobs.find((job) => job._id === id);
    if (jobToUnarchive) {
      setArchivedJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
      setJobData((prevJobs) => [...prevJobs, jobToUnarchive]);
    }
  };

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <section className="lg:p-8 flex justify-center bg-gray-50">
        <div className="max-w-7xl w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-950">Job Listings</h2>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search jobs by title..."
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 w-96"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Link href="/appliedjob">
                  <button className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition duration-200">
                    View Applied Jobs
                  </button>
                </Link>
              </div>
            </div>
            {/* Active Jobs Section */}
            <h3 className="text-2xl font-bold text-gray-950 mb-4">Active Jobs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((item) => (
                  <div key={item._id} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col h-full">
                    {/* Job Details */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900">{item.job_title}</h3>
                      <p className="text-sm text-gray-500">Posted on {new Date(item.createdAt).toLocaleDateString()}</p>

                      <p className="text-sm text-gray-600 mt-2">Company</p>
                      <p className="font-semibold text-gray-900">{item.company}</p>

                      <p className="text-sm text-gray-600 mt-2">Location</p>
                      <p className="font-semibold text-gray-900">{item.location}</p>

                      <p className="text-sm text-gray-600 mt-2">Salary</p>
                      <p className="font-semibold text-gray-900">{item.salary}</p>

                      <p className="text-sm text-gray-600 mt-2">Job Type</p>
                      <p className="font-semibold text-gray-900">{item.job_type}</p>

                      <p className="text-sm text-gray-600 mt-2">Job Category</p>
                      <p className="font-semibold text-gray-900">{item.job_category}</p>

                      <p className="text-sm text-gray-600 mt-2">Experience Level</p>
                      <p className="font-semibold text-gray-900">{item.experience_level}</p>

                      <p className="text-sm text-gray-600 mt-2">Application Deadline</p>
                      <p className="font-semibold text-red-600">{new Date(item.application_deadline).toLocaleDateString()}</p>

                      <p className="text-sm text-gray-600 mt-2">Contact Email</p>
                      <p className="font-semibold text-gray-900">{item.contact_email}</p>

                      <p className="text-sm text-gray-600 mt-2">Benefits</p>
                      <p className="font-semibold text-gray-900">{item.benefit}</p>

                      <p className="text-sm text-gray-600 mt-2">Skills Required</p>
                      <p className="font-semibold text-gray-900">{item.skill}</p>

                      {/* Job Description */}
                      <p className="text-sm text-gray-600 mt-2">Job Description</p>
                      <div className="text-gray-700">
                        {expandedDescriptions[item._id] ? (
                          <ul className="list-disc pl-5">
                            {item.job_description.split('\n').map((line, index) => (
                              <li key={index}>{line}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{`${item.job_description.split(' ').slice(0, 20).join(' ')}...`}</p>
                        )}
                      </div>
                      <button
                        className="text-blue-600 hover:underline mt-2"
                        onClick={() => toggleDescription(item._id)}
                      >
                        {expandedDescriptions[item._id] ? 'Read Less' : 'Read More'}
                      </button>
                    </div>
                    {/* Buttons: Properly aligned at the bottom */}
                    <div className="flex  ml-24 space-x-4 mt-auto">
                      <button
                        className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="py-2 px-6 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
                        onClick={() => handleDeleteClick(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-950 col-span-3">No jobs found.</p>
              )}
            </div>
            {/* Archived Jobs Section */}
            <h3 className="text-2xl font-bold text-gray-950 mt-10 mb-4">Archived Jobs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArchivedJobs.map((item) => (
                <div key={item._id} className="bg-gray-100 border border-gray-200 rounded-lg shadow-md p-6 flex flex-col h-full">
                   <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900">{item.job_title}</h3>
                      <p className="text-sm text-gray-500">Posted on {new Date(item.createdAt).toLocaleDateString()}</p>

                      <p className="text-sm text-gray-600 mt-2">Company</p>
                      <p className="font-semibold text-gray-900">{item.company}</p>

                      <p className="text-sm text-gray-600 mt-2">Location</p>
                      <p className="font-semibold text-gray-900">{item.location}</p>

                      <p className="text-sm text-gray-600 mt-2">Salary</p>
                      <p className="font-semibold text-gray-900">{item.salary}</p>

                      <p className="text-sm text-gray-600 mt-2">Job Type</p>
                      <p className="font-semibold text-gray-900">{item.job_type}</p>

                      <p className="text-sm text-gray-600 mt-2">Job Category</p>
                      <p className="font-semibold text-gray-900">{item.job_category}</p>

                      <p className="text-sm text-gray-600 mt-2">Experience Level</p>
                      <p className="font-semibold text-gray-900">{item.experience_level}</p>

                      <p className="text-sm text-gray-600 mt-2">Application Deadline</p>
                      <p className="font-semibold text-red-600">{new Date(item.application_deadline).toLocaleDateString()}</p>

                      <p className="text-sm text-gray-600 mt-2">Contact Email</p>
                      <p className="font-semibold text-gray-900">{item.contact_email}</p>

                      <p className="text-sm text-gray-600 mt-2">Benefits</p>
                      <p className="font-semibold text-gray-900">{item.benefit}</p>

                      <p className="text-sm text-gray-600 mt-2">Skills Required</p>
                      <p className="font-semibold text-gray-900">{item.skill}</p>

                      {/* Job Description */}
                      <p className="text-sm text-gray-600 mt-2">Job Description</p>
                      <div className="text-gray-700">
                        {expandedDescriptions[item._id] ? (
                          <ul className="list-disc pl-5">
                            {item.job_description.split('\n').map((line, index) => (
                              <li key={index}>{line}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{`${item.job_description.split(' ').slice(0, 20).join(' ')}...`}</p>
                        )}
                      </div>
                      <button
                        className="text-blue-600 hover:underline mt-2"
                        onClick={() => toggleDescription(item._id)}
                      >
                        {expandedDescriptions[item._id] ? 'Read Less' : 'Read More'}
                      </button>
                    </div>
                  <div className="flex justify-between mt-auto">
                    <button className="bg-green-600 text-white px-4 py-2 mt-8 rounded-md" onClick={() => handleUnarchiveClick(item._id)}>Unarchive</button>
                    <button className="bg-blue-600 text-white px-4 py-2 mt-8 rounded-md" onClick={() => handleEditClick(item)}>Edit</button>
                    <button className="bg-red-600 text-white px-4 py-2 mt-8 rounded-md" onClick={() => handleDeleteClick(item._id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <IF condition={editModel}>
        <EditModel onClose={() => setEditModel(false)} userData={formData} />
      </IF>
    </>
  );
};
export default Page;

