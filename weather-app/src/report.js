import React from 'react';
import './index.css';

const Report = ({ week }) => {
  const weeklyReport = week.map(status => {
    return (
      <div className="week" id={status.forecast} key={status.id}>
         {/* <img src={`./images/${status.forecast}.jpg`} alt="forecast" /> */}
        <p>{status.day}</p>
        <ul>
          <li>{status.high} | {status.low}</li>
        </ul>
      </div>
    )
  })
  return (
    <div className="weekly-report">
      { weeklyReport }
    </div>
  );
}
export default Report;
