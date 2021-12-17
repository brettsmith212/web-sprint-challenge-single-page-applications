import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

const HomeContainer = styled.section`
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
    transform: scale(1.1);
  }
`;

function Home() {
  const { url } = useRouteMatch();
  return (
    <HomeContainer>
      <h1>Your favorite food, delivered while coding</h1>
      <Link to={`${url}pizza`}>
        <button id="order-pizza">Order a Pizza!</button>
      </Link>
    </HomeContainer>
  );
}

export default Home;
