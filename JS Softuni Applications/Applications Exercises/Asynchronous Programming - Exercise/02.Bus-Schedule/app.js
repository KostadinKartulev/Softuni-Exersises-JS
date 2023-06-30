function solve() {

    let baseURL = 'http://localhost:3030/jsonstore/bus/schedule';
    let stopId = 'depot';
    let currStopName;
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let infoBox = document.querySelector('#info .info');

    function depart() {

        fetch(`${baseURL}/${stopId}`)
            .then(res => res.json())
            .then(stop => {
                infoBox.textContent = `Next stop ${stop.name}`;
                currStopName = stop.name;
                let nextStop = stop.next;
                stopId=nextStop;
                departBtn.setAttribute("disabled", "true");
                arriveBtn.removeAttribute("disabled");
            })
            .catch(err => {
                infoBox.textContent = "Error";
                departBtn.setAttribute("disabled", "true");
                arriveBtn.setAttribute("disabled", "true");
            })

    }

    function arrive() {
        infoBox.textContent = `Arriving at ${currStopName}`;
        departBtn.removeAttribute("disabled");
        arriveBtn.setAttribute("disabled", "true");
    }

    return {
        depart,
        arrive
    };
}

let result = solve();