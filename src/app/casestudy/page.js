import React from 'react';

const CaseStudy = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white opacity-100 mb-4">Case Study: E-commerce Platform</h1>
          <p className="text-lg mb-6 max-w-2xl opacity-100 mx-auto">
            A deep dive into how we helped an e-commerce platform scale and enhance user experience.
          </p>
          <a
            href="#overview"
            className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Learn More
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      </section>

      {/* Project Overview Section */}
      <section id="overview" className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-blue-950 text-center">Project Overview</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-950 text-center mb-12">
            We partnered with an e-commerce company to transform their platform into a seamless experience. The project
            aimed to improve user experience, reduce cart abandonment, and optimize platform performance to scale effectively.
          </p>
          <div className="flex justify-center gap-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Challenge</h3>
              <p className="text-gray-950">A slow, clunky platform that led to high cart abandonment rates.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Solution</h3>
              <p className="text-gray-950">We revamped the user interface and optimized the checkout flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-950 mb-8">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-blue-900">Challenge 1: Cart Abandonment</h3>
              <p className="text-lg text-gray-950">
                Many users were abandoning their carts mid-purchase due to a complicated checkout process and lack of
                personalization.
              </p>
              <h4 className="text-lg font-bold text-blue-900">Solution</h4>
              <p className="text-gray-950">
                We optimized the checkout flow, added personalized recommendations, and implemented abandoned cart email
                reminders.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-900">Challenge 2: Slow Website Performance</h3>
              <p className="text-lg text-gray-950">
                The platform had long loading times, especially on mobile devices, which resulted in higher bounce rates.
              </p>
              <h4 className="text-lg font-bold text-blue-900">Solution</h4>
              <p className="text-gray-950">
                We optimized the platform’s backend and reduced image sizes, resulting in faster load times across all
                devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">The Results</h2>
          <p className="text-lg text-gray-950 mb-8">
            After implementing the changes, the platform saw significant improvements in user engagement and overall
            performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-950 text-white py-8 px-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">20% Increase in User Retention</h3>
              <p>Optimized features and personalized experiences led to users returning more frequently.</p>
            </div>
            <div className="bg-blue-950 text-white py-8 px-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">40% Reduction in Cart Abandonment</h3>
              <p>Streamlined the checkout process and sent timely reminders, boosting conversions.</p>
            </div>
            <div className="bg-blue-950 text-white py-8 px-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">60% Faster Load Times</h3>
              <p>Optimizing the website’s code and assets resulted in a faster, smoother user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Illustrations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Visuals of the Transformation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/ecommerce-before.jpg"  // Replace with your actual image path
                alt="Before Redesign"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/ecommerce-after.jpg"  // Replace with your actual image path
                alt="After Redesign"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/checkout-optimized.jpg"  // Replace with your actual image path
                alt="Optimized Checkout"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/project1.jpg"  
                alt="Project 1"
                className="w-full h-64 object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">Project 1: Mobile App Design</h3>
              <p className="text-gray-700 mt-2">
                A deep dive into how we redesigned a mobile app to improve user experience and increase user engagement.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/project2.jpg"  // Replace with your actual image path
                alt="Project 2"
                className="w-full h-64 object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">Project 2: SaaS Platform</h3>
              <p className="text-gray-700 mt-2">
                A case study on how we helped a SaaS platform increase subscriptions by optimizing the user flow and UI.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/project3.jpg"  // Replace with your actual image path
                alt="Project 3"
                className="w-full h-64 object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">Project 3: Branding & Web Design</h3>
              <p className="text-gray-700 mt-2">
                We helped a startup create a new brand identity and designed a responsive, user-friendly website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion & Call to Action */}
      <section className="py-24 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Want to Learn More?</h2>
          <p className="text-lg mb-6">If you’re interested in how we can help your business grow, feel free to reach out!</p>
          <a
            href="#"
            className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
