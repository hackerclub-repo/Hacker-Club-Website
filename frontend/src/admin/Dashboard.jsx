import React from 'react';
import { FiHome, FiCalendar, FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; 
const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-black flex font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-black border-r border-gray-700 text-white p-6 space-y-6 ">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <div className="space-y-4">
          <div className="flex items-center bg-green-600 px-4 py-2 rounded-xl font-semibold">
            <FiHome className="mr-2" />
            Dashboard
          </div>
          <div
  className="flex items-center hover:text-green-400 cursor-pointer"
  onClick={() => navigate('/admin/ManageEvents')}
>
            <FiCalendar className="mr-2" />
            Manage Events
          </div>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-6  bg-gray-950 text-white">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black border border-gray-700 rounded-lg p-4">
            <p className="text-white text-sm">Total Registered Users</p>
            <p className="text-2xl font-semibold text-white">10</p>
          </div>
          <div className="bg-black border border-gray-700 rounded-lg p-4">
            <p className="text-white text-sm">Total Events</p>
            <p className="text-2xl font-semibold text-white">15</p>
          </div>
          <div className="bg-black border border-gray-700 rounded-lg p-4">
            <p className="text-white text-sm">Active Events This Month</p>
            <p className="text-2xl font-semibold text-white">3</p>
          </div>
        </div>

        {/* Middle Analytics & Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black border border-gray-700 rounded-lg p-4">
            <p className="text-white mb-2 text-sm">Recent Activity Feed</p>
            <div className="h-2 bg-gray-600 rounded w-3/4 mb-2"></div>
            <div className="h-2 bg-gray-600 rounded w-1/2"></div>
          </div>
          <div className="bg-black border border-gray-700 rounded-lg p-4">
            <p className="text-white mb-2 text-sm">Engagement Analytics</p>
            <div className="h-32 bg-gradient-to-r from-green-500 to-green-700 rounded"></div>
          </div>
        </div>

        {/* Manage Events & Create Event */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-black border border-gray-700 rounded-lg p-4 md:col-span-1">
            <p className="text-lg font-bold mb-4 text-white">Manage Events</p>
            <button className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded mb-4">+ Create Event</button>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">05 August</span>
                <span className="text-sm bg-green-100 text-green-700 px-2 rounded">upcoming</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">16 August</span>
                <span className="text-sm bg-gray-200 text-gray-700 px-2 rounded">Completed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">23 August</span>
                <span className="text-sm bg-gray-200 text-gray-700 px-2 rounded">Completed</span>
              </div>
            </div>
          </div>

          {/* Manage Users (Email) */}
          <div className="bg-black border border-gray-700 rounded-lg p-4">
            <p className="text-lg font-bold mb-4 text-white">Manage Users</p>
            <div className="mb-2">
              <input type="text" placeholder="Search" className="w-full border border-gray-600 p-2 rounded bg-black text-white placeholder-gray-400" />
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Janes Smith</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">ianesih@racom</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Mary Agastraums</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">mail@acc.com</span>
            </div>
          </div>

          {/* Manage Users (Events Attended) */}
          <div className="bg-black border border-gray-700 rounded-lg p-4">
            <p className="text-lg font-bold mb-4 text-white">Manage Users</p>
            <div className="mb-2">
              <input type="text" placeholder="Search" className="w-full border border-gray-600 p-2 rounded bg-black text-white placeholder-gray-400" />
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">John Smith</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Upcoming</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Carola Smith</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Completed</span>
            </div>
          </div>
        </div>

        {/* Bonus Features */}
        <div className="text-sm text-gray-300 border-t border-gray-700 pt-4">
          <p className="font-semibold mb-2 text-white">Bonus Admin Features</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 list-disc list-inside">
            <li>Homepage Highlight Toggle</li>
            <li>Role Management</li>
            <li>Role Assignment</li>
            <li>Bulk Email Feature</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
