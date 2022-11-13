describe("Restaurant Choices page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://late-breakfast-api.vercel.app/api/v1/brunch", {
      fixture: "restaurants.json",
    }).as("restaurants");
    cy.visit("http://localhost:3000/location/3");
  });
  it("Should show a detail page for a restaurant", () => {
    cy.get(".rest-details-container")
      .find(".rest-details-image")
      .should(
        "have.attr",
        "src",
        "https://images.squarespace-cdn.com/content/v1/5f5bd2906e5f774fb5829fec/1614356307444-9N68WJ4EVYYQUXM7K53Y/DSC_3272.jpg?format=1000w"
      );
    cy.get(".rest-name").contains("Mimosas");
    cy.get(".rest-address").contains("2752 Welton St, Denver, CO 80205");
    cy.get("p").contains("Monday-Sunday: 8AM-3PM");
    cy.get(".link").contains("Visit Their Website");
    cy.get(".choices-home-btn").contains("Back to Restaurants");
  });
  it("Should be able to click back to restaurants page", () => {
    cy.get(".rest-details-container").find(".choices-home-btn").click();
    cy.url().should("eq", "http://localhost:3000/choices");
  });
});
