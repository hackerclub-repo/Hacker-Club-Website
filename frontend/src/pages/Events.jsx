import React from 'react';

const Events = () => {
  return (
    <div className="events">
      <section className="events-list p-12">
        <h1 className="text-4xl font-bold text-center">Upcoming Events</h1>
        <div className="mt-8 space-y-4">
          <div className="event-card bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">Hackathon 2025</h2>
            <p>Join us for a 48-hour hackathon to create innovative solutions!</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">Register</button>
          </div>
          <div className="event-card bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">Tech Talk</h2>
            <p>Get insights from industry experts on the latest in technology.</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">Register</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
