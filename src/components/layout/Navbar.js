import React from "react";
import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Table,
//   Button,
//   Container,
//   Nav,
//   NavDropdown,
// } from "react-bootstrap";

const NavComp = () => {
  return (
    // <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <i class="fas fa-store fa-2x"></i>
          </a>
        </div>
        <div class="navbar-menu ml-auto">
          <div class="navbar-end">
            <div class="navbar-item addProd">
              <div class="buttons addProd">
                <Link to="/addProduct" class="button is-primary" href="#">
                  <strong>Add Product</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default NavComp;
