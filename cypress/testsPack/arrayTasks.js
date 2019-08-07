let planets = [
    {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
    {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
    {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
    {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
    {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
    {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
    {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
    {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}];

let singlePlanet = [];//this array contain suitable information about the planets
let newPlanet = {planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false};

context("Work with arrays", () => {

    it('Task 1: ', () => {
        showPlanetsv2(planets);
    });

    it('Task 2: ', () => {
        planets.map(item => item.solarSystem = true);
        cy.log(planets);
        showPlanetsv2(planets)
    });

    it('Task 3: ', () => {
        addObject(planets, newPlanet);
        showPlanetsv2(planets)
    });

    it('Task 4: ', () => {
        cy.log(getRadiusSumm(planets));
    });

    it('Task 5:', () => {
        showPlanetsv2(getPlanetsWithDistance(planets, 5))
    });

    it('Task 6:', () => {
        showPlanetsv2(removePlanet(planets, "SomeNewPlanet"));
        //planets.splice(planets.map(key => key.planet).indexOf("SomeNewPlanet"), 1)
        //showPlanetsv2(planets)
    });

    it('Task 7:', () => {
        planets.sort(sortByNumbers);
        showPlanetsv2(planets)
    });

    it('Task 8:', () => {
        planets.sort(sortByLetters);
        showPlanetsv2(planets)
    });

    it('Task 9:', () => {
        cy.log(planets.length)
    });
});

//primal function to show data from array
let showPlanets = function (planetBase) {
    let temporaryPlanetInfo = "";//contain unprocessed string of single planet
    for (let i = 0; i < planetBase.length; i++) {
        for (let key in planetBase[i]) {
            temporaryPlanetInfo += key + ": " + planetBase[i][key] + ", ";
        }
        singlePlanet.push(temporaryPlanetInfo.slice(0, -2));
        temporaryPlanetInfo = "";
        cy.log(singlePlanet[i])
    }
};

let showPlanetsv2 = function (array) {
    array.forEach(planet => {
        cy.log(JSON.stringify(planet));
    })
};

let addObject = function (array, newItem) {
    array.push(newItem);
};

let getRadiusSumm = function (array) {
    let allR2 = array.reduce((collector, item) => {
        return collector + item.radius;
    }, 0);
    return allR2;
};

let getPlanetsWithDistance = function (allPlanets, targetDistance) {
    let filteredPlanets = allPlanets.filter(planet => planet.distance > targetDistance);
    return filteredPlanets;
};

let removePlanet = function (array, planetName) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].planet == planetName) {
            delete array[i]
        }
    }
    return array;
};

let sortByNumbers = function (item1, item2) {
    if (item1.radius < item2.radius) {
        return 1
    }
    if (item1.radius > item2.radius) {
        return -1
    }
    return 0;
};

let sortByLetters = function (item1, item2) {
    if (item1.planet < item2.planet) {
        return 1
    }
    if (item1.planet > item2.planet) {
        return -1
    }
    return 0;
};
