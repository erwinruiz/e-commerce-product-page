import classes from "./Menu.module.css";
import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

type MenuProps = {
  closeMenuHandler: () => void;
};

function Menu({ closeMenuHandler: closeMenu }: MenuProps) {
  const Backdrop = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
      setTimeout(() => {
        setIsOpen(true);
      }, 30);
    }, []);

    return (
      <div
        className={`${classes.backdrop} 
        ${isOpen ? classes["backdrop-open"] : ""}`}
        onClick={closeMenu}
      ></div>
    );
  };

  const SideMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const closeMenuHandler = () => {
      setIsOpen(false);
      setTimeout(() => {
        closeMenu();
      }, 250);
    };

    useEffect(() => {
      setTimeout(() => {
        setIsOpen(true);
      }, 30);
    }, []);

    return (
      <nav
        className={`${classes.sidebar} ${
          isOpen ? classes["open-sidebar"] : classes["close-sidebar"]
        }`}
      >
        <svg
          onClick={closeMenuHandler}
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
        <ul>
          <li>
            <a href="/">Collections</a>
          </li>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <SideMenu />,
        document.getElementById("overlay-root")!
      )}
    </Fragment>
  );
}

export default Menu;
