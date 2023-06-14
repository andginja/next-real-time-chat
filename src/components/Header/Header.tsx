import React, { useContext } from "react";
import { HeaderContainer, LogWrapper, LogoutButton } from "./Header.styles";
import AuthContext from "@/utils/context/auth-context";

const Header = () => {
  const { isLoggedIn, user, logOut } = useContext(AuthContext);
  return (
    <HeaderContainer>
      Scanchat
      {isLoggedIn && (
        <LogWrapper>
          {user}

          <LogoutButton onClick={logOut}>Logout</LogoutButton>
        </LogWrapper>
      )}
    </HeaderContainer>
  );
};

export default Header;
