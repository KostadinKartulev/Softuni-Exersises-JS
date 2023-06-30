function createAssemblyLine() {
    let library = {

        hasClima(givenObject) {
            givenObject["temp"] = 21;
            givenObject["tempSettings"] = 21;
            function adjustTemp() {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            }
            givenObject["adjustTemp"] = adjustTemp;
        },
        hasAudio(givenObject) {
            let currentTrack = {
                name: null,
                artist: null
            };
            givenObject["currentTrack"] = currentTrack;

            function nowPlaying() {
                if (this.currentTrack.name !== null && this.currentTrack.artist !== null) {
                    console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`);
                }

            }
            givenObject["nowPlaying"] = nowPlaying;
        },
        hasParktronic(givenObject) {
            function checkDistance(distance) {
                switch (true) {
                    case (distance < 0.1):
                        console.log("Beep! Beep! Beep!");
                        break;
                    case (0.1 <= distance && distance < 0.25 ):
                        console.log("Beep! Beep!");
                        break;
                    case (0.25 <= distance && distance < 0.5 ):
                        console.log("Beep!");
                        break;

                    default:
                        console.log("");
                        break;
                }
            }
            givenObject["checkDistance"]=checkDistance;
        }
    }
    return library;

}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

console.log("-------------------------");


assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

console.log("-------------------------");


assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log("-------------------------");

console.log(myCar);
