const url = "https://simpletestsite.fabrykatestow.pl/";
const iframeHeader = "#iframe-header";
const iframe = "iframe";
const button1 = "#simpleButton1";

describe('My first scenario', () => {
    it('Clicking button1 inside iframe', () => {
        
        cy.visit(url);

        cy.get(iframeHeader).click();

        const iframeTest = cy.get(iframe)
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap)


    iframeTest.find(button1).click();
    });

});