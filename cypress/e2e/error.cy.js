describe('Error Handling Flows', () => {
 it("Should show error when all paths cannot be retrieved", () => {
   cy.intercept("GET", "https://late-breakfast-api.vercel.app/api/v1/brunch", {
     forceNetworkError: true,
   }).as("error");
   cy.visit("http://localhost:3000/choices");
   cy.get('[class="error-message"]').contains(
     "Sorry, no restaurants found try again later"
   );
 });
})