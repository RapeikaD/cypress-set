
export const isSuperset = (set1, subset) => {
    for (let elem of subset) {
        if (!set1.has(elem)){
            return false;
        }
    }
    return true;
};

export const union = (set1, set2) => {
    let _union = new Set(set1);
    for (let elem of set2){
        _union.add(elem)
    }
    return _union;
};

export const intersection = (setA, setB) => {
    //return cy.request(
    var _intersection = new Set(setA)
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
//)
};

export const difference = (set1, set2) => {
    //return cy.request(
    var _difference = new Set(set1);
    for (var elem of set2) {
        _difference.delete(elem)
    }
    return _difference;
//    )
};
