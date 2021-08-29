import React from "react";
import { filteredProducts } from "../../recoil/ProductData";
import { useRecoilValue } from "recoil";
import ProductItem from "./ProductItem";

const Products = () => {
  // const products = useRecoilValue(productState);
  const products = useRecoilValue(filteredProducts);
  return (
    <div className="columns is-multiline">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
