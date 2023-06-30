function PrintMovies(arrInput) {
    let arrMovies=[];
    
    for (let i = 0; i < arrInput.length; i++) {
        let movie={};
        let command=arrInput[i].split(" ");

        if (command.includes("addMovie")) {
            command.shift();
            let movieName=command.join(" ")
            movie.name=movieName;
        }else if (command.includes("directedBy")){
            let indexOfUnwantedWord=command.indexOf("directedBy");
            let movieName=command.slice(0,indexOfUnwantedWord).join(" ");
            let director=command.slice(indexOfUnwantedWord+1).join(" ");

            for (let movie of arrMovies) {
                if (movie.name==movieName) {
                    movie.director=director;
                }
            }
            
        }else if (command.includes("onDate")) {
            let indexOfUnwantedWord=command.indexOf("onDate");
            let movieName=command.slice(0,indexOfUnwantedWord).join(" ");
            let date=command.slice(indexOfUnwantedWord+1).join(" ");

            for (let movie of arrMovies) {
                if (movie.name==movieName) {
                    movie.date=date;
                }
            }
        }
        arrMovies.push(movie);
        
    }
    for (let movie of arrMovies) {
        if (movie.name!==undefined && movie.director!==undefined && movie.date!==undefined) {
            console.log(JSON.stringify(movie));
        }
    }
}
PrintMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );
PrintMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );
