/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useSelector } from "react-redux";
import { selectAllProducts } from "./productsSlice";
import { ProductCardOfList } from "./ProductCardOfList";
import { ListProducts } from "./../styles";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

export const ProductsList = ({ category = "Moda" }) => {
  const products = useSelector(selectAllProducts);
  return (
    <React.Fragment>
      <ListProducts>
        <h3>
          {category}{" "}
          <Link to={`/products/${category}`}>
            <AiOutlineArrowRight />
          </Link>
        </h3>
        {products.map((product) => (
          <ProductCardOfList key={product.id} product={product} />
        ))}
      </ListProducts>
    </React.Fragment>
  );
};
