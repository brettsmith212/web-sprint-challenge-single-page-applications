import React from "react";
import styled from "styled-components";

const HomeContainer = styled.section`
  border: 1px solid red;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 25rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 2rem;
  }

  button {
    padding: 1rem 3rem;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #e3930f;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Your favorite food, delivered while coding</h1>
      <button>Pizza</button>
    </HomeContainer>
  );
}

export default Home;
