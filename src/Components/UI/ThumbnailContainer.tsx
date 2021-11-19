import classes from "./ThumbnailContainer.module.css";
import { useContext, useState } from "react";
import { Context } from "../../store/context";

function ThumbnailContainer() {
  const [thumbnail, setThumbnail] = useState(1);
  const ctx = useContext(Context);

  const thumbnailHandler = (imageId: number) => {
    setThumbnail(imageId);
    ctx.selectImage(imageId);
  };

  return (
    <div className={classes["thumbnail-images-container"]}>
      <div
        className={classes["thumbnail-image"]}
        onClick={() => thumbnailHandler(1)}
      >
        <img src="./images/image-product-1-thumbnail.jpg" alt="product" />
        <div
          className={`${classes["layer-image"]} ${
            thumbnail === 1 ? classes["layer-image-active"] : ""
          }`}
        ></div>
      </div>
      <div
        className={classes["thumbnail-image"]}
        onClick={() => thumbnailHandler(2)}
      >
        <img src="./images/image-product-2-thumbnail.jpg" alt="product" />
        <div
          className={`${classes["layer-image"]} ${
            thumbnail === 2 ? classes["layer-image-active"] : ""
          }`}
        ></div>
      </div>
      <div
        className={classes["thumbnail-image"]}
        onClick={() => thumbnailHandler(3)}
      >
        <img src="./images/image-product-3-thumbnail.jpg" alt="product" />
        <div
          className={`${classes["layer-image"]} ${
            thumbnail === 3 ? classes["layer-image-active"] : ""
          }`}
        ></div>
      </div>
      <div
        className={classes["thumbnail-image"]}
        onClick={() => thumbnailHandler(4)}
      >
        <img src="./images/image-product-4-thumbnail.jpg" alt="product" />
        <div
          className={`${classes["layer-image"]} ${
            thumbnail === 4 ? classes["layer-image-active"] : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default ThumbnailContainer;
