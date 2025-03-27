import React, { useState } from "react";

const events = [
    { id: 1, name: "Birthday Party", date: "2025-08-15", location: "Coimbatore", type: "Personal" },
    { id: 2, name: "Tech Conference", date: "2025-09-10", location: "Chennai", type: "Professional" },
    { id: 3, name: "Wedding Ceremony", date: "2025-10-05", location: "Madurai", type: "Personal" },
    { id: 4, name: "Business Summit", date: "2025-11-20", location: "Trichy", type: "Professional" },
  ];

function EventDisplayPage() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" ? events : events.filter(event => event.type === filter);

  return (
    <div>
      <h2>Upcoming Events</h2>

      <label>Filter by Type: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Personal">Personal</option>
        <option value="Professional">Professional</option>
      </select>

      <ul>
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <strong>{event.name}</strong> - {event.date} - {event.location} ({event.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventDisplayPage;
