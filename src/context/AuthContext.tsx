import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { login, me, logout } from "../service/authService";
import { LoginCredentials, UserSession } from "../types/auth";

interface AuthContextProps {
  userSession: UserSession | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userSession, setUserSession] = useState<UserSession | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const response = await me();
      if (response.success && response.session) {
        setUserSession(response.session);
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (credentials: LoginCredentials) => {
    const response = await login(credentials);
    if (response.success && response.session) {
      setUserSession(response.session);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUserSession(null);
  };

  return (
    <AuthContext.Provider
      value={{ userSession, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
