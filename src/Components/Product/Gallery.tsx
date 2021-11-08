import classes from "./Gallery.module.css";

function Gallery() {
  return (
    <section className={classes.gallery}>
      <div className={classes.slider}>
        <img src="./images/image-product-1.jpg" alt="product" />
        <img src="./images/image-product-2.jpg" alt="product" />
        <img src="./images/image-product-3.jpg" alt="product" />
        <img src="./images/image-product-4.jpg" alt="product" />
      </div>
      <div className={classes.arrows}>
        <div className={classes["arrow-previous"]}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className={classes["arrow-next"]}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
