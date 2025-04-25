import React, { useState } from 'react';

const EventManagement = () => {
  const [events, setEvents] = useState([
    { id: 1, date: '05 August', status: 'upcoming' },
    { id: 2, date: '16 August', status: 'completed' },
    { id: 3, date: '23 August', status: 'completed' },
  ]);

  const addEvent = () => {
    const newEvent = {
      id: events.length + 1,
      date: '30 August',
      status: 'upcoming',
    };
    setEvents([...events, newEvent]);
  };

  return (
    
    <div className="bg-gray-950 text-white min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-black border border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Manage Events</h2>
        <button
          onClick={addEvent}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-6"
        >
          + Create Event
        </button>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex justify-between">
              <span className="text-gray-300">{event.date}</span>
              <span
                className={`text-sm px-2 rounded ${
                  event.status === 'upcoming'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {event.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
