function hoursforproject(input){
    let name=input[0];
    let projects=input[1];

    let totalhours=projects*3;

    let info=`The architect ${name} will need ${totalhours} hours to complete ${projects} project/s.`;
    console.log(info);
}
hoursforproject(["Georgi",8]);