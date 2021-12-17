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

  p {
    font-size: ${({ theme }) => theme.fontSize.p};
    color: ${({ theme }) => theme.colors.red};
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

function OrderForm(props) {
  const { formValues, changedInput, formErrors, submitForm } = props;

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valueNeeded = type === "checkbox" ? checked : value;
    console.log(name, valueNeeded);
    changedInput(name, valueNeeded);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <OrderFormContainer>
      <form id="pizza-form" onSubmit={onSubmit}>
        <h3>Build Your Own Pizza</h3>
        <OrderHeader>
          <h3>Enter Your Name</h3>
          <p>*Required</p>
        </OrderHeader>
        <SpecialInstructions>
          <p>{formErrors.name}</p>
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="Enter Your Name Here"
            onChange={onChange}
            value={formValues.name}
          />
        </SpecialInstructions>
        <OrderHeader>
          <h3>Choice of Size</h3>
          <p>*Required</p>
        </OrderHeader>
        <DropDown>
          <select
            name="orderSize"
            id="size-dropdown"
            onChange={onChange}
            value={formValues.orderSize}
          >
            <option value="">--Select A Size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </DropDown>
        <OrderHeader>
          <h3>Add Toppings</h3>
          <p>*Required</p>
        </OrderHeader>
        <ToppingsWrapper>
          <label>
            <input
              type="checkbox"
              name="pepperoni"
              onChange={onChange}
              value={formValues.pepperoni}
            />
            Pepperoni
          </label>
          <label>
            <input
              type="checkbox"
              name="sausage"
              onChange={onChange}
              value={formValues.sausage}
            />
            Sausage
          </label>
          <label>
            <input
              type="checkbox"
              name="grilledChicken"
              onChange={onChange}
              value={formValues.grilledChicken}
            />
            Grilled Chicken
          </label>
          <label>
            <input
              type="checkbox"
              name="onions"
              onChange={onChange}
              value={formValues.onions}
            />
            Onions
          </label>
          <label>
            <input
              type="checkbox"
              name="pineapple"
              onChange={onChange}
              value={formValues.pineapple}
            />
            Pineapple
          </label>
          <label>
            <input
              type="checkbox"
              name="ham"
              onChange={onChange}
              value={formValues.ham}
            />
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
            name="specialText"
            placeholder="Anything else you'd like to add?"
            onChange={onChange}
            value={formValues.specialText}
          />
        </SpecialInstructions>
        <button>Add to Order</button>
      </form>
    </OrderFormContainer>
  );
}

export default OrderForm;
