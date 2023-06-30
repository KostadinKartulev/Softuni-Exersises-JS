function attachEvents() {
    const weatherSymbols = {
        Sunny: "&#x2600;",
        'Partly sunny': "&#x26C5;",
        Overcast: "&#x2601;",
        Rain: "&#x2614;",
        Degrees: "&#176;"
    };

    document.getElementById('submit').addEventListener('click', () => {
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(res => res.json())
            .then(locations => {
                let textBoxLocationElement = document.getElementById('location');
                let chosenLocation = textBoxLocationElement.value;
                let locationObj = locations.find(x => chosenLocation === x.name);
                let locationCode = locationObj.code;
                let hiddenForecastDivElement = document.getElementById('forecast');
                hiddenForecastDivElement.style.display = "block";

                fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`)
                    .then(res => res.json())
                    .then(infoForLocation => {
                        let { condition, high, low } = infoForLocation.forecast;
                        let locationName = infoForLocation.name;

                        let currentDivElement = document.getElementById('current');
                        currentDivElement.querySelectorAll('.forecasts').forEach(el => {
                            el.remove();
                        });
                        let forecastDivElement = document.createElement('div');
                        forecastDivElement.classList.add('forecasts');
                        let spanSymbol = document.createElement('span');
                        spanSymbol.classList.add('condition');
                        spanSymbol.classList.add('symbol');
                        let spanCondition = document.createElement('span');
                        spanCondition.classList.add('condition');
                        let spanName = document.createElement('span');
                        spanName.classList.add('forecast-data');
                        let spanTemperature = document.createElement('span');
                        spanTemperature.classList.add('forecast-data');
                        let spanConditionType = document.createElement('span');
                        spanConditionType.classList.add('forecast-data');

                        spanSymbol.innerHTML = weatherSymbols[condition];
                        spanName.textContent = locationName;
                        spanTemperature.innerHTML = `${low}${weatherSymbols.Degrees}/${high}${weatherSymbols.Degrees}`;
                        spanConditionType.textContent = condition;

                        forecastDivElement.appendChild(spanSymbol);
                        spanCondition.appendChild(spanName);
                        spanCondition.appendChild(spanTemperature);
                        spanCondition.appendChild(spanConditionType);
                        forecastDivElement.appendChild(spanCondition);
                        currentDivElement.appendChild(forecastDivElement);
                    })

                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`)
                    .then(res => res.json())
                    .then(infoForLocation => {
                        let upcomingDivElement = document.getElementById('upcoming');
                        upcomingDivElement.querySelectorAll('.forecast-info').forEach(el => {
                            el.remove();
                        });
                        let forecastDivElement = document.createElement('div');
                        forecastDivElement.classList.add('forecast-info');
                        infoForLocation.forecast.forEach(day => {
                            let { condition, high, low } = day;

                            let spanSymbol = document.createElement('span');
                            spanSymbol.classList.add('symbol');
                            let spanTemperature = document.createElement('span');
                            spanTemperature.classList.add('forecast-data');
                            let spanConditionType = document.createElement('span');
                            spanConditionType.classList.add('forecast-data');
                            let spanUpcoming = document.createElement('span');
                            spanUpcoming.classList.add('upcoming');

                            spanSymbol.innerHTML = weatherSymbols[condition];
                            spanTemperature.innerHTML = `${low}${weatherSymbols.Degrees}/${high}${weatherSymbols.Degrees}`;
                            spanConditionType.textContent = condition;

                            spanUpcoming.appendChild(spanSymbol);
                            spanUpcoming.appendChild(spanTemperature);
                            spanUpcoming.appendChild(spanConditionType);
                            forecastDivElement.appendChild(spanUpcoming);
                        });
                        upcomingDivElement.appendChild(forecastDivElement);
                    })
            })
    })

}

attachEvents();