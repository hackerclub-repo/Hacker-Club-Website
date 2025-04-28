import React from 'react';
import { FiHome, FiCalendar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import hackerBg from '../assets/hackerclub.jpg'; // Ensure image exists


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black flex font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-black border-r border-gray-700 text-white p-6 space-y-6 shadow-xl">
        <h2 className="text-2xl font-extrabold mb-8 hover:text-green-400 transition duration-300">
          🕶 Admin Panel
        </h2>
        <div className="space-y-4">
          <div className="flex items-center bg-green-600 px-4 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transform transition duration-300">
            <FiHome className="mr-2" />
            Dashboard
          </div>
          <div
            className="flex items-center text-gray-300 hover:text-green-400 transition-transform transform hover:translate-x-2 cursor-pointer duration-300"
            onClick={() => navigate('/admin/ManageEvents')}
          >
            <FiCalendar className="mr-2" />
            Manage Events
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 p-8 space-y-12 text-white overflow-y-auto bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-overlay"
        style={{ backgroundImage: `url(${hackerBg})` }}
      >
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate__animated animate__fadeIn animate__slideInFromLeft animate__delay-1s">
          {[{ label: 'Total Registered Users', value: 10 },
            { label: 'Total Events', value: 15 },
            { label: 'Active Events This Month', value: 3 }].map((stat, i) => (
            <div
              key={i}
              className="bg-black border border-gray-700 rounded-xl p-5 hover:border-green-500 transition-all duration-300 shadow-md hover:shadow-green-500/20 transform hover:scale-105"
            >
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-3xl font-bold mt-1 text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate__animated animate__fadeIn animate__slideInFromLeft animate__delay-2s">
          <div className="bg-black border border-gray-700 rounded-xl p-5 hover:border-green-500 transition duration-300">
            <p className="text-sm text-gray-400 mb-3">Recent Activity Feed</p>
            <div className="space-y-2">
              <div className="h-3 bg-gray-600 rounded w-3/4 animate-pulse"></div>
              <div className="h-3 bg-gray-600 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
          <div className="bg-black border border-gray-700 rounded-xl p-5 hover:border-green-500 transition duration-300">
            <p className="text-sm text-gray-400 mb-3">Engagement Analytics</p>
            <div className="h-36 bg-gradient-to-r from-green-500 to-green-700 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Manage Events & Users */}
        <div className="grid md:grid-cols-3 gap-6 animate__animated animate__fadeIn animate__slideInFromLeft animate__delay-3s">
          {/* Manage Events */}
          <div className="bg-black border border-gray-700 rounded-xl p-5 hover:border-green-500 transition duration-300">
            <p className="text-lg font-bold mb-4 text-white">Manage Events</p>
            <button className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded mb-4 transition transform hover:scale-105 shadow-md">
              + Create Event
            </button>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">05 August</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Upcoming</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">16 August</span>
                <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded">Completed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">23 August</span>
                <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded">Completed</span>
              </div>
            </div>
          </div>

          {/* Manage Users (Email) */}
          <div className="bg-black border border-gray-700 rounded-xl p-5 hover:border-green-500 transition duration-300">
            <p className="text-lg font-bold mb-4 text-white">Manage Users</p>
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-600 p-2 rounded bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 mb-4"
            />
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Jane Smith</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">jane@example.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Mary Adams</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">mary@example.com</span>
              </div>
            </div>
          </div>

          {/* Manage Users (Event Status) */}
          <div className="bg-black border border-gray-700 rounded-xl p-5 hover:border-green-500 transition duration-300">
            <p className="text-lg font-bold mb-4 text-white">User Event Status</p>
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-600 p-2 rounded bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 mb-4"
            />
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">John Smith</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Upcoming</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Carola White</span>
                <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded">Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Features */}
        <div className="text-sm text-gray-300 border-t border-gray-700 pt-4 animate__animated animate__fadeIn animate__slideInFromLeft animate__delay-4s">
          <p className="font-semibold mb-2 text-white">Bonus Admin Features</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 list-disc list-inside gap-y-2">
            <li className="hover:text-green-400 transition">Homepage Highlight Toggle</li>
            <li className="hover:text-green-400 transition">Role Management</li>
            <li className="hover:text-green-400 transition">Bulk Email Support</li>
            <li className="hover:text-green-400 transition">Performance Logs</li>
            <li className="hover:text-green-400 transition">Custom Reports</li>
            <li className="hover:text-green-400 transition">More Analytics</li>
            <li className="hover:text-green-400 transition">Data Export</li>
            <li className="hover:text-green-400 transition">Audit History</li>
            <li className="hover:text-green-400 transition">System Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
