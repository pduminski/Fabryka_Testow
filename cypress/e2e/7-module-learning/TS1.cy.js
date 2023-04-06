import HomePage from "../../page-objects/homePage";
import InputsPage from "../../page-objects/inputsPage";
import CheckboxesPage from "../../page-objects/checkboxesPage";
import DropdownListPage from "../../page-objects/dropdownlistPage";
import HooversPage from "../../page-objects/hooversPage";

describe("The first scenarios in page objece", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("testing inputs", () => {
    const homePage = new HomePage();
    homePage.clickInputsTab();

    const inputsPage = new InputsPage();
    inputsPage.typeNumberIntoField();
    inputsPage.typeLettersIntoField();
  });

  it("tests checkboxes", () => {
    const homePage = new HomePage();
    homePage.clickCheckboxesTab();

    const checkboxesPage = new CheckboxesPage();
    checkboxesPage.checkFirstCheckbox();
    checkboxesPage.uncheckSecondCheckbox();
  });

  it("tests dropdowns", () => {
    const homePage = new HomePage();
    homePage.clickDropdownListTab();

    const dropdownListPage = new DropdownListPage();
    dropdownListPage.chooseTheFirstOption();
  });

  it("tests hoovers", () => {
    const homePage = new HomePage();
    homePage.clickHooversTab();

    const hooverPage = new HooversPage();
    hooverPage.hooverOverElement();
  });
});
