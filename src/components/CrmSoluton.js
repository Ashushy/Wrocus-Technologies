import React from 'react';

const CrmSolution = () => {
    const cardsData = [
        {
            title: 'Contact Management',
            description: 'Easily manage customer contacts and interactions.',
            icon: '📇',
        },
        {
            title: 'Sales Tracking',
            description: 'Monitor sales progress and performance metrics.',
            icon: '📈',
        },
        {
            title: 'Analytics and Reporting',
            description: 'Gain insights with powerful analytics and reports.',
            icon: '📊',
        },
        {
            title: 'Email Integration',
            description: 'Seamlessly integrate your email for better communication.',
            icon: '📧',
        },
        {
            title: 'Task Automation',
            description: 'Automate repetitive tasks to save time and improve efficiency.',
            icon: '⚙️',
        },
        {
            title: 'Lead Management',
            description: 'Capture and nurture leads to maximize conversion rates.',
            icon: '🔍',
        },
        {
            title: 'Collaboration Tools',
            description: 'Facilitate teamwork with integrated collaboration features.',
            icon: '🤝',
        },
        {
            title: 'Mobile Access',
            description: 'Access your CRM on the go with our mobile-friendly platform.',
            icon: '📱',
        },
    ];

    return (
        <>
            <div className='bg-gray-100 mt-3 p-2'>
                <div className='bg-white p-4'>
                    <header className="text-center">
                        <h1 className="text-4xl font-bold text-black">CRM Solutions</h1>
                        <p className="text-lg text-gray-800">Your one-stop solution for managing customer relationships.</p>
                    </header>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                    {cardsData.map((card, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                            <div className="mb-4 text-blue-500 text-4xl">{card.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-700 text-center">{card.description}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className='text-center mt-8'>
                <p className='text-lg text-gray-800 italic mb-4'>
                    Ready to elevate your customer relationship management? Let us help you build a CRM solution that meets your unique business needs!
                </p>
                <button className='px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'>
                    Contact Us Today
                </button>
            </div>

        </>
    );
}

export default CrmSolution;
