import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes["left-side"]}>
        <img src="./images/icon-menu.svg" alt="menu icon" />
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div className={classes["right-side"]}>
        <img
          src="./images/icon-cart.svg"
          alt="cart icon"
          className={classes.cart}
        />
        <img
          src="./images/image-avatar.png"
          alt="user"
          className={classes.avatar}
        />
      </div>
    </header>
  );
}

export default Header;
