
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Download, Eye, Trash2, X, FileText } from 'lucide-react';
import * as XLSX from 'xlsx';

const Page = () => {
    const router = useRouter();
    const [getappliedJobData, setAppliedJobData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalJobs, setTotalJobs] = useState(0);

    const limit = 10;


    // 🔹 Modal State
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 🔹 Filters state
    const [filters, setFilters] = useState({
        name: '',
        date: '',
        email: '',
        contactNumber: '',
        noticePeriod: '',
        appliedFor: '',
    });

    useEffect(() => {
        FetchAllJobData(currentPage);
    }, [currentPage]);

    useEffect(() => {
        applyFilters();
    }, [filters, getappliedJobData]);



    const dateConversion = (date) => {
        if (!date) return '';
        return new Date(date).toISOString().split('T')[0];  // Convert to YYYY-MM-DD
    };

    const FetchAllJobData = async (page) => {
        try {
            const response = await fetch(`https://wrocus-technology-backend.onrender.com/api/getallapplyjob?page=${page}&limit=${limit}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();

            setAppliedJobData(data.data);
            setFilteredData(data.data);
            setTotalPages(data.totalPages);
            setTotalJobs(data.totalJobs);
        } catch (error) {
            setError('Failed to load applied job data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };


    const handleDelete = async (id) => {
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

    const applyFilters = () => {
        let filtered = getappliedJobData;

        if (filters.name) {
            filtered = filtered.filter((job) =>
                job.name.toLowerCase().includes(filters.name.toLowerCase())
            );
        }

        if (filters.email) {
            filtered = filtered.filter((job) =>
                job.email.toLowerCase().includes(filters.email.toLowerCase())
            );
        }
        if (filters.contactNumber) {
            filtered = filtered.filter((job) =>
                job.contactNumber.toLowerCase().includes(filters.contactNumber.toLowerCase())
            );
        }

        if (filters.date) {
            filtered = filtered.filter((job) =>
                dateConversion(job.createdAt) === filters.date
            );
        }
        if (filters.noticePeriod) {
            filtered = filtered.filter((job) =>
                job.noticeperiod.toLowerCase().includes(filters.noticePeriod.toLowerCase())
            );
        }
        if (filters.appliedFor) {
            filtered = filtered.filter((job) =>
                job.jobReference?.job_title?.toLowerCase().includes(filters.appliedFor.toLowerCase())
            );
        }

        setFilteredData(filtered);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const resetFilters = () => {
        setFilters({
            name: '',
            email: '',
            date: '',
            contactNumber: '',
            noticePeriod: '',
            appliedFor: '',
        });
        setFilteredData(getappliedJobData);
    };

    const exportToExcel = () => {
        const jobData = filteredData.slice(0, 100).map((job, index) => ({
            "SI.NO": index + 1,  // Adding Serial Number
            Date: dateConversion(job.createdAt),
            Name: job.name,
            Email: job.email,
            Contact: job.contactNumber || "N/A",
            NoticePeriod: job.noticeperiod,
            CurrentCTC: job.currentCTC,
            ExpectedCTC: job.expectedCTC,
            CurrentOrganization: job.currentOrganization,
            JobTitle: job.jobReference?.job_title || "N/A"
        }));

        const ws = XLSX.utils.json_to_sheet(jobData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "AppliedJobs");

        XLSX.writeFile(wb, "Applied_Jobs.xlsx");
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 text-lg">{error}</div>;
    }
    // 📌 Function to generate page range labels
    const getPageRange = (page) => {
        const start = (page - 1) * limit + 1;
        const end = Math.min(start + limit - 1, totalJobs);
        return `${start}....${end}`;
    };

    // Function to open modal with job details
    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setSelectedJob(null);
        setIsModalOpen(false);
    };
    return (
        <div className='bg-gray-50 min-h-screen p-5'>
            <div className='bg-white shadow-lg rounded-lg p-8'>
                <h2 className='text-center text-4xl font-bold mb-6 text-gray-800'>Applied Jobs</h2>

                {/* Display total number of jobs */}
                <p className="text-center text-lg font-semibold text-gray-600 mt-2 mb-12">
                    Showing {getappliedJobData.length} out of {totalJobs} Applied Jobs
                </p>
                {/* 🔹 Download Excel Button */}
                <div className="flex justify-end mb-2">
                    <button
                       onClick={exportToExcel}
                       className="bg-green-600 text-white px-3 py-2 rounded-md flex items-center gap-2 mb-4 mr-2 hover:bg-green-700 transition shrink-0"
                   >
                       <Download size={16} /> Export
                    </button>
                </div>
                {/* 🔹 Filters Section */}
                {/* 🔹 Filters Section */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <input
                        type="text"
                        name="name"
                        value={filters.name}
                        onChange={handleFilterChange}
                        placeholder="Filter by Name"
                        className="border p-2 rounded-md"
                    />

                    <input
                        type="date"
                        name="date"
                        value={filters.date}
                        onChange={handleFilterChange}
                        className="border p-2 rounded-md"
                    />

                    <input
                        type="text"
                        name="email"
                        value={filters.email}
                        onChange={handleFilterChange}
                        placeholder="Filter by Email"
                        className="border p-2 rounded-md"
                    />

                    <input
                        type="text"
                        name="contactNumber"
                        value={filters.contactNumber}
                        onChange={handleFilterChange}
                        placeholder="Filter by Contact"
                        className="border p-2 rounded-md"
                    />

                    <input
                        type="text"
                        name="noticePeriod"
                        value={filters.noticePeriod}
                        onChange={handleFilterChange}
                        placeholder="Filter by Notice Period"
                        className="border p-2 rounded-md"
                    />

                    <input
                        type="text"
                        name="appliedFor"
                        value={filters.appliedFor}
                        onChange={handleFilterChange}
                        placeholder="Filter by Job Title"
                        className="border p-2 rounded-md"
                    />

                    {/* Reset Button */}
                    <button
                        onClick={resetFilters}
                        className="bg-red-500 text-white px-3 py-2 rounded-md shrink-0"
                    >
                        Reset
                    </button>

                    {/* Export Button */}
                    {/* <button
                        onClick={exportToExcel}
                        className="bg-green-600 text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition shrink-0"
                    >
                        <Download size={16} /> Export
                    </button> */}
                </div>

                {/* Job Table */}
                {filteredData.length > 0 ? (
                    <div className="overflow-hidden rounded-lg border border-gray-300 shadow-md">
                        <table className="table-auto w-full bg-white text-sm">
                            <thead>
                                <tr className="bg-blue-400 text-white">
                                    <th className="border px-5 py-3 rounded-tl-lg">SI.NO</th>  {/* ✅ Added SI.NO Column */}
                                    <th className="border px-5 py-3 ">Date</th>
                                    <th className="border px-5 py-3">Name</th>
                                    <th className="border px-5 py-3">Contact</th>
                                    <th className="border px-5 py-3">Email</th>
                                    <th className="border px-5 py-3">Notice Period</th>
                                    <th className="border px-5 py-3">Current CTC</th>
                                    <th className="border px-5 py-3">Expected CTC</th>
                                    <th className="border px-5 py-3">Current Org</th>
                                    <th className="border px-5 py-3">Job Title</th>
                                    <th className="border px-5 py-3">Actions</th>
                                    <th className="border px-5 py-3 rounded-tr-lg">View Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr
                                        key={item._id}
                                        className="text-center bg-gray-50 hover:bg-gray-100 transition"
                                    >
                                        <td className="border px-5 py-3">{index + 1}</td> {/* ✅ Auto-generated SI.NO */}

                                        <td className={`border px-5 py-3 ${index === 0 ? "rounded-tl-lg" : ""} ${index === filteredData.length - 1 ? "rounded-bl-lg" : ""}`}>
                                            {dateConversion(item.createdAt)}
                                        </td>
                                        <td className="border px-5 py-3">{item.name}</td>
                                        <td className="border px-5 py-3">{item.contactNumber || "N/A"}</td>
                                        <td className="border px-5 py-3">{item.email}</td>
                                        <td className="border px-5 py-3">{item.noticeperiod}</td>
                                        <td className="border px-5 py-3">{item.currentCTC}</td>
                                        <td className="border px-5 py-3">{item.expectedCTC}</td>
                                        <td className="border px-5 py-3">{item.currentOrganization}</td>
                                        <td className="border px-5 py-3">{item.jobReference?.job_title || "N/A"}</td>
                                        <td className="border px-5 py-3 flex justify-center gap-2">
                                            {/* Download Button */}
                                            <a
                                                href={item.resume?.secure_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-400 text-white p-1 rounded-md hover:bg-green-600 transition flex items-center justify-center"
                                            >
                                                <Download size={15} />
                                            </a>

                                            {/* View Button (Fixed the Link Issue) */}
                                            <Link href={`/DocViewer/?id=${item?._id}`} target="_blank" rel="noopener noreferrer">
                                                <button className="bg-blue-400 text-white p-1 rounded-md hover:bg-blue-600 transition flex items-center justify-center">
                                                    <Eye size={15} />
                                                </button>
                                            </Link>

                                            {/* Delete Button */}
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="bg-red-400 text-white p-1 rounded-md hover:bg-red-600 transition flex items-center justify-center"
                                            >
                                                <Trash2 size={15} />
                                            </button>
                                        </td>

                                        <td className={`border px-2 py-1 ${index === 0 ? "rounded-tr-lg" : ""} ${index === filteredData.length - 1 ? "rounded-br-lg" : ""}`}>
                                            <button
                                                onClick={() => openModal(item)}
                                                className="bg-purple-950 text-white p-1 rounded-md hover:bg-purple-600 transition"
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                    </div>
                ) : (
                    <p className='text-center text-lg text-gray-600'>No Applied Jobs Found.</p>
                )}

                {/* Modal Popup */}
                {isModalOpen && selectedJob && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                                <X size={20} />
                            </button>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Job Details</h3>
                            <div className="space-y-3">
                                <p><strong>Name:</strong> {selectedJob.name}</p>
                                <p><strong>Contact:</strong> {selectedJob.contactNumber || 'N/A'}</p>
                                <p><strong>Email:</strong> {selectedJob.email}</p>
                                <p><strong>Notice Period:</strong> {selectedJob.noticeperiod}</p>
                                <p><strong>Current CTC:</strong> {selectedJob.currentCTC}</p>
                                <p><strong>Expected CTC:</strong> {selectedJob.expectedCTC}</p>
                                <p><strong>Current Organization:</strong> {selectedJob.currentOrganization}</p>
                                <p><strong>Applied For:</strong> {selectedJob.jobReference?.job_title || 'N/A'}</p>
                                <p><strong>Resume:</strong>
                                    <a href={selectedJob.resume?.secure_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">
                                        Download Resume
                                    </a>
                                </p>
                            </div>
                            <div className="mt-4 text-right">
                                <button onClick={closeModal} className="bg-gray-400 px-4 py-2 rounded-md text-white hover:bg-gray-500">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {/* Pagination Controls */}
                <div className="flex justify-center mt-4 gap-2 items-center">
                    {/* Previous Button */}
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-md font-semibold 
                    ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    >
                        Previous
                    </button>
                    {/* Active Page Number */}
                    <span className={`px-4 py-2 rounded-md font-semibold 
                    ${currentPage === totalPages ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {getPageRange(currentPage)} / {totalJobs}
                    </span>

                    {/* Next Button */}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-md font-semibold 
                    ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    >
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
};
export default Page;






