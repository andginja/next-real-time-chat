"use client";
import { useNavigate } from "react-router-dom";
import AuthContext from "./auth-context";
import { generateRandom32 } from "../generateId";
import { useEffect, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [loading, setLoading] = useState(true); // Add loading state

  // Initialize state from local storage
  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn") || "false"));
    setUser(localStorage.getItem("user") || "");
    setUserId(localStorage.getItem("userId") || "");

    setLoading(false); // Change loading state to false after state has been loaded
  }, []);

  // Update local storage when state changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("user", user);
    localStorage.setItem("userId", userId);
  }, [isLoggedIn, user, userId]);

  const logIn = (name: string) => {
    setIsLoggedIn(true);
    setUser(name);
    setUserId(generateRandom32());
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUser("");
    setUserId("");
  };

  const value = {
    isLoggedIn,
    user,
    userId,
    logIn,
    logOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
