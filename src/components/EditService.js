import React, { useState, useEffect } from 'react';

const EditService = ({ service, updateService }) => {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedService = { ...service, name, description };
    updateService(updatedService);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Service Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Update Service</button>
    </form>
  );
};

export default EditService;