import React, { useState, useEffect } from 'react';
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

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact min-h-screen bg-black text-white scroll-smooth">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/src/assets/wallpaper-contact.avif')",
          backgroundSize: '110%',
        }}
      >
        <div className="absolute top-20 left-45 w-20 h-20 rounded-full overflow-hidden shadow-lg animate-bounce" data-aos="fade-down">
          <img src="/src/assets/circle1.png" alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-20 right-60 w-20 h-20 rounded-full overflow-hidden shadow-lg animate-bounce" data-aos="fade-down">
          <img src="/src/assets/circle2.png" alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-30 left-60 w-20 h-20 rounded-full overflow-hidden shadow-lg animate-bounce" data-aos="fade-up">
          <img src="/src/assets/circle3.png" alt="Image 3" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-30 right-110 w-20 h-20 rounded-full overflow-hidden shadow-lg animate-bounce" data-aos="fade-up">
          <img src="/src/assets/circle4.png" alt="Image 4" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto text-center px-6" data-aos="zoom-in">
          <h1 className="text-7xl font-extrabold mb-6 leading-tight tracking-tight text-shadow-xl">
            Reach Out to Us
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Whether you have a tech query, want to collaborate, or are interested in exciting new opportunities, we’re here to assist you in your journey.
          </p>
          <a
            href="#contact-form"
            className="bg-green-600 text-white py-4 px-10 rounded-lg text-2xl font-semibold hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex items-center gap-3"
          >
            Contact Now <FiArrowRight />
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="px-6 py-20 max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-black p-10 rounded-3xl shadow-2xl border border-gray-200 space-y-6"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold text-center">Contact Us</h2>

            {['name', 'email', 'phone', 'subject'].map((field) => (
              <input
                key={field}
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                name={field}
                placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}*`}
                value={form[field]}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF7F]"
              />
            ))}

            <textarea
              name="message"
              placeholder="Message*"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg min-h-[140px] resize-none focus:outline-none focus:ring-2 focus:ring-[#00FF7F]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#00FF7F] hover:bg-[#00e46e] text-black py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Info Section */}
          <div className="text-white space-y-8 p-6 md:p-10 bg-black rounded-3xl shadow-2xl" data-aos="fade-left">
            <h2 className="text-3xl font-extrabold text-[#00FF7F]">Connect with Us</h2>
            <p className="text-lg leading-relaxed opacity-90">
              Explore how we’re revolutionizing the future through cutting-edge technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { icon: <FaShieldAlt className="text-[#00FF7F] mr-2" />, text: 'Empowering innovation through technology' },
                { icon: <FaRobot className="text-[#00FF7F] mr-2" />, text: 'Tech Innovation Hub' },
                { icon: <FaBrain className="text-[#00FF7F] mr-2" />, text: 'Hacker-Driven AI Solutions' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-[#0e0e0e] border border-[#00FF7F] rounded-xl p-5 transition transform hover:scale-105 hover:shadow-lg hover:bg-[#00FF7F]/10"
                >
                  {item.icon}
                  <p className="text-base font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future of Work */}
<section className="px-6 py-36 bg-[#00FF7F] text-black" data-aos="zoom-in">
  <div className="max-w-6xl mx-auto text-center space-y-10">
    <div className="bg-gray-900 p-16 rounded-3xl shadow-xl min-h-[400px] flex flex-col items-center justify-center space-y-8">
      <h2 className="text-4xl md:text-4xl font-extrabold leading-snug tracking-tight text-white">
      Hacker Club:  <br className="hidden md:block" />
        <span className="text-[#00FF7F]">Uniting Coders, Creators, and Rebels to Build the Future.</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
      Discover how the Hacker Club is empowering innovators to shape the future of tech.
      Join the movement where code meets creativity and ideas turn into impact.
      </p>
      <button
        onClick={() => alert('Get Started Now')}
        className="bg-black text-[#00FF7F] py-3 px-10 rounded-full text-lg font-semibold shadow-lg hover:bg-[#111] hover:shadow-[#00FF7F] transition-all duration-300 hover:scale-105 flex items-center gap-2"
      >
        Get Started Now
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414L3.707 10.707a1 1 0 01-1.414-1.414l6-6z"
            clipRule="evenodd"
          />
        </svg>
      </button>
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

export default Contact;
