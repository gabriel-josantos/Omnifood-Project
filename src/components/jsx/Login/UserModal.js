import ReactDOM from "react-dom";
import User from "./User";

import { Fragment } from "react";

function UserModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="backdrop" onClick={props.onToggleModal} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(<User />, document.getElementById("user"))}
    </Fragment>
  );
}

export default UserModal;
