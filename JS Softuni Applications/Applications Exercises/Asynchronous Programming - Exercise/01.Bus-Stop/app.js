function getInfo() {
    let stopIdElement = document.getElementById('stopId');
    let stopNameElement = document.getElementById('stopName');
    let busesElement = document.getElementById('buses');
    let baseURL = 'http://localhost:3030/jsonstore/bus/businfo';

    busesElement.innerHTML='';
    fetch(`${baseURL}/${stopIdElement.value}`)
        .then(res=>res.json())
        .then(busStop=>{
            stopNameElement.textContent=busStop.name;
            for (let busId in busStop.buses) {
                let liElement=document.createElement('li');
                let text=`Bus ${busId} arrives in ${busStop.buses[busId]} minutes`;
                liElement.textContent=text;
                busesElement.appendChild(liElement);
            }
        })
        .catch(error=>stopNameElement.textContent='Error')

}