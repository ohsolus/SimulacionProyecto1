import axios from "axios";
import { LoginCredentials, AuthResponse } from "../types/auth";

const API_URL = "http://localhost:5000/login";

export const login = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    `${API_URL}/login`,
    credentials
  );
  return response.data;
};

export const me = async (): Promise<AuthResponse> => {
  const response = await axios.get<AuthResponse>(`${API_URL}/me`, {
    withCredentials: true,
  });
  return response.data;
};

export const logout = async (): Promise<void> => {
  await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
};
