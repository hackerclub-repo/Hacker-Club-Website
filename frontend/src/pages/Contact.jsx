import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <section className="contact-form p-12">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <textarea
            placeholder="Your message"
            value={message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          ></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
