import { Fragment, useContext } from "react";
import LoginModal from "./LoginModal";
import UserModal from "./UserModal";
import "../../css/LoginHeader.css";
import LoginContext from "../../context/login-context";

function LoginHeader() {
  const loginCtx = useContext(LoginContext);

  const defaultLogin = (
    <div>
      <a
        onClick={loginCtx.toggleModal}
        href="#"
        className="main-nav-link nav-login"
      >
        Login
      </a>
    </div>
  );

  const activeLogin = (
    <div className="user-header-box">
      <a className="user-name" onClick={loginCtx.toggleModal} href="#">
        User
      </a>
      <div>
        <ion-icon name="person"></ion-icon>
      </div>
      {loginCtx.modal && <UserModal onToggleModal={loginCtx.toggleModal} />}
    </div>
  );

  const loginMarkup = loginCtx.isLoggedIn ? activeLogin : defaultLogin;

  return (
    <Fragment>
      {loginMarkup}
      {!loginCtx.isLoggedIn && loginCtx.modal && (
        <LoginModal onToggleModal={loginCtx.toggleModal} />
      )}
    </Fragment>
  );
}

export default LoginHeader;
