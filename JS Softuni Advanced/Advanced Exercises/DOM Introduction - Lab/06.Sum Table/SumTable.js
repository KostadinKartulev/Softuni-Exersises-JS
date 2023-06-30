function sumTable() {
    let tableDataElements=document.querySelectorAll('table td');
    
    let arrNumberValues=[];
    for (let el of tableDataElements) {
        arrNumberValues.push(el.textContent);
    }
    arrNumberValues=arrNumberValues.filter(x=>isNaN(x)===false);
    
    let sum=arrNumberValues.reduce((acc,x)=>acc+Number(x),0);
    
    let sumElement=document.getElementById('sum');
    sumElement.textContent=sum;
   
}