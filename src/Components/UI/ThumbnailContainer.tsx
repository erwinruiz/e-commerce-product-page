import classes from "./ThumbnailContainer.module.css";

function ThumbnailContainer() {
  return (
    <div className={classes["thumbnail-images-container"]}>
      <div className={classes["thumbnail-image"]}>
        <img src="./images/image-product-1-thumbnail.jpg" alt="product" />
        <div className={classes["layer-image-active"]}></div>
      </div>
      <div className={classes["thumbnail-image"]}>
        <img src="./images/image-product-2-thumbnail.jpg" alt="product" />
        <div className={classes["layer-image"]}></div>
      </div>
      <div className={classes["thumbnail-image"]}>
        <img src="./images/image-product-3-thumbnail.jpg" alt="product" />
        <div className={classes["layer-image"]}></div>
      </div>
      <div className={classes["thumbnail-image"]}>
        <img src="./images/image-product-4-thumbnail.jpg" alt="product" />
        <div className={classes["layer-image"]}></div>
      </div>
    </div>
  );
}

export default ThumbnailContainer;
