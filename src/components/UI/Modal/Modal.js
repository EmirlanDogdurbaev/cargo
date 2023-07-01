import classes from './Modal.module.scss'

const Modal = ({ children, isOpened }) => {
  const state = isOpened ? classes.OpenedModal : classes.ClosedModal;
  return <div className={[classes.Modal, state].join(" ")}>{children}</div>;
};

export default Modal;
