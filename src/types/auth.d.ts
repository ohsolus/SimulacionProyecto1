export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserSession {
  userId: string;
  sessionId: string;
  createdAt: string;
  expiresAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  session: UserSession | null;
}
