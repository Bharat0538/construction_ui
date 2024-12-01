import React, { useEffect, useState } from "react";
import ServiceList from "../components/ServiceList";
import AddService from "../components/AddService";
import api from "../api/api";

const Services = () => {
  const [services, setServices] = useState([]);

  // Fetch services from the API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  // Add a new service
  const handleAddService = async (service) => {
    try {
      const response = await api.post("/api/services", service);
      setServices([...services, response.data]);
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  // Delete a service
  const handleDeleteService = async (id) => {
    try {
      await api.delete(`/api/services/${id}`);
      setServices(services.filter((service) => service.id !== id));
    } catch (error) {
      console.error("Error deleting service:", error);
    }
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