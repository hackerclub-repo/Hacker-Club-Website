import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('/src/assets/wallpaper.png')] bg-cover bg-center bg-fixed flex items-center justify-center">
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>
  <div className="relative z-10 text-center px-6 max-w-4xl">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl tracking-tight">
      Welcome to <span className="text-[#00FF7F]">Hacker Club</span>
    </h1>
    <p className="mt-6 text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
      Shape the future of tech — innovate, collaborate, and lead with us.
    </p>
    <div className="mt-10 flex flex-wrap justify-center gap-5">
      <a
        href="#get-started"
        className="bg-[#00FF7F] hover:bg-[#00e67c] text-black font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg"
      >
        Get Started
      </a>
      <a
        href="#explore"
        className="border border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition duration-300"
      >
        Explore More
      </a>
    </div>
  </div>
  <div className="absolute -top-10 left-1/3 w-32 h-32 bg-[#00FF7F]/20 rounded-full blur-2xl opacity-30 animate-pulse hidden md:block"></div>
  <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-[#00FF7F]/30 rounded-full blur-2xl opacity-30 animate-pulse hidden md:block"></div>
</section>









{/* Image Section */}
<section className="py-20 px-6 md:px-20 bg-black text-white" id="ai-section">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div className="relative group h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 ease-in-out hover:scale-105">
      <img
        src="/src/assets/image1.svg"
        alt="AI-related"
        className="object-contain w-full h-full transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/40 group-hover:bg-black/10 transition-all duration-300"></div>
    </div>
    <div className="space-y-8">
      <h2 className="text-4xl font-extrabold text-[#00FF7F] leading-snug">
        Unblock the Potential of Your Business with AI
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        AI is revolutionizing industries globally — improving operations, boosting efficiency, and transforming customer experiences. It’s time to unlock what’s possible.
      </p>

      <h3 className="text-2xl font-semibold text-[#00FF7F] pt-4">What We Offer</h3>
      <div className="space-y-6">
        <div className="bg-gray-900/70 hover:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-800 transition-all duration-300">
          <h4 className="text-xl font-bold text-gray-200">AI-Powered Logistics & Transportation</h4>
          <p className="text-gray-400 mt-2">
            Streamline your supply chain with intelligent routing, predictive maintenance, and autonomous delivery solutions.
          </p>
        </div>

        <div className="bg-gray-900/70 hover:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-800 transition-all duration-300">
          <h4 className="text-xl font-bold text-gray-200">Recommendation System Development</h4>
          <p className="text-gray-400 mt-2">
            Enhance user engagement with personalized suggestions driven by data, behavior, and real-time context.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>






{/* Service Section */}
<section className="py-20 px-6 md:px-20 bg-black text-white" id="services-section">
  <div className="max-w-7xl mx-auto text-center space-y-16">
    <h2 className="text-4xl font-extrabold text-[#00FF7F] leading-tight">
      Drive Your Digital Success with <br /> Our Comprehensive Services
    </h2>

    <div className="space-y-16">
      {[
        {
          title: "AI-Powered Virtual Assistants",
          img: "/path/to/ai-virtual-assistant-image.jpg",
          desc: "Our virtual assistants are available 24/7, enhance user engagement with human-like conversations, and significantly improve productivity by automating repetitive tasks and queries."
        },
        {
          title: "Human Resource Management",
          img: "/path/to/human-resource-image.jpg",
          desc: "Our HR solutions streamline recruitment, improve employee retention, and support goal-oriented growth—helping you build a more productive and satisfied workforce."
        },
        {
          title: "Supply Chain Optimization",
          img: "/path/to/supply-chain-image.jpg",
          desc: "Our optimization tools offer real-time visibility, reduce operational costs, and deliver faster, smarter logistics decisions powered by data analytics and AI-driven forecasting."
        }
      ].map(({ title, img, desc }, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-300 group ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
              <img src={img} alt={title} className="object-cover w-full h-72 md:h-96" />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-4 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#00FF7F]">{title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* AI Integration Services Section */}
      <section className="py-20 px-6 md:px-20 bg-black text-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    {/* Content */}
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold text-[#00FF7F] leading-snug">
        Tectorn Gave Ingenious Ideas <br className="hidden md:block" />
        Infusing Your Brand With Success
      </h2>
      
      <h3 className="text-2xl font-semibold text-[#00FF7F]">AI Integration Services</h3>
      <p className="text-lg text-gray-400 leading-relaxed">
        Leverage AI to automate workflows, deliver personalized experiences, and boost business intelligence—driving growth like never before.
      </p>

      <div className="space-y-4">
        {[
          "AI Chatbot Development",
          "Image and Video Analysis"
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 bg-gray-900/60 hover:bg-gray-800 p-4 rounded-lg transition duration-300"
          >
            <div className="text-[#00FF7F] text-xl"></div>
            <p className="text-gray-300 text-lg">{item}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Image */}
    <div className="rounded-3xl overflow-hidden shadow-2xl transition duration-500 hover:scale-105">
      <img
        src="/src/assets/image2.png"
        alt="AI Integration"
        className="object-cover w-full h-[400px] md:h-[500px]"
      />
    </div>
  </div>
</section>


      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#00FF7F] mb-16 leading-tight">
      Meet Our Highly Talented <br className="hidden md:block" />
      World-Class Designers and Visualizers
    </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12">
            {[
              { name: "John Smith", role: "CEO", img: "/src/assets/team1.webp" },
              { name: "Thomas Erb", role: "COO", img: "/src/assets/team2.webp" },
              { name: "Anna Leigh", role: "CMO", img: "/src/assets/team3.webp" }
            ].map(({ name, role, img }, i) => (
              <div key={i} className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 transform relative">
                <div className="w-full h-120 overflow-hidden rounded-lg mb-0">
                  <img src={img} alt={name} className="w-full h-full object-cover -mt-0" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 p-4 text-center">
                  <h3 className="text-xl font-semibold text-white">{name}</h3>
                  <p className="text-sm text-gray-300">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* The Future of Work Section */}
      <section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-black via-gray-900 to-[#0f0f0f] text-white overflow-hidden">
  {/* Radial background pattern */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00FF7F_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

  <div className="relative max-w-7xl mx-auto text-center z-10">
    {/* Headline */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF7F] via-white to-[#00D9A0] leading-tight tracking-tight">
      The Future of Work is Here.<br /> Are You Ready to Embrace AI?
    </h2>

    {/* Subtitle */}
    <p className="text-lg md:text-xl mt-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
      AI is revolutionizing industries with tools that generate content, automate workflows, and elevate productivity—from natural language understanding to smart robots and intelligent quality control.
    </p>

    {/* Cards */}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {[
        {
          title: "Text Generation & Translation",
          desc: "Craft engaging content and communicate globally with real-time AI-powered language tools.",
        },
        {
          title: "Sentiment Analysis",
          desc: "Gain deep insights into customer emotions and tailor your strategy accordingly.",
        },
        {
          title: "Robotics & Automation",
          desc: "Boost production efficiency with intelligent robotics and automated systems.",
        },
        {
          title: "AI-Powered Quality Control",
          desc: "Ensure product excellence using real-time defect detection with AI and vision.",
        },
        {
          title: "Process Automation",
          desc: "Free your team from repetitive tasks through intelligent workflow automation.",
        },
        {
          title: "Future-Ready Workforce",
          desc: "Equip your team with AI tools and skills to thrive in the digital age.",
        },
      ].map(({ title, desc }, idx) => (
        <div
          key={idx}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#00FF7F]"
        >
          <h3 className="text-2xl font-semibold text-[#00FF7F] mb-3">{title}</h3>
          <p className="text-gray-300 text-base">{desc}</p>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <div className="mt-16">
      <a
        href="#get-started"
        className="inline-block bg-gradient-to-r from-[#00FF7F] via-[#00E6B7] to-[#00D9A0] text-black font-semibold text-lg px-10 py-4 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
      >
        Get Started Now
      </a>
    </div>
  </div>
</section>


      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 justify-items-center">
    {/* First Section: Email Submission */}
    <div className="space-y-6 text-center">
      <h2 className="text-3xl font-bold text-[#00FF7F]">Let's make something great work together.</h2>
      <form className="space-y-4 mt-6">
        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full p-4 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#00FF7F] transition"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-[#00FF7F] to-[#00FFA2] text-black py-3 px-8 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>

    {/* Second Section: Useful Links */}
    <div className="space-y-6 text-center">
      <h3 className="text-2xl font-bold text-[#00FF7F]">Useful Links</h3>
      <ul className="space-y-4">
        {["Home", "About", "Pricing", "Contact"].map((link, i) => (
          <li key={i}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-[#00FF7F] transition duration-300 ease-in-out transform hover:scale-105"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Third Section: Contact Information */}
    <div className="space-y-6 text-center">
      <h3 className="text-2xl font-bold text-[#00FF7F]">Contact</h3>
      <p className="text-gray-400">Location: 123 Street Name, San Francisco, 800400, USA</p>
      <p className="text-gray-400">Mail: info@example.com</p>
      <p className="text-gray-400">Phone: +1 (888) 456 7890</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default About;
