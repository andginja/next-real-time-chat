import AuthContext from "@/utils/context/auth-context";
import React, { useContext } from "react";
import Chat from "./components/chat/chat";
import { LoginForm } from "./components/login/loginForm";
import { MoonLoader } from "react-spinners";
import { COLORS } from "@/styles/colors";
import { LoadingWrapper } from "./homepage.styles";

export const Homepage = () => {
  const { isLoggedIn, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <LoadingWrapper>
        <MoonLoader color={COLORS.primary} />
      </LoadingWrapper>
    );
  }

  return isLoggedIn ? <Chat /> : <LoginForm />;
};
