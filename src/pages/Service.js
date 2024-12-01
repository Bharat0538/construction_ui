import React, { useState, useEffect } from "react";
import { fetchServices, addService, updateService, deleteService } from "../api/api";
import ServiceList from "../components/ServiceList";
import AddService from "../components/AddService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices()
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const handleAddService = (service) => {
    addService(service)
      .then((response) => setServices([...services, response.data]))
      .catch((error) => console.error("Error adding service:", error));
  };

  const handleDeleteService = (id) => {
    deleteService(id)
      .then(() => setServices(services.filter(service => service.id !== id)))
      .catch((error) => console.error("Error deleting service:", error));
  };

  return (
    <div>
      <h2>Services</h2>
      <AddService onAdd={handleAddService} />
      <ServiceList services={services} onDelete={handleDeleteService} />
    </div>
  );
};

export default Services;