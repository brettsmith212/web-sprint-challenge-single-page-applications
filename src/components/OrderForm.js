import React from "react";
import styled from "styled-components";

const OrderFormContainer = styled.section`
  border: 1px solid black;
  padding: 2rem 2rem;
  width: 50%;
  margin: 4rem auto;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }

  button {
    width: 100%;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.h4};
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

const OrderHeader = styled.div`
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 1rem;
`;

const DropDown = styled.div`
  padding: 1rem;

  select {
    width: 15rem;
    height: 3rem;
  }
`;

const ToppingsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-top: 1.5rem;
    font-size: ${({ theme }) => theme.fontSize.p};
  }

  input {
    margin-right: 0.8rem;
  }
`;

const SpecialInstructions = styled.div`
  padding: 2rem 1rem;

  input {
    width: 100%;
    height: 4rem;
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;

function OrderForm() {
  return (
    <OrderFormContainer>
      <form id="pizza-form">
        <h3>Build Your Own Pizza</h3>
        <OrderHeader>
          <h3>Enter Your Name</h3>
          <h4>Required</h4>
        </OrderHeader>
        <SpecialInstructions>
          <input
            id="name-input"
            type="text"
            placeholder="Enter Your Name Here"
          />
        </SpecialInstructions>
        <OrderHeader>
          <h3>Choice of Size</h3>
          <h4>Required</h4>
        </OrderHeader>
        <DropDown>
          <select name="orderSize" id="size-dropdown">
            <option value="">--Select A Size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </DropDown>
        <OrderHeader>
          <h3>Add Toppings</h3>
          <h4>Required</h4>
        </OrderHeader>
        <ToppingsWrapper>
          <label>
            <input type="checkbox" name="pepperoni" />
            Pepperoni
          </label>
          <label>
            <input type="checkbox" name="sausage" />
            Sausage
          </label>
          <label>
            <input type="checkbox" name="grilledChicken" />
            Grilled Chicken
          </label>
          <label>
            <input type="checkbox" name="onions" />
            Onions
          </label>
          <label>
            <input type="checkbox" name="pineapple" />
            Pineapple
          </label>
          <label>
            <input type="checkbox" name="ham" />
            Ham
          </label>
        </ToppingsWrapper>
        <OrderHeader>
          <h3>Special Instructions</h3>
        </OrderHeader>
        <SpecialInstructions>
          <input
            id="special-text"
            type="text"
            placeholder="Anything else you'd like to add?"
          />
        </SpecialInstructions>
        <button>Add to Order</button>
      </form>
    </OrderFormContainer>
  );
}

export default OrderForm;
