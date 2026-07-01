import React from "react";
import { type Product } from "../types/product";
interface ProductCardProps {
  product: Product;
}

const ProductCard = React.memo(
  ({ product }: ProductCardProps) => {
    console.log(
      "Rendering:",
      product.name
    );

    return (
      <div
        style={{
          border: "1px solid gray",
          margin: "10px",
          padding: "10px",
        }}
      >
        <h3>{product.name}</h3>

        <p>
          Price: ₹{product.price}
        </p>

        <p>
          Category:
          {product.category}
        </p>
      </div>
    );
  }
);

export default ProductCard;