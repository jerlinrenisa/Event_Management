import React, { useState } from "react";
import "../styles.css";

function AddEventPage() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [startAmPm, setStartAmPm] = useState("AM");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [endAmPm, setEndAmPm] = useState("AM");
  const [createdBy, setCreatedBy] = useState("");
  const [events, setEvents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddEvent = (e) => {
    e.preventDefault();

    const newEvent = {
      eventName,
      eventDescription,
      startDate,
      startTime: `${startTime} ${startAmPm}`,
      endDate,
      endTime: `${endTime} ${endAmPm}`,
      createdBy,
    };

    if (editingIndex !== null) {
      // Update existing event
      const updatedEvents = [...events];
      updatedEvents[editingIndex] = newEvent;
      setEvents(updatedEvents);
      setEditingIndex(null);
    } else {
      // Add new event
      setEvents([...events, newEvent]);
    }

    // Clear the form fields
    setEventName("");
    setEventDescription("");
    setStartDate("");
    setStartTime("");
    setStartAmPm("AM");
    setEndDate("");
    setEndTime("");
    setEndAmPm("AM");
    setCreatedBy("");
  };

  const handleEditEvent = (index) => {
    const eventToEdit = events[index];
    setEventName(eventToEdit.eventName);
    setEventDescription(eventToEdit.eventDescription);
    setStartDate(eventToEdit.startDate);
    setStartTime(eventToEdit.startTime.split(" ")[0]); // Extract time
    setStartAmPm(eventToEdit.startTime.split(" ")[1]); // Extract AM/PM
    setEndDate(eventToEdit.endDate);
    setEndTime(eventToEdit.endTime.split(" ")[0]); // Extract time
    setEndAmPm(eventToEdit.endTime.split(" ")[1]); // Extract AM/PM
    setCreatedBy(eventToEdit.createdBy);
    setEditingIndex(index);
  };

  const handleDeleteEvent = (index) => {
    const filteredEvents = events.filter((_, i) => i !== index);
    setEvents(filteredEvents);
  };

  return (
    <div className="add-event-container">
      <h2>{editingIndex !== null ? "Edit Event" : "Add Event"}</h2>
      <form onSubmit={handleAddEvent}>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <textarea
          placeholder="Event Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          required
        ></textarea>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <label>Start Time:</label>
        <div className="time-input">
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <select value={startAmPm} onChange={(e) => setStartAmPm(e.target.value)}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <label>End Time:</label>
        <div className="time-input">
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
          <select value={endAmPm} onChange={(e) => setEndAmPm(e.target.value)}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Created By"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          required
        />
        <button type="submit">{editingIndex !== null ? "Update Event" : "Add Event"}</button>
      </form>

      <h2>Event List</h2>
      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <h3>{event.eventName}</h3>
            <p>{event.eventDescription}</p>
            <p>
              <strong>Start:</strong> {event.startDate} at {event.startTime}
            </p>
            <p>
              <strong>End:</strong> {event.endDate} at {event.endTime}
            </p>
            <p>
              <strong>Created By:</strong> {event.createdBy}
            </p>
            <button onClick={() => handleEditEvent(index)}>Update</button>
            <button onClick={() => handleDeleteEvent(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddEventPage;
