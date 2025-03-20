'use client'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const initialJobState = {
    jobTitle: '',
    jobDescription: '',
    location: '',
    workMode: '',
    salary: '',
    company: '',
    email: '',
    applicationDeadLine: '',
    skill: '',
    experience: '',
    jobCategory: '',
    benefit: ''
}
const page = () => {
    const router = useRouter();
    const [createJob, setCreateJob] = useState(initialJobState);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleJobChange = (e) => {
        const { name, value } = e.target;
        setCreateJob((prevState) => ({ ...prevState, [name]: value }))

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true); // Start Loading
        try {
            const res = await fetch('https://wrocus-technology-backend.onrender.com/api/createjob', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    //  Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(createJob)
            })
            if (!res.ok) {
                throw new Error(`Error occurred:${res.status}`)
            }
            const responseData = await res.json()
            //show the successMessage immediatly
            setSuccessMessage(responseData.message)
            //reset the form state immediatly
            setCreateJob(initialJobState);
            setTimeout(() => {
                router.push('/admincareerpage')
            }, 2000);
            console.log("responseData", responseData)
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <>
            {/* <Navbar /> */}
            <div className='bg-gray-100 mt-3 p-10' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div className='bg-white p-6' >
                    <div className='grid grid-cols-4 items-center'>
                        <p></p>
                        <p className='text-end font-bold text-md lg:text-2xl'>CREATE JOB</p>
                        <Link href="/admincareerpage"> <button className='text-right ml-10 lg:ml-26 bg-blue-600 text-white p-2 rounded-md w-18' style={{ width: '80px' }}>view job</button></Link>
                    </div>
                    <p className='text-green-400 text-center mt-4'>{successMessage}</p>
                    <form onSubmit={handleSubmit}>
                        {/* job title */}
                        <div className="relative z-0 w-full mb-8 group">
                            <input
                                type="text"
                                id="JobTitle"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                                name="jobTitle"
                                onChange={handleJobChange}
                                value={createJob.jobTitle}
                                autoComplete='off'
                            />
                            <label
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Job Title
                            </label>
                        </div>
                        {/* job description  */}
                        <div className="relative z-0 w-full mb-8 group">
                            <input
                                type="text"
                                id="JobDescription"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                name="jobDescription"
                                onChange={handleJobChange}
                                value={createJob.jobDescription}
                                autoComplete='off'
                            />
                            <label
                                htmlFor="jobdescription"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Job Description
                            </label>
                        </div>
                        {/* Location */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleJobChange}
                                    value={createJob.location}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="location"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Location
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-8 group">
                                <label htmlFor="jobtype" className="sr-only text-gray-500">
                                    workMode
                                </label>
                                <select
                                    type="text"
                                    name="workMode"
                                    id="workMode"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleJobChange}
                                    value={createJob.workMode}
                                    autoComplete='off'
                                >
                                    <option value="" disabled hidden className="text-gray-50">
                                        Work Mode
                                    </option>
                                    <option value="Onsite">Onsite</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Flexible">Flexible</option>
                                    <option value="Shift-based">Shift-based</option>
                                </select>
                                {/* Dropdown Icon */}
                                <svg
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-4 text-gray-500 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        {/* salary and company name */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="text"
                                    name="salary"
                                    id="salary"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleJobChange}
                                    value={createJob.salary}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="salary"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Salary
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleJobChange}
                                    value={createJob.company}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="company"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Company
                                </label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                    required
                                    onChange={handleJobChange}
                                    value={createJob.email}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Contact Email
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="date"
                                    name="applicationDeadLine"
                                    id="applicationDeadLine"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleJobChange}
                                    value={createJob.applicationDeadLine}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="applicationdeadline"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Application Deadline
                                </label>
                            </div>
                        </div>
                        {/* experience and skill */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="text"
                                    name="skill"
                                    id="skillsrequired"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleJobChange}
                                    value={createJob.skill}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="skillsrequired"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Skills Required
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="jobtype" className="sr-only">Experience</label>
                                <select
                                    type="text"
                                    name="experience"
                                    id="experience"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleJobChange}
                                    value={createJob.experience}
                                    autoComplete='off'
                                >
                                    <option value="" disabled hidden>Experience level</option>
                                    <option value="fresher">Fresher</option>
                                    <option value="1-2">1-2 Years</option>
                                    <option value="3-5">3-5 Years</option>
                                    <option value="6-10">6-10 Years</option>
                                    <option value="10+">10+ Years</option>
                                </select>
                                {/* Dropdown Icon */}
                                <svg
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-4 text-gray-500 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        {/* job category */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <select
                                    type="text"
                                    name="jobCategory"
                                    id="jobCategory"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleJobChange}
                                    value={createJob.jobCategory}
                                    autoComplete='off'
                                >
                                    <option value="" disabled hidden>Job Category</option>
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Freelance">Freelance</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Temporary">Temporary</option>
                                    <option value="Volunteer">Volunteer</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Work from Office">Work from Office</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                                {/* Dropdown Icon */}
                                <svg
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-4 text-gray-500 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="benefit"
                                    id="benefits"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleJobChange}
                                    value={createJob.benefit}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="benefits"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Benefits
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm w-full mt-5 px-5 py-2.5 text-center 
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default page