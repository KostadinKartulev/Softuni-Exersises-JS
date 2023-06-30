function Gramophone(band,album,song ){
    let songDuration=(album.length * band.length) * song.length / 2;
    let numOfRotations=songDuration/2.5;
    console.log(`The plate was rotated ${Math.ceil(numOfRotations)} times.`);
}
Gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
Gramophone('Rammstein', 'Sehnsucht', 'Engel');
