"use client";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext({ isAuthenticated: false});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        
        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp > currentTime) {
          setIsAuthenticated(true);
        } 
        else {
          // Token expired
          localStorage.removeItem("token");
          localStorage.removeItem("refresh-token");
          localStorage.removeItem("user");
          setIsAuthenticated(false);
        }
      } catch (err) {
        // Token is invalid
        console.error("Invalid token", err);
        localStorage.removeItem("token");
        localStorage.removeItem("refresh-token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
