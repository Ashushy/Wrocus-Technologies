import React from 'react';

const ErpHrms = () => {
    const cardsData = [
        {
            title: 'Employee Management',
            description: 'Manage employee records, payroll, and benefits seamlessly.',
            icon: '👥',
        },
        {
            title: 'Time Tracking',
            description: 'Track employee time and attendance for accurate payroll.',
            icon: '⏰',
        },
        {
            title: 'Recruitment Module',
            description: 'Streamline your hiring process with our recruitment tools.',
            icon: '📝',
        },
        {
            title: 'Performance Reviews',
            description: 'Conduct employee evaluations and manage feedback effectively.',
            icon: '⭐',
        },
        {
            title: 'Training Management',
            description: 'Organize and track employee training programs and certifications.',
            icon: '📚',
        },
        {
            title: 'Reporting & Analytics',
            description: 'Generate detailed reports and insights on HR metrics.',
            icon: '📊',
        },
    ];

    return (
        <div className='bg-gray-100 p-5 mt-5'>
            <div className='bg-white p-4'>
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-black">ERP HRMS Solutions</h1>
                    <p className="text-lg text-gray-800">Optimize your human resources management with our comprehensive ERP solution.</p>
                </header>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {cardsData.map((card, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <div className="mb-4 text-blue-500 text-4xl">{card.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="text-gray-700 text-center">{card.description}</p>
                    </div>
                ))}
            </div>

            <div className='text-center mt-8'>
                <p className='text-lg text-gray-800 italic mb-4'>
                    Ready to streamline your HR processes? Let us help you implement an ERP HRMS solution tailored to your needs!
                </p>
                <button className='px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'>
                    Contact Us Today
                </button>
            </div>
        </div>
    );
}

export default ErpHrms;
