function songs(arrInput) {
    
    class Song{
        constructor(typeList, name,time){
            this.typeList=typeList;
            this.name=name;
            this.time=time;
        }
    }
    let numOfSongs=arrInput.shift();
    let command=arrInput.pop();

    let songs=[];
    for (let i = 0; i < numOfSongs; i++) {
        let arrSongInfo=arrInput[i].split("_");
        let songInfo=new Song(arrSongInfo[0],arrSongInfo[1],arrSongInfo[2]);
        songs.push(songInfo);
        
    }
    if (command=="all") {
        for (let song of songs) {
            console.log(song.name);
        }
    }else{
        for (let song of songs) {
            if (song.typeList==command) {
                console.log(song.name);
            }
        }
    }
    
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );
