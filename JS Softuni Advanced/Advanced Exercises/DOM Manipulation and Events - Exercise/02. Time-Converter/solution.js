function attachEventsListeners() {
    let inputFieldDays=document.getElementById('days');
    let buttonConvertDays=document.getElementById('daysBtn');
    buttonConvertDays.addEventListener('click',function() {
        let days=Number(inputFieldDays.value);
        let hours=days*24;
        let minutes=days*1440;
        let seconds=days*86400;
        inputFieldHours.value=hours;
        inputFieldMinutes.value=minutes;
        inputFieldSeconds.value=seconds;
    })

    let inputFieldHours=document.getElementById('hours');
    let buttonConvertHours=document.getElementById('hoursBtn');
    buttonConvertHours.addEventListener('click',function() {
        let hours=Number(inputFieldHours.value);
        let days=hours/24;
        let minutes=days*1440;
        let seconds=days*86400;
        inputFieldDays.value=days;
        inputFieldMinutes.value=minutes;
        inputFieldSeconds.value=seconds;
    })

    let inputFieldMinutes=document.getElementById('minutes');
    let buttonConvertMinutes=document.getElementById('minutesBtn');
    buttonConvertMinutes.addEventListener('click',function() {
        let minutes=Number(inputFieldMinutes.value);
        let days=minutes/1440;
        let hours=days*24;
        let seconds=days*86400;
        inputFieldDays.value=days;
        inputFieldHours.value=hours;
        inputFieldSeconds.value=seconds;
    })

    let inputFieldSeconds=document.getElementById('seconds');
    let buttonConvertSeconds=document.getElementById('secondsBtn');
    buttonConvertSeconds.addEventListener('click',function() {
        let seconds=Number(inputFieldSeconds.value);
        let days=seconds/86400;
        let hours=days*24;
        let minutes=days*1440;
        inputFieldDays.value=days;
        inputFieldHours.value=hours;
        inputFieldMinutes.value=minutes;
        
    })

}