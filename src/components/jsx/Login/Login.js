import "../../css/Login.css";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="login-box modal">
      <div className="login-header">
        <h2>Log into your account</h2>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
