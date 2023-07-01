import classes from "./Backdrop.module.scss";

const Backdrop = ({ close, isOpened }) => {
  return isOpened ? (
    <div className={classes.Backdrop} onClick={close}></div>
  ) : null;
};

export default Backdrop;
