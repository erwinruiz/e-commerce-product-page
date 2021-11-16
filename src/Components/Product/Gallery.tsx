import classes from "./Gallery.module.css";
import { Fragment, useState } from "react";
import Slider from "../UI/Slider";
import Backdrop from "../UI/Backdrop";
import ModalGallery from "../UI/ModalGallery";

function Gallery() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const galleryHandler = () => {
    setIsGalleryOpen((state) => !state);
  };

  return (
    <Fragment>
      <section className={classes.gallery}>
        <Slider onClick={galleryHandler} />
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
