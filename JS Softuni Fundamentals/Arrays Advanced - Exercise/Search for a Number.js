function searchForNum(arrInput,instructionsArr) {
   
    let numOfElementToTake=instructionsArr[0];
    let numOfElementToDelete=instructionsArr[1];
    let searchedNum=instructionsArr[2];


    let arr=[];
    arr=arrInput.splice(0,numOfElementToTake).filter((x,i)=>i>=numOfElementToDelete);
    arrInput.splice(0,0,...arr);           //////////////////////////////////////////////
    let numOfOccurrencesOfNum=arrInput.filter(x=>x===searchedNum);


    console.log(`Number ${searchedNum} occurs ${numOfOccurrencesOfNum.length} times.`);
}
searchForNum([5,2,3,4,1,6],[5,2,3]);
searchForNum([7,1,5,8,2,7],[3,1,5]);
