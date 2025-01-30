// src/http-common.ts
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000", // Cambia la URL al endpoint de tu API
  headers: {
    "Content-type": "application/json",
  },
});

export default http;
