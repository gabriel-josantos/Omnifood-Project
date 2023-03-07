import React from "react";

const LoginContext = React.createContext({
  isLoggedIn: false,
  modal: false,
  toggleModal: () => {},
  onLogin: () => {},
  onLogout: () => {},
});

export default LoginContext;
