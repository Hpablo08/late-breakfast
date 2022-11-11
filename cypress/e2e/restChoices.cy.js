describe("Restaurant Choices page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://late-breakfast-api.vercel.app/api/v1/brunch", {
      fixture: "restaurants.json",
    }).as("restaurants");
    cy.visit("http://localhost:3000/choices");
  });

  it("Should display restaurant choices", () => {
    cy.get(".choices-container > :nth-child(1)")
      .find(".image")
      .should(
        "have.attr",
        "src",
        "https://images.squarespace-cdn.com/content/v1/5f5bd2906e5f774fb5829fec/1614356307444-9N68WJ4EVYYQUXM7K53Y/DSC_3272.jpg?format=1000w"
      );
    cy.get('[aria-label="Mimosas"] > .card-name').contains("Mimosas");
    cy.get('[aria-label="Mimosas"] > .card-address').contains(
      "2752 Welton St, Denver, CO 80205"
    );
    cy.get(".choices-container > :nth-child(2)")
      .find(".image")
      .should(
        "have.attr",
        "src",
        "https://media2.westword.com/den/imager/u/zoom/10111613/hashtag-20170628-lirette009.jpg"
      );
    cy.get('[aria-label="HashTAG"] > .card-name').contains("HashTAG");
    cy.get('[aria-label="HashTAG"] > .card-address').contains(
      "10155 E 29th Dr #120, Denver, CO 80238"
    );
  });

  it("Should be able to use the browser arrow buttons to go between the main page and individual path page", () => {
     cy.get(".choices-container > :nth-child(1)")
       .click()
       .visit("http://localhost:3000/3")
       .wait(2000)
       .url()
       .should("eq", "http://localhost:3000/3");
     cy.go("back").reload().url().should("eq", "http://localhost:3000/choices");
     cy.go("forward").reload().url().should("eq", "http://localhost:3000/3");
  });
});
