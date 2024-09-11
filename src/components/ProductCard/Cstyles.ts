import styled from "styled-components";

export const Card = styled.article`
  background-color: #f0f8ff;
  padding: 2rem;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 260px;
  height: 400px;
  object-fit: contain;
`;

export const ProducTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
  min-height: 3rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;
  gap: 2px;
  font-size: 0.75rem;
  svg {
    font-size: 1rem;
  }
`;

export const Price = styled.strong``;

export const AddToCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const AddToCard = styled.button`
  border: none;
  border-radius: 5px;
  height: 32px;
  padding: 0 15px;
  background-color: green;
  color: white;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.75rem;
  gap: 0.15rem;
  font-weight: 500;
`;

export const RemoveToCard = styled.button`
  border: none;
  border-radius: 5px;
  height: 32px;
  padding: 0 15px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.75rem;
  gap: 0.15rem;
  font-weight: 500;
`;
