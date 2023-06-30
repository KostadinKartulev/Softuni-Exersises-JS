function evenPositionElements(input) {
     
    let arrFiltered=input.filter((Element,i)=>i%2==0);
    console.log(arrFiltered.join(" "));
}
evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);