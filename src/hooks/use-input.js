import { useState } from "react";

function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(enteredValue);

  const hasError = !isValid && isTouched;

  function valueChangeHandler(e) {
    setEnteredValue(e.target.value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  function resetHandler() {
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    enteredValue,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetHandler,
  };
}

export default useInput;
