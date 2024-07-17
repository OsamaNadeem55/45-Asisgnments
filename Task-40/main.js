//TASK 40
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("Atif Aslam", "Birthday Special");
console.log(album);
album = makeAlbum("Arham", "Sukoon e Zindagi");
console.log(album);
album = makeAlbum("Faiz", "Diamond Waves");
console.log(album);
