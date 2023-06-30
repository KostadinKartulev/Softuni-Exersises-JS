function ArrayRotation(input,rotations){
    let element;
    for (let i = 0; i < rotations; i++) {
        element=input.shift();
        input.push(element);
        
    }
    console.log(input.join(" "));
}
ArrayRotation([51, 47, 32, 61, 21], 2);
ArrayRotation([32, 21, 61, 1], 4);