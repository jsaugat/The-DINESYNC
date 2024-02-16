import React, { useState } from 'react';

const ReservationForm = () => {
  const [userData, setUserData] = useState({}); // User details
  const [selectedTables, setSelectedTables] = useState([]); // Table selection
  const [date, setDate] = useState(''); // Date
  const [time, setTime] = useState(''); // Time
  const [duration, setDuration] = useState(''); // Duration

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the server
    const reservationData = {
      user: userData, // Include user details
      tables: selectedTables, // Include selected tables
      date: new Date(`${date} ${time}`), // Combine date and time
      duration: parseInt(duration, 10), // Convert duration to a number
    };

    // Make a request to the server to create a reservation
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData),
      });

      // Handle the server response as needed
      if (response.ok) {
        // Reservation created successfully
        console.log('Reservation created!');
      } else {
        // Handle errors if any
        const errorData = await response.json();
        console.error('Error creating reservation:', errorData.message);
      }
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      {/* Example: User details */}
      <label>
        User Name:
        <input
          type="text"
          value={userData.name || ''}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </label>

      {/* Example: Table selection */}
      {/* (Your implementation may differ based on UI/UX decisions) */}
      <label>
        Select Tables:
        <select
          multiple
          value={selectedTables}
          onChange={(e) => setSelectedTables(Array.from(e.target.selectedOptions, (option) => option.value))}
        >
          {/* Render your table options dynamically based on available tables */}
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          {/* ... */}
        </select>
      </label>

      {/* Example: Date and Time */}
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>

      {/* Example: Duration */}
      <label>
        Duration (hours):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </label>

      {/* Submit button */}
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default ReservationForm;
