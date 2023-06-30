function circleArea(input) {
    if (typeof input==="number") {
        let circleRadius=input;
        let circleArea=Math.PI*(circleRadius**2);
        console.log(circleArea.toFixed(2));
    } else {
        
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}
circleArea(5);
circleArea('name');