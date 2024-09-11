import * as s from "./Hstyles";
import { MdLogin, MdLogout } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import bannerImg from "./bannerPromocional.png";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/UseReducer/root-reducer";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReduce
  );
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const isLogger = user !== null;

  function handleUser() {
    if (user === null) {
      dispatch({
        type: "user/login",
        payload: {
          name: "cleitonL",
          email: "cleitonL@gmail.com",
        },
      });
    } else {
      dispatch({
        type: "user/logout",
      });
    }
  }

  return (
    <>
      <s.StyledHeader>
        <s.Wrapper>
          <s.StyledTitle>MyShop</s.StyledTitle>

          <s.ButtonWrapper>
            <s.AuthButton isLogged={isLogger} onClick={handleUser}>
              {isLogger ? "Logout" : "Login"}
              {isLogger ? <MdLogout /> : <MdLogin />}
            </s.AuthButton>

            <s.CartButton onClick={() => setShowCart(!showCart)}>
              Carrinho
              <IoCart />
            </s.CartButton>
          </s.ButtonWrapper>
        </s.Wrapper>
      </s.StyledHeader>
      <s.ImgProm src={bannerImg} alt="Banner Promocional" />
      <Cart showCart={showCart} />
    </>
  );
};
