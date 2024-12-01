import React, { useEffect, useState } from 'react';
import { fetchServices, deleteService } from '../api/api';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetchServices();
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      fetchServices();
    } catch (error) {
      console.error("Error deleting service", error);
    }
  };

  return (
    <div>
      <h2>Service List</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - {service.description}
            <button onClick={() => handleDelete(service.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;