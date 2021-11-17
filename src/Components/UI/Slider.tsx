import classes from "./Slider.module.css";
import { Fragment, useRef } from "react";

type SliderProps = {
  onClick?: () => void;
  needArrows: boolean;
};

function Slider({ onClick: galleryHandler, needArrows }: SliderProps) {
  const sliderRef = useRef<any>(null);

  const nextImageHandler = () => {
    // get first element
    const firstElement = sliderRef.current.firstChild;

    // assign transition
    sliderRef.current.style.transition = "all 300ms ease-out";

    // get current slide size
    const slideSize = firstElement.offsetWidth;

    // move slide
    sliderRef.current.style.transform = `translateX(-${slideSize}px)`;

    const transition = () => {
      // reset slide position
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = "translateX(0)";

      sliderRef.current.appendChild(firstElement);

      // remove transition listener
      sliderRef.current.removeEventListener("transitionend", transition);
    };

    sliderRef.current.addEventListener("transitionend", transition);
  };

  const previousImageHandler = () => {
    const slideLength = sliderRef.current.children.length;
    const lastElement = sliderRef.current.children[slideLength - 1];

    const firstElement = sliderRef.current.firstChild;
    sliderRef.current.insertBefore(lastElement, firstElement);

    const slideSize = lastElement.offsetWidth;
    sliderRef.current.style.transition = "none";
    sliderRef.current.style.transform = `translateX(-${slideSize}px)`;

    setTimeout(() => {
      sliderRef.current.style.transition = `all 300ms ease-out`;
      sliderRef.current.style.transform = `translateX(0)`;
    }, 30);
  };

  return (
    <Fragment>
      <div
        className={`${classes.slider} ${
          needArrows ? classes["slider-desktop-no-modal"] : ""
        }`}
        ref={sliderRef}
        onClick={galleryHandler}
      >
        <img src="./images/image-product-1.jpg" alt="product" />
        <img src="./images/image-product-2.jpg" alt="product" />
        <img src="./images/image-product-3.jpg" alt="product" />
        <img src="./images/image-product-4.jpg" alt="product" />
      </div>
      {needArrows && (
        <div className={classes.arrows}>
          <div
            className={classes["arrow-container"]}
            onClick={previousImageHandler}
          >
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
          </div>
          <div
            className={classes["arrow-container"]}
            onClick={nextImageHandler}
          >
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
        </div>
      )}
    </Fragment>
  );
}

export default Slider;
