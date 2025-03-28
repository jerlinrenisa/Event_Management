import React, { useContext } from "react";
import { EventContext } from "../components/EventProvider";

function EventDisplayPage() {
  const { events, setEvents } = useContext(EventContext); // Get events from context

  const handleDeleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div className="event-display-container">
      <h1>Event List</h1>
      {events.length === 0 ? (
        <p>No events added yet.</p>
      ) : (
        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <h3>{event.eventName}</h3>
              <p>{event.eventDescription}</p>
              <p><strong>Start:</strong> {event.startDate}</p>
              <p><strong>End:</strong> {event.endDate}</p>
              <p><strong>Created By:</strong> {event.createdBy}</p>
              <button onClick={() => handleDeleteEvent(index)} className="delete-button">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventDisplayPage;
