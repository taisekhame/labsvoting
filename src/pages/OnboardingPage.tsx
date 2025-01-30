import React, { useState } from 'react';
import "./OnboardingPage.css";

const OnboardingPage = () => {

  // Navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // customers Section
  const customers = [
    { name: 'Company 1', logo: 'https://via.placeholder.com/150x50?text=Logo1' },
    { name: 'Company 2', logo: 'https://via.placeholder.com/150x50?text=Logo2' },
    { name: 'Company 3', logo: 'https://via.placeholder.com/150x50?text=Logo3' },
    { name: 'Company 4', logo: 'https://via.placeholder.com/150x50?text=Logo4' },
    { name: 'Company 5', logo: 'https://via.placeholder.com/150x50?text=Logo5' },
  ];


   // HowItWorks Section
  const steps = [
    {
      title: "Easy Setup",
      description: "Define your election parameters, set dates, and upload voter lists using our intuitive Election Manager. Choose authentication methods and customize your ballot questions.",
    },
    {
      title: "Secure Voting",
      description: "Voters access your branded voting website, authenticate securely, and cast encrypted votes. Each voter receives a unique receipt while maintaining anonymity.",
    },
    {
      title: "Instant Results",
      description: "Get immediate tabulation of results upon election closure. Review comprehensive reports and publish verified results with complete transparency.",
    },
  ];



  // Services Section
  const industries = [
    {
      title: "Corporate Elections",
      icon: "🏢",
      description: "Board elections, shareholder voting, and corporate governance",
    },
    {
      title: "Educational Institutions",
      icon: "🎓",
      description: "Student body elections, faculty voting, and academic councils",
    },
    {
      title: "Associations & Clubs",
      icon: "🤝",
      description: "Member voting, board elections, and policy decisions",
    },
    {
      title: "Government & Municipal",
      icon: "🏛️",
      description: "Local elections, public consultations, and community voting",
    },
  ];


    // Reviews Section
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Election Manager",
      company: "Tech Corp",
      content: "The platform made our company-wide voting process seamless and secure. Excellent support team!",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael Chen",
      role: "Board Member",
      company: "Education Alliance",
      content: "We've been using this for our board elections for 2 years now. It's reliable and user-friendly.",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Emma Williams",
      role: "Association President",
      company: "Professional Society",
      content: "The best voting platform we've used. Our members love the simple interface.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

 // Footer
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, message });
  };


  return (
    <div>
      {/*   Navbar */}
      <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#3d4b56]">LabsVoting</h1>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#elections" className="text-[#3d4b56] hover:text-[#3c83ff]">Ongoing Elections</a>
            <a href="#how-it-works" className="text-[#3d4b56] hover:text-[#3c83ff]">How it Works</a>
            <a href="#services" className="text-[#3d4b56] hover:text-[#3c83ff]">Services</a>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-[#3c83ff] border border-[#3c83ff] rounded-md hover:bg-[#3c83ff] hover:text-white transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-[#3c83ff] text-white rounded-md hover:bg-[#3c83ff]/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-[#3d4b56] hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#elections"
                className="block px-3 py-2 rounded-md text-[#3d4b56] hover:text-[#3c83ff] hover:bg-gray-50"
              >
                Ongoing Elections
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 rounded-md text-[#3d4b56] hover:text-[#3c83ff] hover:bg-gray-50"
              >
                How it Works
              </a>
              <a
                href="#services"
                className="block px-3 py-2 rounded-md text-[#3d4b56] hover:text-[#3c83ff] hover:bg-gray-50"
              >
                Services
              </a>
              <div className="mt-4 space-y-2">
                <button className="w-full px-4 py-2 text-[#3c83ff] border border-[#3c83ff] rounded-md hover:bg-[#3c83ff] hover:text-white transition-colors">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-[#3c83ff] text-white rounded-md hover:bg-[#3c83ff]/90 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </nav>


      {/* Customers Section */}

      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[#3d4b56] mb-12">
          Trusted by Leading Organizations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {customers.map((customer, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={customer.logo}
                alt={customer.name}
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
      </section>


       {/* HowItWorks Section */}

       <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#3d4b56]">How It Works</h2>
          <p className="mt-4 text-lg text-[#3d4b56]/80">
            Our streamlined process makes online voting simple and secure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-[#3c83ff] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-[#3d4b56] mb-4">{step.title}</h3>
              <p className="text-[#3d4b56]/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

       {/* Services Section */}

       <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#3d4b56]">Industries We Serve</h2>
          <p className="mt-4 text-lg text-[#3d4b56]/80">
            Secure and efficient voting solutions for various sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold text-[#3d4b56] mb-2">{industry.title}</h3>
              <p className="text-[#3d4b56]/80">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

       {/* Reviews Section */}

       <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#3d4b56] mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-[#3d4b56]">{review.name}</h3>
                  <p className="text-sm text-[#3d4b56]/60">
                    {review.role} at {review.company}
                  </p>
                </div>
              </div>
              <p className="text-[#3d4b56]/80">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

       {/* CTASection Section */}

       <section className="py-20 bg-[#3c83ff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Voting Process?
        </h2>
        <p className="text-white/90 mb-8 text-lg">
          Join thousands of organizations that trust us with their voting needs
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-white text-[#3c83ff] rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Get Started Free
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>

       {/* Footer Section */}


       <footer className="bg-[#3d4b56] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-[#3c83ff] text-white rounded-md hover:bg-[#3c83ff]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Links and Social */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#3c83ff]">About Us</a></li>
                <li><a href="#" className="hover:text-[#3c83ff]">Services</a></li>
                <li><a href="#" className="hover:text-[#3c83ff]">Pricing</a></li>
                <li><a href="#" className="hover:text-[#3c83ff]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#3c83ff]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#3c83ff]">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LabsVoting. All rights reserved.</p>
        </div>
      </div>
    </footer>























    </div>
  );
};

export default OnboardingPage;
