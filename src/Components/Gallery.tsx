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
          <img src="./images/icon-previous.svg" alt="previous" />
        </div>
        <div className={classes["arrow-next"]}>
          <img src="./images/icon-next.svg" alt="next" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
