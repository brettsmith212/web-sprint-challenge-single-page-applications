describe("Pizza Order Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  // Helpers
  const nameInput = () => cy.get("input[name=name]");
  const orderSizeInput = () => cy.get("select[name=orderSize]");
  const pepperoniInput = () => cy.get("input[name=pepperoni]");
  const sausageInput = () => cy.get("input[name=sausage]");
  const grilledChickenInput = () => cy.get("input[name=grilledChicken]");
  const submitBtn = () => cy.get("button[id=order-button]");

  it("Name input can receive text", () => {
    nameInput()
      .should("have.value", "")
      .type("Brett Smith")
      .should("have.value", "Brett Smith");
  });

  it("Can select multiple toppings", () => {
    pepperoniInput().check();
    sausageInput().check();
    grilledChickenInput().check();
  });

  it("Can submit the form", () => {
    nameInput().type("Grandpa Joe");
    orderSizeInput().select("medium");
    pepperoniInput().check();
    submitBtn().click();
  });
});
