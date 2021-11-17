import classes from "./Gallery.module.css";
import { Fragment, useState } from "react";
import Slider from "../UI/Slider";
import Backdrop from "../UI/Backdrop";
import ModalGallery from "../UI/ModalGallery";
import ThumbnailContainer from "../UI/ThumbnailContainer";

function Gallery() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const galleryHandler = () => {
    setIsGalleryOpen((state) => !state);
  };

  return (
    <Fragment>
      <section className={classes.gallery}>
        <div className={classes["slider-mobile"]}>
          <Slider onClick={galleryHandler} needArrows={true} />
        </div>
        <div className={classes["slider-desktop"]}>
          <Slider onClick={galleryHandler} needArrows={false} />
        </div>
        <div className={classes["thumbnail-container"]}>
          <ThumbnailContainer />
        </div>
      </section>
      {isGalleryOpen && (
        <Fragment>
          <Backdrop
            close={galleryHandler}
            isOpen={isGalleryOpen}
            needBgColor={true}
          />
          <ModalGallery closeModal={galleryHandler} />
        </Fragment>
      )}
    </Fragment>
  );
}

export default Gallery;
