function attachGradientEvents() {
    let gradientElement=document.getElementById('gradient');
    let result=document.getElementById('result');
    gradientElement.addEventListener('mousemove',function(e) {
        //let percent=Math.floor(e.offsetX/e.currentTarget.offsetWidth * 100);
        let percent=Math.floor(e.offsetX/e.currentTarget.clientWidth * 100);

        result.textContent=percent+'%';
    });
}