import Gallery from "./Gallery";
import ProductData from "./ProductData";
import classes from "./Product.module.css";

function Product() {
  return (
    <main className={classes.main}>
      <Gallery />
      <ProductData />
    </main>
  );
}

export default Product;
