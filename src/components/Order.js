import React from "react";
import styled from "styled-components";

const OrderContainer = styled.section`
  width: 50%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
    margin-top: 2rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
    margin-top: 2rem;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;

function Order(props) {
  const { order } = props;
  console.log(order);

  const {
    name,
    orderSize,
    pepperoni,
    pineapple,
    sausage,
    ham,
    grilledChicken,
    onions,
    specialText,
  } = order;

  console.log(name);
  return (
    <OrderContainer>
      <h1>Thank you for your order {name}!</h1>
      <h2>Here is your order:</h2>
      <h3>Pizza Size: {orderSize}</h3>
      <h3>Toppings:</h3>
      {pepperoni ? <h4> - Pepperoni</h4> : null}
      {sausage ? <h4> - Sausage</h4> : null}
      {grilledChicken ? <h4> - Grilled Chicken</h4> : null}
      {onions ? <h4> - Onions</h4> : null}
      {pineapple ? <h4> - Pineapple</h4> : null}
      {ham ? <h4> - Ham</h4> : null}
      <h3>Special Instructions: {specialText ? specialText : "None"}</h3>
    </OrderContainer>
  );
}

export default Order;
