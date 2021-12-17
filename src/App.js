import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";

const Navbar = styled.nav`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
    margin-left: 3rem;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.a};
    text-decoration: none;
    color: black;
    margin-right: 3rem;
    cursor: pointer;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar>
          <h2>Lambda Eats</h2>
          <a href="#">Home</a>
        </Navbar>
      </>
    </ThemeProvider>
  );
};
export default App;
