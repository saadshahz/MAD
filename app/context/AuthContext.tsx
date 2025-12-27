import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

/* -----------------------------
   Context Type
----------------------------- */
interface AuthContextType {
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

/* -----------------------------
   Create Context
----------------------------- */
export const AuthContext = createContext<AuthContextType | null>(null);

/* -----------------------------
   Provider Props
----------------------------- */
interface AuthProviderProps {
  children: ReactNode;
}

/* -----------------------------
   Provider
----------------------------- */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const res = await axios.post<{ token: string }>(
        "https://reqres.in/api/login",
        { email, password }
      );

      await AsyncStorage.setItem("token", res.data.token);
      setToken(res.data.token);
    } catch (error) {
      throw new Error("Invalid login");
    }
  };

  const logout = async (): Promise<void> => {
    await AsyncStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
      setLoading(false);
    };

    loadToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
