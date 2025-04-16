import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <section className="login-form p-12">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded">
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
