import { Fragment, useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import Backdrop from "./Backdrop";

type MenuProps = {
  closeMenuHandler: () => void;
};

function Menu({ closeMenuHandler: closeMenu }: MenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 30);
  }, []);

  const closeMenuHandler = () => {
    setIsOpen(false);
    setTimeout(() => {
      closeMenu();
    }, 250);
  };

  return (
    <Fragment>
      <Backdrop isOpen={isOpen} close={closeMenuHandler} needBgColor={true} />
      <SideMenu isOpen={isOpen} closeMenu={closeMenuHandler} />
    </Fragment>
  );
}

export default Menu;
