/// <reference types="cypress" />

describe('Module 5 homework', () => {
    it('Test case with screen capture', () => {
        // 1. Proceed to https://fabrykatestow.pl/
        cy.visit("https://fabrykatestow.pl/");

        // 2. Find div "SZKOLENIA DOSTĘPNE OKRESOWO" and verify it is visible
        cy.get("h2").contains("SZKOLENIA DOSTĘPNE OKRESOWO").should("be.visible");
        let courses = cy.get(".elementor-element-58444c0");

        // 3. Click "POKAZ CZEGO SIE NAUCZĘ" button under "CYPRESS KROK PO KROKU" image
        courses.contains("POKAŻ CZEGO SIĘ NAUCZĘ").first().click();

        // 4. Verify that we landed on a correct page 
        cy.url().should("include", "https://fabrykatestow.pl/cypress");

        // 5. Verify that "Kto nauczy Cię testów automatycznych?" is present 
        let instructorsInfoTopic = cy.get("h1")
            .contains("Kto nauczy Cię testów automatycznych?")
            .should("be.visible");
        
        // 6. Create screenshot on the whole element 
        // TODO Verify if there is a nicer way to get that selector
        let instructorSection = instructorsInfoTopic.parent().parent().parent();
        instructorSection.screenshot();

        // make sure that image loaded 
        let instructorPhoto = instructorSection.find("img").first();
        instructorPhoto.should("be.visible");
      
        // TODO Verify the fix
        // if I validated the image before taking the screenshot
        // It would have somehow modified the instuctorSection selector
        // and we would end up only with InstuctorPhoto image
        // although screenshot() was still used on instructorSelection 
    });
});