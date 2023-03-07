import { useState } from "react";
import LoginContext from "./login-context";

function LoginProvider(props) {
  const [modal, setModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleModal() {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  function loginHandler(email, password) {
    if (password === "12345678") {
      setIsLoggedIn(true);
      setModal(false);
    } else {
      return;
    }
  }
  function logoutHandler() {
    setIsLoggedIn(false);
    setModal(false);
  }

  const loginContext = {
    isLoggedIn: isLoggedIn,
    modal: modal,
    toggleModal: toggleModal,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
