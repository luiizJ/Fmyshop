import React from "react";
import * as s from "./Cstyles";
import { FiShoppingCart } from "react-icons/fi";
import { ProductsData } from "../../Data/products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/UseReducer/root-reducer";

interface ProductCardProps {
  product: ProductsData;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReduce
  );
  const dispatch = useDispatch();

  const idProductOnCart =
    cart.find((productsCart) => product.id === productsCart.id) !== undefined;

  function handleClickAddToCart() {
    dispatch({
      type: "cart/add-product",
      payload: product,
    });
  }

  function handleRemoveFromCart() {
    dispatch({
      type: "cart/remove-product",
      payload: product,
    });
  }

  return (
    <s.Card>
      <s.ProductImg src={product.image} alt="ProductImg" />
      <s.ProducTitle>{product.title}</s.ProducTitle>

      <s.ProductContainer>
        <s.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          {`(${product.rating.rate})`}
        </s.Review>
        <s.Price>{`$${product.price}`}</s.Price>
      </s.ProductContainer>

      <s.AddToCardContainer>
        {idProductOnCart ? (
          <s.RemoveToCard onClick={handleRemoveFromCart}>
            Remover do carrinho
            <FiShoppingCart />
          </s.RemoveToCard>
        ) : (
          <s.AddToCard onClick={handleClickAddToCart}>
            Adicionar Ao Carrinho
            <FiShoppingCart />
          </s.AddToCard>
        )}
      </s.AddToCardContainer>
    </s.Card>
  );
};
