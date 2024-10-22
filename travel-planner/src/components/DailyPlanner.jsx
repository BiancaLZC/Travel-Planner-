import React, { useState } from 'react';

const DailyPlanner = () => {
  const [days, setDays] = useState([{ day: 1, activities: [] }]);

  const addDay = () => {
    setDays([...days, { day: days.length + 1, activities: [] }]);
  };

  const addActivity = (dayIndex) => {
    const activity = prompt('Enter an activity:');
    const newDays = [...days];
    newDays[dayIndex].activities.push(activity);
    setDays(newDays);
  };

  return (
    <div>
      <h2>Plan your trip</h2>
      {days.map((day, index) => (
        <div key={index}>
          <h3>Day {day.day}</h3>
          <ul>
            {day.activities.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
          <button onClick={() => addActivity(index)}>Add Activity</button>
        </div>
      ))}
      <button onClick={addDay}>Add Another Day</button>
    </div>
  );
};

export default DailyPlanner;
