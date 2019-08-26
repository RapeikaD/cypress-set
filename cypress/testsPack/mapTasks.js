let planetsArray = [
    {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
    {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
    {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
    {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
    {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
    {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
    {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
    {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
];
var planetsMap = new Map();



context("Work with [Map]", () => {

    it('Task 1: ', () => {
        convertIntoMap(planetsArray)
    });
    it('Task 2: ', () => {
        showMap(planetsMap)
    });
    it('Task 3: ', () => {
        cy.log(planetsMap.get('Saturn'));
    });
    it('Task 4: ', () => {
        cy.log(planetsMap.size);
    });
    it('Task 5: ', () => {
        let setA = new Set();
        setA.add("Mercury");
        setA.add("Not Mercury");
        setA.forEach((elem)=>{
            cy.log(planetsMap.has(elem))
        })
    });
    it('Task 6: ', () => {
        planetsMap.delete("Uranus");
        cy.log(planetsMap);
    });
    it('Task 7: ', () => {
        let planetsMap2 = new Map();
        planetsMap2.set('Moon', {radius: 1737, density: 4.12, distance: 0.3})
        let allPlanets = new Map ([...planetsMap2, ...planetsMap])
        showMap(allPlanets)
    });
    it('Task 8: ', () => {
        transformToKeyValue()
    });

});

let convertIntoMap = function (array) {
    array.forEach((elem) => {
        planetsMap.set(elem.planet, {radius: elem.radius, density: elem.density, distance: elem.distance})
    });
    cy.log(planetsMap);
    return planetsMap;
};

let showMap = function (array) {
    array.forEach((value, key) =>{
        cy.log(key + ": " + Object.keys(value).map(key => key +":" + value[key]).join(', '))
    })
};

let transformToKeyValue = function () {

    let planetInfo = {
        planet: "Mercury",
        radius: 2440,
        density: 5.43,
        distance: 0.395
    };
    for(let item in planetInfo) {
      cy.log(item + ": " + planetInfo[item])
    }
};

