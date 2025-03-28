import React, { createContext, useState } from "react";

// Create Context
export const EventContext = createContext();

// Provider Component
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]); // Store added events

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};
