import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

type BackdropProps = {
  isOpen: boolean;
  close: () => void;
  needBgColor: boolean;
};

function Backdrop({ isOpen, close, needBgColor }: BackdropProps) {
  let backdropClasses;

  if (needBgColor) {
    backdropClasses = `${classes.backdrop} ${
      isOpen ? classes["background-color"] : ""
    }`;
  } else {
    backdropClasses = `${classes.backdrop}`;
  }

  const content = <div className={backdropClasses} onClick={close}></div>;

  return (
    <>
      {ReactDOM.createPortal(
        content,
        document.getElementById("backdrop-root")!
      )}
    </>
  );
}

export default Backdrop;
