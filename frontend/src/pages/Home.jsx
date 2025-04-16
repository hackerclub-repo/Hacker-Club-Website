import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <section className="hero bg-blue-500 text-white p-12 text-center">
        <h1 className="text-4xl font-bold">Welcome to Hacker Club</h1>
        <p className="mt-4">Your gateway to tech and innovation</p>
        <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded">Join Us</button>
      </section>

      <section className="mission-vision p-12">
        <h2 className="text-3xl font-bold text-center">Mission & Vision</h2>
        <p className="text-center mt-4">Our mission is to empower students through innovative technical activities.</p>
      </section>
    </div>
  );
};

export default Home;
