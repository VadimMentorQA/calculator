/// <reference types="cypress" />

describe("web UI tests - ", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/index.html");
  });

  it("add 2 numbers", () => {
    cy.get("#num1").type("1");
    cy.get("#num2").type("2");
    cy.get("#operation").select("add");
    cy.get("#calculate").click();
    cy.get("#result").should("have.text", "Result: 3");
    console.log("add 2 numbers test passed");
  });

  it("subtract 2 numbers", () => {
    cy.get("#num1").type("1");
    cy.get("#num2").type("2");
    cy.get("#operation").select("subtract");
    cy.get("#calculate").click();
    cy.get("#result").should("have.text", "Result: -1");
    console.log("subtract 2 numbers test passed");
  });

  it("multiply 2 numbers", () => {
    cy.get("#num1").type("1");
    cy.get("#num2").type("2");
    cy.get("#operation").select("multiply");
    cy.get("#calculate").click();
    cy.get("#result").should("have.text", "Result: 2");
    console.log("multiply 2 numbers test passed");
  });

  it("divide 2 numbers", () => {
    cy.get("#num1").type("1");
    cy.get("#num2").type("2");
    cy.get("#operation").select("divide");
    cy.get("#calculate").click();
    cy.get("#result").should("have.text", "Result: 0.5");
    console.log("divide 2 numbers test passed");
  });
});
