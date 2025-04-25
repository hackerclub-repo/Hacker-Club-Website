import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaRobot,
  FaBrain,
} from 'react-icons/fa';
import { FiArrowRight, FiSend } from 'react-icons/fi';
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('/src/assets/wallpaper.png')] bg-cover bg-center bg-fixed flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/70 z-0"></div>
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-[#00FF7F]/30 rounded-full blur-3xl opacity-20 animate-float-slow hidden lg:block"></div>
        <div className="absolute bottom-10 right-1/5 w-28 h-28 bg-[#00FF7F]/20 rounded-full blur-2xl opacity-25 animate-float hidden md:block"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
            Welcome to <span className="text-[#00FF7F]">Hacker Club</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="mt-6 text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Shape the future of tech — innovate, collaborate, and lead with us in a thriving community of creators and visionaries.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a
              data-aos="zoom-in"
              href="#get-started"
              className="bg-[#00FF7F] hover:bg-[#00e67c] text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <i className="fas fa-rocket text-xl"></i>
              Get Started
            </a>
            <a
              data-aos="zoom-in"
              data-aos-delay="300"
              href="#explore"
              className="border border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <i className="fas fa-search text-xl"></i>
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 px-6 md:px-20 bg-black text-white" id="ai-section">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" className="relative group h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-xl transition-transform duration-500 ease-in-out hover:scale-105">
            <img
              src="/src/assets/image1.svg"
              alt="Hacker Club"
              className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90 rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/40 group-hover:bg-black/10 transition-all duration-300"></div>
          </div>
          <div className="space-y-8" data-aos="fade-left">
            <h2 className="text-4xl font-extrabold text-[#00FF7F] leading-snug">
              Ignite Your Passion. Build the Future.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hacker Club is more than a community — it's a launchpad for curious minds and bold creators...
            </p>
            <h3 className="text-2xl font-semibold text-[#00FF7F] pt-4">Why Join Hacker Club?</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Hands-on Hackathons & Projects",
                  desc: "Collaborate, compete, and create..."
                },
                {
                  title: "Tech Talks & Mentorship",
                  desc: "Learn from industry experts..."
                },
                {
                  title: "Community & Networking",
                  desc: "Connect with passionate developers..."
                }
              ].map(({ title, desc }, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={`${i * 100}`}
                  className="bg-gray-900/70 hover:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-800 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-200">{title}</h4>
                  <p className="text-gray-400 mt-2">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-20 px-6 md:px-20 bg-black text-white" id="services-section">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <h2 data-aos="fade-up" className="text-4xl font-extrabold text-[#00FF7F] leading-tight">
            Empower Your Tech Journey with <br /> Hacker Club’s Core Initiatives
          </h2>
          <div className="space-y-16">
            {[
              {
                title: "Hackathons & Innovation Challenges",
                img: "/src/assets/hackathon.jpeg",
                desc: "Push your limits and solve real-world problems..."
              },
              {
                title: "Skill-Building Bootcamps",
                img: "/src/assets/bootcamp.jpeg",
                desc: "Master cutting-edge technologies..."
              },
              {
                title: "Tech Talks & Fireside Chats",
                img: "/src/assets/tech-talks.jpeg",
                desc: "Learn from tech leaders and startup founders..."
              }
            ].map(({ title, img, desc }, i) => (
              <div
                key={i}
                data-aos="fade-up"
                className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-300 group ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
                    <img src={img} alt={title} className="object-cover w-full h-60 md:h-80" />
                  </div>
                </div>
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
          <div data-aos="fade-right" className="space-y-6">
            <h2 className="text-2xl md:text-2xl font-extrabold text-[#00FF7F] leading-tight tracking-wide">
              Empowering Tomorrow's Innovators <br className="hidden md:block" />
              With Hacker Club’s Visionary Programs
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#00FF7F] mt-4">Unleash Your Potential with Us</h3>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              At Hacker Club, we are passionate about transforming ideas into game-changing innovations...
            </p>
            <div className="mt-8 space-y-6">
              {[
                "Hands-on Coding Challenges",
                "Collaborative Project Building",
                "Expert-Led Workshops and Mentorship",
                "Cutting-Edge Technology Exploration"
              ].map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} className="flex items-center space-x-4 bg-gray-900/70 hover:bg-gray-800 p-5 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                  <div className="text-[#00FF7F] text-2xl">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left" className="rounded-3xl overflow-hidden shadow-2xl transition duration-500 hover:scale-105">
            <img src="/src/assets/image2.png" alt="Hacker Club Innovation" className="object-cover w-full h-[400px] md:h-[500px] rounded-3xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 data-aos="fade-up" className="text-4xl font-extrabold text-[#00FF7F] mb-16 leading-tight">
            Meet Our Highly Talented <br className="hidden md:block" />
            Tech Innovators and Code Creators
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12">
            {[
              { name: "John Smith", role: "CEO", img: "/src/assets/team1.webp" },
              { name: "Thomas Erb", role: "COO", img: "/src/assets/team2.webp" },
              { name: "Anna Leigh", role: "CMO", img: "/src/assets/team3.webp" }
            ].map(({ name, role, img }, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={`${i * 100}`} className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 transform relative">
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

      {/* Hacker Club Innovation Section */}
<section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-black via-gray-900 to-[#0f0f0f] text-white overflow-hidden">
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00FF7F_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

  <div className="relative max-w-7xl mx-auto text-center z-10">
    <h2
      data-aos="fade-up"
      className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF7F] via-white to-[#00D9A0] leading-tight tracking-tight"
    >
      Transform Your Ideas Into Reality with Hacker Club
    </h2>
    <p
      data-aos="fade-up"
      data-aos-delay="200"
      className="text-lg md:text-xl mt-6 text-gray-300 max-w-3xl mx-auto leading-relaxed"
    >
      At Hacker Club, we bring together the brightest minds to turn innovative ideas into groundbreaking solutions...
    </p>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {[
        {
          title: "Hands-On Coding Challenges",
          desc: "Sharpen your skills with real-world coding problems..."
        },
        {
          title: "Collaborative Project Building",
          desc: "Work with like-minded innovators..."
        },
        {
          title: "Expert-Led Workshops & Mentorship",
          desc: "Learn from experienced industry leaders..."
        },
        {
          title: "Cutting-Edge Technology Exploration",
          desc: "Dive into the latest technologies and tools..."
        },
        {
          title: "Networking & Community Building",
          desc: "Connect with fellow tech enthusiasts..."
        },
        {
          title: "Hackathons & Competitions",
          desc: "Participate in exciting hackathons..."
        }
      ].map(({ title, desc }, idx) => (
        <div
          key={idx}
          data-aos="fade-up"
          data-aos-delay={`${idx * 100}`}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#00FF7F]"
        >
          <h3 className="text-2xl font-semibold text-[#00FF7F] mb-3">{title}</h3>
          <p className="text-gray-300 text-base">{desc}</p>
        </div>
      ))}
    </div>

    <div data-aos="zoom-in" data-aos-delay="600" className="mt-16">
      <a
        href="#join-us"
        className="inline-block bg-gradient-to-r from-[#00FF7F] via-[#00E6B7] to-[#00D9A0] text-black font-semibold text-lg px-10 py-4 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
      >
        Join Hacker Club Today
      </a>
    </div>
  </div>
</section>


{/* Call to Action */}
      <section className="px-6 py-20 bg-black text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-[#00FF7F]">Let's Build the Future Together</h2>
            <p className="text-lg">
            Join Hacker Club — where problem-solvers become changemakers.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full sm:w-80 p-3 rounded-full border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF7F]"
              />
              <button className="bg-[#00FF7F] text-black py-3 px-6 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300 flex items-center gap-2">
                <FiSend className="text-xl" />
                Send
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#00FF7F]">Useful Links</h3>
            <ul className="space-y-2 text-white text-base">
              <li><a href="/" className="hover:text-[#00FF7F] transition">Home</a></li>
              <li><a href="/about" className="hover:text-[#00FF7F] transition">About</a></li>
              <li><a href="/pricing" className="hover:text-[#00FF7F] transition">Pricing</a></li>
              <li><a href="/contact" className="hover:text-[#00FF7F] transition">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#00FF7F]">Contact</h3>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-xl mt-1" />
              <p>MCA Building, LNCT Campus</p>
            </div>
            <div className="flex items-start gap-2">
              <FaEnvelope className="text-xl mt-1" />
              <p>info@hackerclub.com</p>
            </div>
            <div className="flex items-start gap-2">
              <FaPhoneAlt className="text-xl mt-1" />
              <p>+91 7878787878</p>
            </div>
          </div>
        </div>
      </section>
</div>
  );
};

export default About;
