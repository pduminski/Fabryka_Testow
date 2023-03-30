describe("my first scenario", () => {
  it("Visit main page and click top menu button Newsletter", () => {
    cy.visit("https://fabrykatestow.pl");
    cy.get("#nv-primary-navigation-main").contains("Newsletter").click();
    cy.url().should("eq", "https://fabrykatestow.pl/ciekawostki/");
  });
});
