import styled from "styled-components";

interface ContainerProps {
  showCart: Boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;

  right: ${(props) => (props.showCart ? "0" : "-450px")};
  width: 300px;
  height: 100vh;
  background-color: white;
  padding: 2rem;
  transition: right 1.5s;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1``;

export const Ulcart = styled.ul`
  padding: 1rem 0;
  list-style: none;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Licart = styled.li``;

export const TotalItems = styled.strong``;

export const RemoverItem = styled.button`
  display: flex;
  margin-top: 3px;
  background-color: #add8e6;
  width: 80px;
  justify-content: center;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  &:hover {
    background-color: #ff0000;
  }
`;
