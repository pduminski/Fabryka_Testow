/// <reference types="cypress" />

describe("Module 4 Homework - Locators", () => {
  beforeEach(() => {
    cy.visit("https://fabrykatestow.pl");
  });

  it("find 5 elements with: ID", () => {
    cy.get("#content"); 
    cy.get("#nv-primary-navigation-main");
    cy.get("#menu-item-923");
    // top nav bar element: Kursy
    cy.get("#menu-item-1871"); 
    // top nav bar element: Webinary
    cy.get("#menu-item-1023"); 
  });

  it("find 5 elements with: class", () => {
    cy.get(".elementor-button-link").first();
    cy.get(".elementor-button-link").last();
    cy.get("nav.header--row");
    cy.get("div.elementor-container.elementor-column-gap-no");
    cy.get("div.elementor-widget-image-gallery");
  });

  it("find 5 elements using: element with attribute", () => {
    cy.get("a[href='https://fabrykatestow.pl/dokumenty']");
    cy.get("a[href='https://fabrykatestow.pl/git']");
    cy.get("a[href='#kursy']");
    cy.get("div[class='elementor-widget-container']").first();
    cy.get("img[data-variant = 'logo']");
  });

  it("find 5 elements using: text", () => {
    cy.get("span").contains("ZAPISZ MNIE NA NEWSLETTER!");
    cy.get("span").contains("Kompletny Proces");
    cy.get("h2").contains("SZKOŁa ONLINE DLA TESTERÓW");
    cy.get("a").contains("naszej liście mailowej.");
    cy.get("a").contains("Kontakt");
  });
});