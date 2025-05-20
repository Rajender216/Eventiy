import React, { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";

const EventCard = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleGetTickets = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //open a new tab with the ticket link
    window.open(event.originalUrl, "_blank");
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{event.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1 text-red-500" />
            {event.date}
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-1 text-blue-500" />
            {event.location}
          </span>
        </div>
        <button
          onClick={handleGetTickets}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center"
        >
          <FaTicketAlt className="mr-2" />
          GET TICKETS
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Enter Your Email</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
