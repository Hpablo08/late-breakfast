describe("Home page flows", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://late-breakfast-api.vercel.app/api/v1/brunch", {
      fixture: "restaurants.json",
    }).as("restaurants");
    cy.visit("http://localhost:3000/");
  });
  it("Should be able to have a homepage", () => {
    cy.get(".nav-bar").should("exist");
    cy.get(".logo").should("exist");
    cy.get('[href="/choices"] > button').should("exist");
    cy.get(".details-home-btn").should("exist");
  });

  it("Should have an input form", () => {
    cy.get(".form").should("exist");
    cy.get(".submit").contains("SUBMIT");
  });

  it("Should have instructions", () => {
    cy.get(".suggestion").contains(
      "Need Help making a Breakfast or Brunch Choice? Use the Randomizer and we'll make the choice for you! Don't Like the Choice options? Add your own choices below in the input!"
    );
  });
  it("Should be able to view a random restaurant", () => {
    cy.get('[href="/randomizer"] > button').click();
    cy.url().should("eq", "http://localhost:3000/randomizer");
    cy.get(".your-random-choice").contains("Your Random Choice");
    cy.get(".RandomCard");
  });
  it("Should be able to add a user choice", () => {
    cy.visit("http://localhost:3000");
    cy.get(".suggestion-container").find("input").type("Eat at Home");
    cy.get(".submit").click();
    cy.get('[href="/choices"] > button').click();
    cy.get(".choices-container")
      .find(".user-card > .card-name")
      .contains("Eat at Home");
  });
  it("Should be able to delete an added choice", () => {
    cy.visit("http://localhost:3000");
    cy.get(".suggestion-container").find("input").type("Eat at Home");
    cy.get(".submit").click();
    cy.get('[href="/choices"] > button').click();
    cy.get(".choices-container")
      .find(".user-card > .card-name")
      .contains("Eat at Home");
      cy.get(".user-card > button").click()
  })
});
