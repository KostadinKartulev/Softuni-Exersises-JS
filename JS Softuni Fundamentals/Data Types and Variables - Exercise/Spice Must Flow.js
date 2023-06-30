function SpiceMustFlow(startingYield){
    let daysWorked=0;
    let totalExtractedSpice=0;

    if (startingYield<100) {
        console.log(daysWorked);
        console.log(totalExtractedSpice);
        return;
    }

    let spice=startingYield;

    while (spice>=100) {
        totalExtractedSpice+=spice-26;
        spice-=10;
        daysWorked++;
    }

    totalExtractedSpice-=26;

    console.log(daysWorked);
    console.log(totalExtractedSpice);

}
SpiceMustFlow(111);
SpiceMustFlow(450);