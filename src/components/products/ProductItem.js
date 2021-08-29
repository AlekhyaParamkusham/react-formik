import React from "react";
import { useRecoilState } from "recoil";
import { productState } from "../../recoil/ProductData";
import { Link } from "react-router-dom";
import View from "../layout/View";

const ProductItem = (props) => {
  const { product } = props;
  const [products, setProducts] = useRecoilState(productState);
  console.log(product.picture);

  const deleteProduct = (id) => {
    const new_products = products.filter((product) => product.id != id);
    setProducts(new_products);
  };
  return (
    <View>
      <div className="box box__custom">
        <Link
          to={`/editProduct/${product.id}`}
          className="button button-edit is-warning"
        >
          edit
        </Link>
        <button
          onClick={() => deleteProduct(product.id)}
          className="button button-delete is-danger"
        >
          delete
        </button>
        {product.id ? (
          <img
            className="Images"
            src={process.env.PUBLIC_URL + product.picture}
          />
        ) : (
          <img className="Images" src={product.picture} />
        )}
        <h2 className="Title">{product.name}</h2>
        <p className="Price">₹ {product.price}</p>
      </div>
    </View>
  );
};

export default ProductItem;
