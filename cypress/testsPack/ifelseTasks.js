let Chance = require('chance');
let chance = new Chance();

context("Show category of human age in depend on randomly chosen number", () => {

    it("Way 1 (using if)",() => {
        let randomAge = chance.age();
        cy.log(randomAge);
        if (randomAge < 13) {
            cy.log("Child")
        }
        else if (13 <= randomAge && randomAge < 20){
            cy.log("Teen")
        }
        else if (20 <= randomAge && randomAge < 66){
            cy.log("Adult")
        }
        else {
            cy.log("Senior")
        }

    });

    it("Way 2 (using switch)",() => {
        let randomAge = chance.age();
        cy.log(randomAge);
        switch (true) {
            case (randomAge < 13):
                cy.log("Child");
                break;
            case (13 <= randomAge && randomAge < 20):
                cy.log("Teen");
                break;
            case (20 <= randomAge && randomAge < 66):
                cy.log("Adult");
                break;
            case (66 <= randomAge && randomAge <= 120):
                cy.log("Senior");
                break;
        }
    });

    it("Way 3 (using '?')",() =>{
        let randomAge = chance.age();
        cy.log(randomAge);
        let ageCategory = (randomAge < 13) ? "Child" : (13 <= randomAge && randomAge < 20) ? "Teen": (20 <= randomAge && randomAge < 66) ? "Adult": "Senior";
        cy.log(ageCategory);
    })

});