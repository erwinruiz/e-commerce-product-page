import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

type BackdropProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

function Backdrop({ isOpen, closeMenu }: BackdropProps) {
  const content = (
    <div
      className={`${classes.backdrop} 
          ${isOpen ? classes["backdrop-open"] : ""}`}
      onClick={closeMenu}
    ></div>
  );

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
