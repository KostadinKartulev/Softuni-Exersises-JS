function attachEventsListeners() {
    let buttonConvertElement = document.getElementById('convert');
    buttonConvertElement.addEventListener('click', function () {
        let inputDistanceElement = document.getElementById('inputDistance');
        let inputDistance = Number(inputDistanceElement.value);
        let inputUnitElement = document.querySelector('#inputUnits');
        let outputDistanceElement = document.getElementById('outputDistance');
        let outputUnitElement = document.querySelector('#outputUnits');

        let convertedDistance = 0;
        //convert to km
        if (inputUnitElement.value === 'km') {
            convertedDistance = inputDistance;
        } else if (inputUnitElement.value === 'm') {
            convertedDistance = inputDistance / 1000;
        } else if (inputUnitElement.value === 'cm') {
            convertedDistance = inputDistance / 100000;
        } else if (inputUnitElement.value === 'mm') {
            convertedDistance = inputDistance / 1000000;
        } else if (inputUnitElement.value === 'mi') {
            convertedDistance = inputDistance * 1.609;
        } else if (inputUnitElement.value === 'yrd') {
            convertedDistance = inputDistance / 1094;
        } else if (inputUnitElement.value === 'ft') {
            convertedDistance = inputDistance / 3281;
        } else if (inputUnitElement.value === 'in') {
            convertedDistance = inputDistance / 39370;
        }
         //convert from km to other units
        if (outputUnitElement.value === 'km') {
            convertedDistance = convertedDistance;
        } else if (outputUnitElement.value === 'm') {
            convertedDistance = convertedDistance * 1000;
        } else if (outputUnitElement.value === 'cm') {
            convertedDistance = convertedDistance * 100000;
        } else if (outputUnitElement.value === 'mm') {
            convertedDistance = convertedDistance * 1000000;
        } else if (outputUnitElement.value === 'mi') {
            convertedDistance = convertedDistance / 1.609;
        } else if (outputUnitElement.value === 'yrd') {
            convertedDistance = convertedDistance * 1093.61;
        } else if (outputUnitElement.value === 'ft') {
            convertedDistance = convertedDistance * 3281;
        } else if (outputUnitElement.value === 'in') {
            convertedDistance = convertedDistance * 39370;
        } 
        //Output converted value
        outputDistanceElement.value = convertedDistance;
    })
}