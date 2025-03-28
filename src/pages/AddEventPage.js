import React, { useState, useContext } from "react";
import { EventContext } from "../components/EventProvider";

import { useNavigate } from "react-router-dom";
import "../styles.css";

function AddEventPage() {
  const { events, setEvents } = useContext(EventContext); // Use global event state
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEvent = { eventName, eventDescription, startDate, endDate, createdBy };

    if (editingIndex !== null) {
      // If editing, update existing event
      const updatedEvents = [...events];
      updatedEvents[editingIndex] = newEvent;
      setEvents(updatedEvents);
      setEditingIndex(null);
    } else {
      // Otherwise, add a new event
      setEvents([...events, newEvent]);
    }

    // Reset input fields
    setEventName("");
    setEventDescription("");
    setStartDate("");
    setEndDate("");
    setCreatedBy("");

    // Redirect to event display page
    navigate("/events");
  };

  return (
    <div className="add-event-container">
      <h2>{editingIndex !== null ? "Edit Event" : "Add Event"}</h2>
      <form onSubmit={handleAddEvent}>
        <input type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        <textarea placeholder="Event Description" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} required />
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        <input type="text" placeholder="Created By" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} required />
        <button type="submit">{editingIndex !== null ? "Update Event" : "Add Event"}</button>
      </form>
    </div>
  );
}

export default AddEventPage;
