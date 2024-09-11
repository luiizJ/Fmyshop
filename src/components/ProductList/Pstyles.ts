import styled from "styled-components";

export const ContainerGrid = styled.main`
  width: 1240px;
  margin: 4rem auto;
  padding: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;

  @media (max-width: 375px) {
    flex-direction: column;
    width: auto;
  }

  & > * {
    flex: 1 300px;
  }
`;
