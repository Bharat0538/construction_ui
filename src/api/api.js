import axios from "axios";

const API_URL = "http://localhost:8080/api"; // Spring Boot API URL

// Axios instance for API calls
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchServices = () => api.get("/services");
export const addService = (service) => api.post("/services", service);
export const updateService = (id, service) => api.put(`/services/${id}`, service);
export const deleteService = (id) => api.delete(`/services/${id}`);

export const fetchClients = () => api.get("/clients");
export const addClient = (client) => api.post("/clients", client);
export const updateClient = (id, client) => api.put(`/clients/${id}`, client);
export const deleteClient = (id) => api.delete(`/clients/${id}`);

export const fetchServiceRequests = () => api.get("/requests");
export const createServiceRequest = (request) => api.post("/requests", request);
export const updateServiceRequest = (id, request) => api.put(`/requests/${id}`, request);

export const addFeedback = (feedback) => api.post("/feedbacks", feedback);
export const fetchFeedbackByRequestId = (id) => api.get(`/feedbacks/by-request/${id}`);

export const addPayment = (payment) => api.post("/payments", payment);
export const fetchPaymentsByRequestId = (id) => api.get(`/payments/by-request/${id}`);

export const fetchReports = () => api.get("/reports");
export const createReport = (report) => api.post("/reports", report);

// Add this default export:
export default api;