import "../../css/Modal.css";

import ReactDOM from "react-dom";
import Login from "./Login";
import { Fragment } from "react";

function LoginModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="backdrop" onClick={props.onToggleModal} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Login />,
        document.getElementById("login")
      )}
    </Fragment>
  );
}

export default LoginModal;
