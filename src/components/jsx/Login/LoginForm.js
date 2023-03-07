import Input from "../../UI/Input";
import { useContext } from "react";
import LoginContext from "../../context/login-context";
import "../../css/LoginForm.css";
import useInput from "../../../hooks/use-input";

//////////////////////COMPONENT BEGINS////////////////////////
function LoginForm() {
  const loginCtx = useContext(LoginContext);
  const {
    enteredValue: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailResetHandler,
  } = useInput((value) => value.includes("@"));

  const {
    enteredValue: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordInputInvalid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetHandler: passwordResetHandler,
  } = useInput((value) => value.trim().length >= 8);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    loginCtx.onLogin(enteredEmail, enteredPassword);
    emailResetHandler();
    passwordResetHandler();
  }

  ///////////////////////////JSX BEGINS//////////////////////////////
  return (
    <form onSubmit={submitHandler} className='login-form'>
      <Input
        className={emailInputInvalid ? "input-incorrect" : ""}
        id='email'
        label='Email'
        type='text'
        value={enteredEmail}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        placeholder='me@example.com'
      />
      <Input
        className={passwordInputInvalid ? "input-incorrect" : ""}
        id='password'
        label='Password'
        type='text'
        value={enteredPassword}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        placeholder='******'
      />
      <button type='submit' className='login-btn' disabled={!formIsValid}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
