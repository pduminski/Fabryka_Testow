import Urls from "./urls";

const inputsHeader = "#inputs-header";
const checkboxesHeader = "#checkbox-header";
const dropdownListHeader = "#dropdownlist-header";
const hooversHeader = "#hovers-header";

class HomePage {
  visitPage() {
    const url = new Urls();
    url.visitHomePage();
  }

  clickInputsTab() {
    cy.get(inputsHeader).click();
  }

  clickCheckboxesTab() {
    cy.get(checkboxesHeader).click();
  }

  clickDropdownListTab() {
    cy.get(dropdownListHeader).click();
  }

  clickHooversTab() {
    cy.get(hooversHeader).click();
  }
}

export default HomePage;
