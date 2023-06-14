"use client";
import { createContext } from "react";

export type AuthContextType = {
  isLoggedIn: boolean;
  user: string;
  userId: string;
  logIn: (name: string) => void;
  logOut: () => void;
  loading: boolean;
};

// Create Context object with default value.
export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: "",
  userId: "",
  logIn: () => {},
  logOut: () => {},
  loading: true,
});

export default AuthContext;
