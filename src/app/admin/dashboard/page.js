
'use client';
import Layout from '@/components/Layout';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
    const [jobCounts, setJobCounts] = useState("")

    useEffect(() => {
        fetchJobData();
    }, []);

    const fetchJobData = async () => {
        try {
            const response = await fetch('https://wrocus-technology-backend.onrender.com/api/getallapplyjob');
            const data = await response.json();
            if (data.data) {
                const counts = {};
    
                data.data.forEach(job => {
                    const title = job.jobReference?.job_title || 'Unknown';
                    counts[title] = (counts[title] || 0) + 1;
                });
    
                setJobCounts(counts);
            }
        } catch (error) {
            console.error('Error fetching job data:', error);
        }
    };
    

    const chartData = {
        labels: Object.keys(jobCounts),
        datasets: [
            {
                label: 'Number of Applicants',
                data: Object.values(jobCounts),
                backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Job Applications by Title' },
        },
    };

    return (
        <Layout>
            <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-4">Job Applications Overview</h1>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </Layout>
    );
}
