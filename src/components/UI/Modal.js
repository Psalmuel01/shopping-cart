import { Fragment } from "react";
import ReactDOM from "react-dom";
import Cart from "../Carts/Cart";
import classes from "./Modal.module.css";

const Modal = (props) => {
  function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onClose} />;
  }

  function ModalOverlay(props) {
    return (
      <div className={classes.modal}>
        <Cart onClose={props.onClose} />
      </div>
    );
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("modal-overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("modal-overlay")
      )}
    </Fragment>
  );
};

export default Modal;
