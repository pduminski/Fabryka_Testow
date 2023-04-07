import HomePage from "../../page-objects/homePage";
import InputsPage from "../../page-objects/inputsPage";
import CheckboxesPage from "../../page-objects/checkboxesPage";
import DropdownListPage from "../../page-objects/dropdownlistPage";
import HooversPage from "../../page-objects/hooversPage";
import BasicAuthPage from "../../page-objects/basicAuthPage";
import FormPage from "../../page-objects/formPage";
import KeyPressesPage from "../../page-objects/keyPressesPage";

describe("The first scenarios in page objece", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  // it("testing inputs", () => {
  //   const homePage = new HomePage();
  //   homePage.clickInputsTab();

  //   const inputsPage = new InputsPage();
  //   inputsPage.typeNumberIntoField();
  //   inputsPage.typeLettersIntoField();
  // });

  // it("tests checkboxes", () => {
  //   const homePage = new HomePage();
  //   homePage.clickCheckboxesTab();

  //   const checkboxesPage = new CheckboxesPage();
  //   checkboxesPage.checkFirstCheckbox();
  //   checkboxesPage.uncheckSecondCheckbox();
  // });

  // it("tests dropdowns", () => {
  //   const homePage = new HomePage();
  //   homePage.clickDropdownListTab();

  //   const dropdownListPage = new DropdownListPage();
  //   dropdownListPage.chooseTheFirstOption();
  // });

  // it("tests hoovers", () => {
  //   const homePage = new HomePage();
  //   homePage.clickHooversTab();

  //   const hooverPage = new HooversPage();
  //   hooverPage.hooverOverElement();
  // });

  // it("tests basic auth POSITIVE", () => {
  //   const homePage = new HomePage();
  //   homePage.clickBasicAuthTab();

  //   const basicAuthPage = new BasicAuthPage();
  //   basicAuthPage.provideValidCredentials();
  // });

  // it("tests basic auth NEGATIVE", () => {
  //   const homePage = new HomePage();
  //   homePage.clickBasicAuthTab();

  //   const basicAuthPage = new BasicAuthPage();
  //   basicAuthPage.provideInvalidCredentials();
  // });

  // it("tests form POSITIVE", () => {
  //   const homePage = new HomePage();
  //   homePage.clickFormTab();

  //   const formPage = new FormPage();
  //   formPage.submitFormProvidingAllMandatoryData();
  // });

  // it("tests form NEGATIVE", () => {
  //   const homePage = new HomePage();
  //   homePage.clickFormTab();

  //   const formPage = new FormPage();
  //   formPage.submitFormWithoutProvidingOneOfTheMandatoryFields();
  // });

  it("tests key presses", () => {
    const homePage = new HomePage();
    homePage.clickKeyPressesTab();

    const keyPressesPage = new KeyPressesPage();
    keyPressesPage.pressStandardKey();
  });
});
