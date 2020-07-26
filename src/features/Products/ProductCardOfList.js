/** @jsx jsx */
import { jsx } from "@emotion/core";
import { CardProduct } from "./../styles";
export const ProductCardOfList = ({ product }) => {
  return (
    <CardProduct>
      <div className="productImg">
        <img src={product.srcImg} alt={product.name} />
      </div>
      <div>{product.name}</div>
    </CardProduct>
  );
};
