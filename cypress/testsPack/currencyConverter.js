var Chance = require('chance');
let chance = new Chance();

let curData= {
    "base": "USD",
    "date": "2018-02-13",
    "rates": [
        {shortName: "CAD", rate: 1.32208},
        {shortName: "CHF", rate: 0.985474},
        {shortName: "EUR", rate: 0.901211},
        {shortName: "GBP", rate: 0.719154}
    ]
};


context ("test for currecny converter", () => {
    before(() => {
        cy.fixture('currencyData').then(data => {
            cy.wrap(data).as('cData')
        })
    })

it ('Check rate. ', () => {
    let randomCurrency = chance.pickone(curData.rates);

    cy.visit('https://www.xe.com/');
    cy.get('#from').type(`${curData.base}`).type('{enter}');
    cy.get('#to').type(`${randomCurrency.shortName}`).type('{enter}');
    cy.get('.submitButton').click();
    cy.get('.__cypress-highlight > div').should('have.value',randomCurrency.rate);



});
});