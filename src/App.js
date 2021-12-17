import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import OrderForm from "./components/OrderForm";
import Home from "./components/Home";
import schema from "./components/formSchema";

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
  a:hover {
    transform: scale(1.1);
  }
`;

const initialFormValues = {
  name: "",
  orderSize: "",
  pepperoni: false,
  sausage: false,
  grilledChicken: false,
  onions: false,
  pineapple: false,
  ham: false,
  specialText: "",
};

const initialFormErrors = {
  name: "",
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  };

  const validateForm = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const changedInput = (name, value) => {
    validateForm(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      orderSize: formValues.orderSize.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      grilledChicken: formValues.grilledChicken,
      onions: formValues.onions,
      pineapple: formValues.pineapple,
      ham: formValues.ham,
      specialText: formValues.specialText.trim(),
    };
    postOrder(newOrder);
  };

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
            <OrderForm
              formValues={formValues}
              changedInput={changedInput}
              formErrors={formErrors}
              submitForm={submitForm}
            />
          </Route>
        </Switch>
      </>
    </ThemeProvider>
  );
};
export default App;
