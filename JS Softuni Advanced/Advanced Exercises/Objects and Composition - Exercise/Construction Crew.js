function constructionCrew(givenObject) {

    if (givenObject.dizziness === true) {
        let neededHydration = 0.1 * givenObject.weight * givenObject.experience;
        givenObject.levelOfHydrated+=neededHydration;
    }
    return givenObject;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));
console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
));
console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
));