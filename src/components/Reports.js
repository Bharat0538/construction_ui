import React from 'react';

const Reports = ({ reports }) => {
  return (
    <div>
      <h2>Service Reports</h2>
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            <h3>{report.name}</h3>
            <p>{report.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;