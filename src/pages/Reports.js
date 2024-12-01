import React, { useState, useEffect } from "react";
import { fetchReports, createReport } from "../api/api";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState("");

  useEffect(() => {
    fetchReports()
      .then((response) => setReports(response.data))
      .catch((error) => console.error("Error fetching reports:", error));
  }, []);

  const handleReportSubmit = () => {
    createReport({ report: newReport })
      .then((response) => {
        setReports([...reports, response.data]);
        setNewReport("");
      })
      .catch((error) => console.error("Error submitting report:", error));
  };

  return (
    <div>
      <h2>Reports</h2>
      <textarea
        value={newReport}
        onChange={(e) => setNewReport(e.target.value)}
        placeholder="Write a report"
      ></textarea>
      <button onClick={handleReportSubmit}>Submit Report</button>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>{report.report}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;