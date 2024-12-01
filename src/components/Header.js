import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/services">Services</Link> | 
        <Link to="/feedback">Feedback</Link> | 
        <Link to="/reports">Reports</Link>
      </nav>
    </header>
  );
};

export default Header;