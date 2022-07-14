class Song {
    constructor(songName, author, link) {
        this.author = author
        this.songName = songName
        this.link = link
    }
}
class MusicPlayer {
    constructor(songs = [], querySelector, folder) {
        this.songs = songs
        this.querySelector = querySelector
        this.currentIndexSong = 0
        this.folder = folder
        this.audioPlayer = new Audio(this.folder + this.songs[this.currentIndexSong].link)
    }
    updateSongText(){
        const elements = document.querySelectorAll(this.querySelector)
        elements.forEach(element => {
            element.innerHTML = this.songs[this.currentIndexSong].songName
        })
    }
    pause() {
        console.log(this.songs[this.currentIndexSong])
        this.audioPlayer.pause()
    }
    play() {
        console.log(this.songs[this.currentIndexSong])
        this.updateSongText()
        this.audioPlayer.play()
    }
    prevSong() {
        this.currentIndexSong = this.currentIndexSong - 1
        if (this.currentIndexSong < 0) {
            this.currentIndexSong = this.songs.length-1
        }
        console.log(this.songs[this.currentIndexSong])
        this.pause()
        this.audioPlayer = new Audio(this.folder + this.songs[this.currentIndexSong].link)
        this.updateSongText()
        this.play()
    }
    nextSong() {
        this.currentIndexSong = this.currentIndexSong + 1
        if (this.currentIndexSong >= this.songs.length) {
            this.currentIndexSong = 0
        }
        console.log(this.songs[this.currentIndexSong])
        this.pause()
        this.audioPlayer = new Audio(this.folder + this.songs[this.currentIndexSong].link)
        this.updateSongText()
        this.play()
    }
}