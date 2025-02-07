import React from 'react';

const ActualWork = () => {
    return (
        <div className='bg-customvoilet p-6 md:p-12'
            style={{
                // backgroundImage: `url('/slider/bg-art-5.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', // Ensures background covers the section
                height: '100vh',
            }}
        >
            <div className='flex flex-col md:flex-row'>
                <div className='p-6 w-full md:w-1/2 flex justify-center'>
                    <img
                        src='slider/image1-about.png'
                        className='h-auto max-w-full'
                    />
                </div>
                <div className='p-4 w-full md:w-1/2'>
                    <div className='flex justify-between text-xl font-bold text-white mb-4'>
                        <p>Experience</p>
                        <p>Execution</p>
                        <p>Excellence</p>
                    </div>
                    <p className='text-3xl md:text-4xl font-bold text-white mb-5'>What We Actually Do</p>
                    <div className='grid grid-cols-3 gap-4'>
                        {[
                            "https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-2752148-2284965.png?f=webp&w=256",
                            "https://cdn.iconscout.com/icon/premium/png-256-thumb/php-2752101-2284918.png",
                            "https://e7.pngegg.com/pngimages/961/251/png-clipart-java-runtime-environment-programming-language-programmer-computer-programming-java-text-logo-thumbnail.png",
                            "https://ih1.redbubble.net/image.3954598988.9094/st,small,507x507-pad,600x600,f8f8f8.jpg",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzemPW2zVigKv44mjIDfGwrf_Rgzcyu07m_A&s",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_in9zZJJ7tJy7tOo_6b4aaVlHVQNq-QkCA&s",
                            "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4r9sUawBsXjP5j8C53UfX1_2mKB8XYpb5Q&s",
                            "https://static-00.iconduck.com/assets.00/vue-icon-2048x2048-ttu9fp8c.png",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyMbE_J9vqZNHdpLtZiZ_meZuI2ZHOv_phw1OVd5iGb3uguJ2a6BAUaRi2hrcWKfRcOo&usqp=CAU",
                            "https://static-00.iconduck.com/assets.00/salesforce-icon-2048x1434-jxt80iiu.png",
                            "https://w7.pngwing.com/pngs/926/31/png-transparent-apple-company-ios-logo-social-media-logos-ii-glyph-icon-thumbnail.png",
                            "https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png",
                            "https://www.freeiconspng.com/thumbs/android-icon/apps-android-icon-png-10.png",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorohYdJ684UMeN8xYWwulS5QaaO4nMmUQPQ&s"
                        ].map((src, index) => (
                            <img key={index} src={src} alt={`Icon ${index}`} className='h-14 w-auto' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActualWork;
