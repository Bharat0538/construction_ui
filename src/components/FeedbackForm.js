import React, { useState } from 'react';
import { addService } from '../api/api';

const AddService = () => {
  const [service, setService] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addService(service);
      setService({ name: "", description: "" });
      alert("Service added successfully!");
    } catch (error) {
      console.error("Error adding service", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Service</h2>
      <input
        type="text"
        name="name"
        placeholder="Service Name"
        value={service.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Service Description"
        value={service.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddService;