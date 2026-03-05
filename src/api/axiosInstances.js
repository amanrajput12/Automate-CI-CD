import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const BASE_URL = 'http://localhost:5173';

export const axiosWithCreds = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const axiosWithoutCreds = axios.create({
  baseURL: BASE_URL,
});
