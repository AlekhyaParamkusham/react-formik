import React, { useState } from "react";
import { productState } from "../../recoil/ProductData";
import { useSetRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
// import shortid from "shortid";
import { useId } from "react-id-generator";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.price) {
    errors.price = "Required";
  }

  if (!values.picture) {
    errors.picture = "Required";
  }

  if (!values.type) {
    errors.type = "Required";
  }

  return errors;
};

const AddProduct = (props) => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [type, setType] = useState("");
  const [htmlId] = useId();

  const setProducts = useSetRecoilState(productState);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      picture: "",
      type: "",
    },
    validate,
    onSubmit: (values) => {
      setProducts((oldProducts) => [values, ...oldProducts]);
      history.push("/");
    },
  });
  return (
    <>
      <div className="container1">
        <div className="section">
          <div class="card">
            <div className="card-header">
              <p className="card-header-title">Add a new product</p>
            </div>
            <div class="card-content">
              <form onSubmit={formik.handleSubmit}>
                <div className="columns1">
                  <div className="subCols">
                    <div className="column">
                      <input
                        class="input"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Product Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                      />
                    </div>
                    {formik.touched.name && formik.errors.name ? (
                      <div class="req">{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="subCols">
                    <div className="column">
                      <input
                        class="input"
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Product Price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                      />
                    </div>

                    {formik.touched.price && formik.errors.price ? (
                      <div class="req">{formik.errors.price}</div>
                    ) : null}
                  </div>

                  <div className="subCols">
                    <div className="column">
                      <input
                        class="input"
                        id="picture"
                        name="picture"
                        type="text"
                        placeholder="Picture URL"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.picture}
                      />
                    </div>
                    {formik.touched.picture && formik.errors.picture ? (
                      <div class="req">{formik.errors.picture}</div>
                    ) : null}
                  </div>

                  <div className="subCols">
                    <div className="column">
                      <select
                        value={formik.values.type}
                        onChange={formik.handleChange}
                        id="type"
                        name="type"
                        class="input"
                        placeholder="Product type"
                        required
                      >
                        <option>Product type</option>
                        <option value="beverages">Beverages</option>
                        <option value="biryanis">Biryanis</option>
                        <option value="burgers">Burgers</option>
                        <option value="cakes&desserts">
                          Cakes and Desserts
                        </option>
                        <option value="chinese">Chinese</option>
                        <option value="pastas">Pastas</option>
                        <option value="pizzas">Pizzas</option>
                        <option value="salads">Salads</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="snacks">Snacks</option>
                      </select>
                    </div>
                    {formik.touched.type && formik.errors.type ? (
                      <div class="req">{formik.errors.type}</div>
                    ) : null}
                  </div>
                  <div className="subCols">
                    <button type="submit" class="btnSub">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
