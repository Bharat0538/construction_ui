import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Real Estate Services Management</h1>
      <nav>
        <ul>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;