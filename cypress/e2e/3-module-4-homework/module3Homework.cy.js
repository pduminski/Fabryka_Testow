/// <reference types="cypress" />

describe("Module 4 Homework - Locators", () => {
  beforeEach(() => {
    cy.visit("https://fabrykatestow.pl");
  });

  it("find 5 elements with: ID", () => {
    cy.get("#content"); // whole content to work on that element
    cy.get("#nv-primary-navigation-main"); // top nav bar
    cy.get("#menu-item-923"); // top nav bar element: Newsletter
    cy.get("#menu-item-1871"); // top nav bar element: Kursy
    cy.get("#menu-item-1023"); // top nav bar element: Webinary
  });

  it("find 5 elements with: class", () => {
    cy.get(".elementor-button-link").first(); // sprawdz nasze kursy button 1 on the top of the page
    cy.get(".elementor-button-link").last(); // sprawdz nasze kursy button 2 on the bottom of the page
    cy.get("nav.header--row"); // top header
    cy.get("div.elementor-container.elementor-column-gap-no"); // div with Kompletny Proces / Wsparcie Mentora / Krótkie, treściwe lekcje / Gwarancja jakości
    cy.get("div.elementor-widget-image-gallery"); // div with te list of images of companies
  });

  it("find 5 elements using: element with attribute", () => {
    cy.get("a[href='https://fabrykatestow.pl/dokumenty']");
    cy.get("a[href='https://fabrykatestow.pl/git']"); // GIT DLA TESTERA
    cy.get("a[href='#kursy']"); // first button for Sprawdź nasze kursy
    cy.get("div[class='elementor-widget-container']").first(); // Nie trać czasu! Automatyzuj swoje testy!
    cy.get("img[data-variant = 'logo']"); // logo in the left top corner
  });

  it("find 5 elements using: text", () => {
    cy.get("span").contains("ZAPISZ MNIE NA NEWSLETTER!");
    cy.get("span").contains("Kompletny Proces");
    cy.get("h2").contains("SZKOŁa ONLINE DLA TESTERÓW");
    cy.get("a").contains("naszej liście mailowej.");
    cy.get("a").contains("Kontakt");
  });
});
