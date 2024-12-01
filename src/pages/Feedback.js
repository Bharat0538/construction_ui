import React, { useState, useEffect } from "react";
import { addFeedback, fetchFeedbackByRequestId } from "../api/api";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [requestId, setRequestId] = useState("");
  const [existingFeedback, setExistingFeedback] = useState(null);

  useEffect(() => {
    if (requestId) {
      fetchFeedbackByRequestId(requestId)
        .then((response) => setExistingFeedback(response.data))
        .catch((error) => console.error("Error fetching feedback:", error));
    }
  }, [requestId]);

  const handleFeedbackSubmit = () => {
    addFeedback({ requestId, feedback })
      .then((response) => alert("Feedback submitted!"))
      .catch((error) => console.error("Error submitting feedback:", error));
  };

  return (
    <div>
      <h2>Submit Feedback</h2>
      <input
        type="text"
        placeholder="Enter request ID"
        value={requestId}
        onChange={(e) => setRequestId(e.target.value)}
      />
      {existingFeedback && <div>Existing Feedback: {existingFeedback.feedback}</div>}
      <textarea
        placeholder="Write your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
    </div>
  );
};

export default Feedback;