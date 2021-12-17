import React from "react";
import styled from "styled-components";

const OrderFormContainer = styled.section`
  border: 1px solid red;
  width: 50%;
  margin: 4rem auto;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;

const OrderHeader = styled.div``;

function OrderForm() {
  return (
    <OrderFormContainer>
      <form>
        <h3>Build Your Own Pizza</h3>
        <OrderHeader>
          <h3>Choice of Size</h3>
          <h4>Required</h4>
        </OrderHeader>
        <select name="orderSize">
          <option value="">--Select A Size--</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra-large">Extra Large</option>
        </select>
      </form>
    </OrderFormContainer>
  );
}

export default OrderForm;
