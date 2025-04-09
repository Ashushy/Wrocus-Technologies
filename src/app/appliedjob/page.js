
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Download, Eye, Trash2, X, FileText } from 'lucide-react';
import * as XLSX from 'xlsx';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Page = () => {
    const router = useRouter();
    const [appliedJobData, setAppliedJobData] = useState([]);
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
    }, [filters, appliedJobData]);
    const dateConversion = (date) => {
        if (!date) return '';
        return new Date(date).toISOString().split('T')[0];  // Convert to YYYY-MM-DD
    };
    const FetchAllJobData = async (page) => {
        try {
            const response = await fetch(`https://wrocus-technology-backend.onrender.com/api/getallapplyjob?page=1&limit=1000`);
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
            const res = await fetch(`https://wrocus-technology-backend.onrender.com/api/deleteapplyjob/${id}`, {
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
        let filtered = appliedJobData;
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
        setFilteredData(appliedJobData);
    };
    const exportToExcel = () => {
        const jobData = filteredData.slice(0, 100).map((job, index) => ({
            "SI.NO": index + 1,  // Adding Serial Number
            Date: dateConversion(job.createdAt),
            Name: job.name,
            Email: job.email,
            Contact: job.contactNumber || "N/A",
            Experience:job.currentExperience,
            NoticePeriod: job.noticeperiod,
            CurrentCTC: job.currentCTC,
            ExpectedCTC: job.expectedCTC,
            Status:job.status,
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

    const handleStatusChange = (e, id) => {
        const updatedStatus = e.target.value;

        // Find the job and update the status
        setAppliedJobData((prevData) =>
            prevData.map((job) =>
                job._id === id ? { ...job, status: updatedStatus } : job
            )
        );
    };
    return (
        <div className="bg-gray-50 min-h-screen p-5">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-center text-4xl font-bold mb-6 text-gray-800">Applied Jobs</h2>
                {/* Display total number of jobs */}
                <p className="text-center text-lg font-semibold text-gray-600 mt-2 mb-12">
                    Showing {appliedJobData.length} out of {totalJobs} Applied Jobs
                </p>
                {/* 🔹 Download Excel Button */}
                {/* 🔹 Filters Section */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    {/* Name Filter */}
                    <input
                        type="text"
                        name="name"
                        value={filters.name}
                        onChange={handleFilterChange}
                        placeholder="Filter by Name"
                        className="border p-2 rounded-md w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                    />
                    {/* Date Filter */}
                    <input
                        type="date"
                        name="date"
                        value={filters.date}
                        onChange={handleFilterChange}
                        className="border p-2 rounded-md w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                    />
                    {/* Email Filter */}
                    <input
                        type="text"
                        name="email"
                        value={filters.email}
                        onChange={handleFilterChange}
                        placeholder="Filter by Email"
                        className="border p-2 rounded-md w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                    />
                    {/* Notice Period Filter */}
                    <input
                        type="text"
                        name="noticePeriod"
                        value={filters.noticePeriod}
                        onChange={handleFilterChange}
                        placeholder="Filter by Notice Period"
                        className="border p-2 rounded-md w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                    />
                    {/* Job Title Filter */}
                    <input
                        type="text"
                        name="appliedFor"
                        value={filters.appliedFor}
                        onChange={handleFilterChange}
                        placeholder="Filter by Job Title"
                        className="border p-2 rounded-md w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                    />
                    {/* Reset Button */}
                    <button
                        onClick={resetFilters}
                        className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition sm:w-auto"
                    >
                        Reset
                    </button>

                    {/* Export Button */}
                    <button
                        onClick={exportToExcel}
                        className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition sm:w-auto"
                    >
                        <Download size={16} /> Export
                    </button>
                </div>


                {/* Job Table */}
                {/* Job Table */}
                {filteredData.length > 0 ? (
                    <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
                        <table className="table-auto w-full bg-white text-sm">
                            <thead>
                                <tr className="bg-blue-400 text-white">
                                    <th className="border px-5 py-3 rounded-tl-lg">SI.NO</th>
                                    <th className="border px-5 py-3">Date</th>
                                    <th className="border px-5 py-3">Name</th>
                                    <th className="border px-5 py-3">Contact</th>
                                    <th className="border px-5 py-3">Email</th>
                                    <th className="border px-5 py-3">Notice Period</th>
                                    <th className="border px-5 py-3">Experience</th>
                                    <th className="border px-5 py-3">Current CTC</th>
                                    <th className="border px-5 py-3">Expected CTC</th>
                                    <th className="border px-5 py-3">Current Org</th>
                                    <th className="border px-5 py-3">Job Title</th>
                                    <th className="border px-5 py-3">Actions</th>
                                    <th className="border px-5 py-3">Status</th>
                                    <th className="border px-5 py-3 rounded-tr-lg">View Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr
                                        key={item._id}
                                        className="text-center bg-gray-50 hover:bg-gray-100 transition"
                                    >
                                        <td className="border px-5 py-3">
                                            {(currentPage - 1) * limit + index + 1}
                                        </td>
                                        <td className="border px-5 py-3">
                                            {dateConversion(item.createdAt)}
                                        </td>
                                        <td className="border px-5 py-3">{item.name}</td>
                                        <td className="border px-5 py-3">{item.contactNumber || "N/A"}</td>
                                        <td className="border px-5 py-3">{item.email}</td>
                                        <td className="border px-5 py-3">{item.noticeperiod}</td>
                                        <td className="border px-5 py-3">{item.currentExperience || "N/A"}</td>
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

                                            {/* View Button */}
                                            <Link href={`/DocViewer/?id=${item?._id}`} target="_blank" rel="noopener noreferrer">
                                                <button className="bg-blue-400 text-white p-1 rounded-md hover:bg-blue-600 transition flex items-center justify-center">
                                                    <Eye size={19} />
                                                </button>
                                            </Link>

                                            {/* Delete Button */}
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="bg-red-400 text-white p-1 rounded-md hover:bg-red-600 transition flex items-center justify-center"
                                            >
                                                <Trash2 size={15} />
                                            </button>

                                            {/* WhatsApp Button */}
                                            <a
                                                href={`https://wa.me/${item.contactNumber}?text=Hello%20${item.name},%20I%20wanted%20to%20discuss%20your%20applied%20job%20at%20at our company Wrocus Technologies.`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-500 text-white p-1 rounded-md hover:bg-green-600 transition flex items-center justify-center"
                                            >
                                                <WhatsAppIcon className="text-white " />

                                            </a>

                                        </td>
                                        <td className="border px-5 py-3">
                                            <select
                                                className="bg-white text-gray-700 border border-gray-300 rounded-md p-2 w-full min-w-[150px] focus:ring-2 focus:ring-blue-500 transition"
                                                value={item.status || "Pending"}  // Display the current status
                                                onChange={(e) => handleStatusChange(e, item._id)}  // Update status when changed
                                            >
                                                <option value="Need to Connect">Need to Connect</option>
                                                <option value="Connected">Connected</option>
                                                {/* <option value="Not Completed">Not Completed</option> */}
                                            </select>
                                        </td>

                                        <td className="border px-2 py-1">
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
                    <p className="text-center text-lg text-gray-600">No Applied Jobs Found.</p>
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
                                <p><strong>CurrentExperience:</strong> {selectedJob.currentExperience}</p>
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
                    ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 transition'}`}
                    >
                        Previous
                    </button>
                    {/* Page Range Display */}
                    <span className="text-lg font-semibold">{getPageRange(currentPage)} of {totalPages}</span>
                    {/* Next Button */}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-md font-semibold 
                    ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 transition'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Page;

