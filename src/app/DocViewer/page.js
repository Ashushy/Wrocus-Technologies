'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import AdminAuth from '@/components/AdminAuth';
import dynamic from 'next/dynamic';

// Dynamically import DocumentViewer using named export
const DocumentViewer = dynamic(
    async () => (await import('react-documents')).DocumentViewer,
    { ssr: false }
);

export default function DocViewer() {
    const searchParams = useSearchParams();
    const [uri, setUri] = useState('');

    useEffect(() => {
        const fetchResumeData = async () => {
            const userID = searchParams.get('id');
            if (userID) {
                try {
                    const response = await fetch(`https://wrocubackendapi.onrender.com/api/resume/${userID}`);
                    const resumeDetail = await response.json();
                    const uriResume = resumeDetail?.data.secure_url ?? '';
                    setUri(uriResume);
                } catch (error) {
                    console.error('Error fetching resume:', error);
                }
            }
        };

        fetchResumeData();
    }, [searchParams]);

    return (
        <Suspense fallback={<div>Loading DocViewer...</div>}>
            <div className="App">
                <AdminAuth>
                    {uri ? (
                        <DocumentViewer
                            style={{ height: '100vh', width: '100%' }}
                            queryParams="hl=EN"
                            url={uri}
                            overrideLocalhost=""
                        />
                    ) : (
                        <div>Loading Document...</div>
                    )}
                </AdminAuth>
            </div>
        </Suspense>
    );
}
