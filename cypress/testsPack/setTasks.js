import {isSuperset, union, intersection, difference} from '../supportFunctions/helper'


var Chance = require('chance');
let chance = new Chance();


context("Practice with [set]", () => {

    it('Tasks 1-5', () => {
        let currSet = new Set(['CN', 'US', 'EU', 'BYN']);
        output(currSet);
        addCurrency(currSet);
        output(currSet);
        checkExistance(currSet);
        removeValue(currSet);
        choseFewValues(currSet)

    });


    it('Tasks 6', () => {
        let setA = new Set(['BLR', 'RU', 'PLN', 'CAD']),
            setB = new Set(['RU', 'US']),
            setC = new Set(['US', 'EUR', 'CAD', 'CN']);

        cy.log("Results of \"isSuperset\" function: ");
        cy.log(isSuperset(setA, setB));

        cy.log("Results of \"Union\" function: ");
        output(union(setA, setC));

        cy.log("Results of \"Intersection\" function: ");
        output(intersection(setA, setC));

        cy.log("Results of \"Difference\" function: ");
        output(difference(setA, setC));

    });
});
let output = function (set) {
    set.forEach(curr => {
        cy.log(curr)
    });
    cy.log("---------------")
};

let addCurrency = function (set) {
    set.add("PLN")
};

let checkExistance = function (set) {
    cy.log("Does set contain PLN currency? - " + set.has("PLN"))
};

let removeValue = function (set) {
    set.delete("EU");
};

let choseFewValues = function (set) {
    let simpleCurrencies = [...set];
    cy.log(simpleCurrencies + " enD!");
    cy.log("Random value is " + chance.pickone(simpleCurrencies));
    //let amount = chance.ichance.integer({min: 1, max: simpleCurrencies.length});
    let amount = chance.integer({min: 1, max: set.size});
    cy.log("Set of random values: " + chance.pickset(simpleCurrencies, amount))
};

