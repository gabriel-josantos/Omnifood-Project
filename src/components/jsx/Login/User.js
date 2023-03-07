import { useContext } from "react";
import LoginContext from "../../context/login-context";
import "../../css/Login.css";

function User() {
  const loginCtx = useContext(LoginContext);
  return (
    <div className="login-box modal">
      <div className="login-header">
        <h2>Your account</h2>
      </div>
      <input />
      <button onClick={loginCtx.onLogout}>Logout</button>
    </div>
  );
}
export default User;
