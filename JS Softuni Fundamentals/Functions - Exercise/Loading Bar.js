function loadingBar(num) {
    
    let arrLoadingBar=[];
    for (let i = 0; i < (num/10); i++) {
        arrLoadingBar.push("%");
        
    }
    for (let i = 0; i < (10-(num/10)); i++) {
        
        arrLoadingBar.push(".");
    }
    

    let loadingBar=()=>`${num}% [${arrLoadingBar.join("")}]`;

    let fullLoadingBar=()=>`[${arrLoadingBar.join("")}]`;

    if (num==100) {
        console.log("100% Complete!");
        console.log(fullLoadingBar());

    } else {
        console.log(loadingBar());
        console.log("Still loading...");
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);
loadingBar(0);