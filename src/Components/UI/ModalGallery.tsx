import classes from "./ModalGallery.module.css";
import ReactDOM from "react-dom";
import Slider from "./Slider";

type ModalGalleryProps = {
  closeModal: () => void;
};

function ModalGallery({ closeModal }: ModalGalleryProps) {
  const content = (
    <div className={classes["modal-gallery"]}>
      <svg
        width="14"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        className={classes["close-icon"]}
        onClick={closeModal}
      >
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fillRule="evenodd"
        />
      </svg>
      <div className={classes["slider-container"]}>
        <Slider />
      </div>
      <div className={classes["thumbnail-images-container"]}>
        <div className={classes["thumbnail-image"]}>
          <img src="./images/image-product-1-thumbnail.jpg" alt="product" />
          <div className={classes["layer-image-1"]}></div>
        </div>
        <div className={classes["thumbnail-image"]}>
          <img src="./images/image-product-2-thumbnail.jpg" alt="product" />
          <div className={classes["layer-image-2"]}></div>
        </div>
        <div className={classes["thumbnail-image"]}>
          <img src="./images/image-product-3-thumbnail.jpg" alt="product" />
          <div className={classes["layer-image-3"]}></div>
        </div>
        <div className={classes["thumbnail-image"]}>
          <img src="./images/image-product-4-thumbnail.jpg" alt="product" />
          <div className={classes["layer-image-4"]}></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {ReactDOM.createPortal(content, document.getElementById("overlay-root")!)}
    </>
  );
}

export default ModalGallery;
