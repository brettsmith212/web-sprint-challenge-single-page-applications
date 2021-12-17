import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { Route, Switch } from "react-router-dom";
import OrderForm from "./components/OrderForm";
import Home from "./components/Home";

const Navbar = styled.nav`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
    margin-left: 5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.a};
    text-decoration: none;
    margin-right: 5rem;
    cursor: pointer;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar>
          <h2>Lambda Eats</h2>
          <a href="/">Home</a>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pizza">
            <OrderForm />
          </Route>
        </Switch>
      </>
    </ThemeProvider>
  );
};
export default App;
