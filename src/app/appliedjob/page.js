'use client'
import useAuth from '@/hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const router = useRouter();
    const [getappliedJobData, setAppliedJobData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const useAuth1 = useAuth();
    console.log({ useAuth1 });



    useEffect(() => {
        FetchAllJobData()

    }, [])

    const FetchAllJobData = async () => {
        try {
            const response = await fetch('https://wrocubackendapi.onrender.com/api/getallapplyjob')
            if (!response.ok) {
                throw new Error(`Error:${response.status}`)
            }
            const data = await response.json();
            setAppliedJobData(data.data)
            console.log(data);
        }
        catch (error) {
            console.error(`Error`, error);
            setError('Failed to load applied job data.please try again later.');

        }
        finally {
            setLoading(false)

        }
    }
    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    const hanldeDownloadClick = (fileUri) => {
        const URL = fileUri
        if (typeof window !== "undefined") {
            window.location.href = URL
        }
    }
  

  const handleDelete=async(id)=>{
    try {
        const res=await fetch(`http://localhost:5001/api/deleteapplyjob/${id}`,
            {
                method:'DELETE',
            });
            if(!res.ok){
                throw new Error(`Failed to delete the job`);
            }
            setAppliedJobData((prevData)=>prevData.filter((item)=>item._id !==id))
            alert('Delete successfully');
    } catch (error) {
        console.error(`Error deleting job:`,error)
        alert('Failed to delete the job .Please try again latter')
        
    }

  }

    return (
        <>
            {/*   <Navbar /> */}
            <div className='bg-white p-10 mb-12'>
                <h2 className='text-center text-3xl font-bold mb-6'>Applied Job Data</h2>
                {getappliedJobData && getappliedJobData.length > 0 ? (
                    <table className='table-auto w-full bg-white border-collapse border border-gray-200'>
                        <thead>
                            <tr className='bg-white-100'>
                                <th className="border px-4 py-2 text-center">Date</th>
                                <th className="border px-4 py-2 text-center">Name</th>
                                <th className="border px-4 py-2 text-center">Contact Number</th>
                                <th className="border px-4 py-2 text-center">Email</th>
                                <th className="border px-4 py-2 text-center">Notice Period(Days)</th>
                                <th className="border px-4 py-2 text-center">Applied for</th>
                                <th className="border px-4 py-2 text-center">Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getappliedJobData.map((item) => (
                                <tr key={item._id} className="bg-white p-10">
                                    <td className="border px-4 py-2 text-start">{item.Date}</td>
                                    <td className="border px-4 py-2 text-start">{item.name}</td>
                                    <td className="border px-4 py-2 text-center">{item.contactNumber}</td>
                                    <td className="border px-4 py-2 text-center">{item.email}</td>
                                    <td className="border px-4 py-2 text-center">{item.noticeperiod}</td>
                                    <td className="border px-4 py-2 text-center">{item.jobReference?.job_title || 'N/A'}</td>
                                    <td className="border px-4 py-2 text-center">
                                    <div className='flex gap-2 w-full justify-between'>
                                            <button onClick={() => hanldeDownloadClick(item.resume?.secure_url)}>
                                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clipRule="evenodd" />
                                                    <path fillRule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <Link target='_blank' href={`/DocViewer/?id=${item?._id}`} >
                                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                            </Link>
                                               <button onClick={()=>handleDelete(item._id)}>
                                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                               </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                    </table>

                ) : (
                    <p>No Applied jobs Found.</p>
                )}

            </div>
        </>
    )
}

export default page