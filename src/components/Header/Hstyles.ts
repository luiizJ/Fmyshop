import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #000;
  font-size: 1.2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 3rem;
  height: 78px;
  @media (max-width: 420px) {
    padding: 0 1rem;
    font-size: 14px;
  }
`;

export const StyledTitle = styled.h1`
  color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;

interface AuthButtonProp {
  isLogged: boolean;
}

export const AuthButton = styled.button<AuthButtonProp>`
  border: none;
  border-radius: 5px;
  height: 32px;
  padding: 0 15px;
  background-color: ${(props) => (props.isLogged ? "red" : "green")};
  color: white;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.75rem;
  gap: 0.15rem;
  font-weight: 500;
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 32px;
  padding: 0 15px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.75rem;
`;

export const ImgProm = styled.img`
  height: 500px;
  width: 100%;
  margin-top: 18px;
  @media (max-width: 420px) {
    height: 100%;
  }
`;
