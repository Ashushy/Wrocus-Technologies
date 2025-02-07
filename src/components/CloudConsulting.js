import React from 'react';

const CloudConsulting = () => {
    const cardsData = [
        {
            title: 'Cloud Strategy',
            description: 'Develop a tailored cloud strategy that aligns with your business goals.',
            icon: '☁️',
        },
        {
            title: 'Migration Services',
            description: 'Seamlessly migrate your existing infrastructure to the cloud.',
            icon: '🚀',
        },
        {
            title: 'Cloud Security',
            description: 'Implement robust security measures to protect your data in the cloud.',
            icon: '🔒',
        },
        {
            title: 'Cost Optimization',
            description: 'Optimize your cloud spending with effective cost management strategies.',
            icon: '💰',
        },
        {
            title: 'Cloud Monitoring',
            description: 'Monitor your cloud resources for performance and reliability.',
            icon: '📊',
        },
        {
            title: 'Disaster Recovery',
            description: 'Create a solid disaster recovery plan to ensure business continuity.',
            icon: '🛡️',
        },
    ];

    return (
        <div className='bg-gray-100 p-5 mt-5'>
            <div className='bg-white p-4'>
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-black">Cloud Consulting Services</h1>
                    <p className="text-lg text-gray-800">Transform your business with our expert cloud consulting services.</p>
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
                    Ready to elevate your cloud strategy? Let our experts guide you through the process!
                </p>
                <button className='px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'>
                    Contact Us Today
                </button>
            </div>
        </div>
    );
}

export default CloudConsulting;
