import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBasket = styled.div``;

const StyledBasketCount = styled.i`
  font-weight: bold;
  font-size: 20px;
  color: red;
`;

const StyledLink = styled(Link)`
  :visited {
    color: inherit;
  }
  text-decoration: none;
`;

function Basket() {
  const basket = useSelector((state) => state.basket);

  return (
    <StyledLink to="/checkout">
      <StyledBasket>
        <i className="fas fa-shopping-cart fa-2x"></i>
        {basket.length > 0 && (
          <StyledBasketCount>{basket.length} </StyledBasketCount>
        )}
      </StyledBasket>
    </StyledLink>
  );
}

export default Basket;
