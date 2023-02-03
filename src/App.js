import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ReactDOM from 'react-dom';
import './App.css';

function App() {

  const AllMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const [selectedDate, setSelectedDate] = useState();
  const [calendarText, setCalendarText] = useState('No date selected');

  const handleDateChange = (value) => {
    setSelectedDate(value);
    setCalendarText(`The selected Date is ${value.toDateString()}`)
  }

  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Year is selected`);
  }

  const handleMonthChange = (value) => {
    const monthValue = AllMonths[value.getMonth()];
    setCalendarText(`${monthValue} Month is selected`);
  }

  return (
    <div className="App">
      <h2 className='calendar-details'>{calendarText}</h2>
      <Calendar 
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
}

export default App;
