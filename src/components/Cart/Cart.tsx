import { useDispatch, useSelector } from "react-redux";
import * as s from "../Cart/CartStyled";
import { RootReducer } from "../../redux/UseReducer/root-reducer";
import { ProductsData } from "../../Data/products";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReduce
  );

  const total = cart.reduce((totalCart, products) => {
    return totalCart + products.price;
  }, 0);

  const dispatch = useDispatch();

  return (
    <s.Container showCart={showCart}>
      <s.Title>Carrinho</s.Title>

      <s.Ulcart>
        {cart.map((product) => (
          <s.Licart key={product.id}>
            <strong>{product.title}</strong>- ${product.price}
            <s.RemoverItem
              onClick={() => {
                dispatch({
                  type: "cart/remove-product",
                  payload: product,
                });
              }}
            >
              REMOVER
            </s.RemoverItem>
          </s.Licart>
        ))}
      </s.Ulcart>

      <s.TotalItems>{`Total: ${total} $`}</s.TotalItems>
    </s.Container>
  );
};
