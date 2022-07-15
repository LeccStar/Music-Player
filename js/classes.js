class Song {
    constructor(songName, author, link, image) {
        this.author = author
        this.songName = songName
        this.link = link
        this.image = image
    }
}
class MusicPlayer {
    constructor(songs = [], folder) {
        this.songs = songs
        this.currentIndexSong = 0
        this.folder = folder
        this.audioPlayer = new Audio(this.folder + this.songs[this.currentIndexSong].link)
    }
    pause() {
        this.audioPlayer.pause()
    }
    play() {
        this.audioPlayer.play()
    }
    prevSong() {
        this.currentIndexSong = this.currentIndexSong - 1
        if (this.currentIndexSong < 0) {
            this.currentIndexSong = this.songs.length-1
        }
        this.pause()
        this.audioPlayer = new Audio(this.folder + this.songs[this.currentIndexSong].link)
        this.play()
    }
    nextSong() {
        this.currentIndexSong = this.currentIndexSong + 1
        if (this.currentIndexSong >= this.songs.length) {
            this.currentIndexSong = 0
        }
        this.pause()
        this.audioPlayer = new Audio(this.folder + this.songs[this.currentIndexSong].link)
        this.play()
    }
}
class MusicGallery {
    constructor(songs = [], musicPlayer, options){
        this.songs = [...songs]
        this.musicPlayer = musicPlayer
        this.options = {...options}
    }
    updateSongInfo(){
        this.setCurrentSongText()
        this.setCurrentSongImage()
        this.setCurrentBgGradient()

    }
    setCurrentSongText(){
        const elements = document.querySelectorAll(this.options.textSelector)
        elements.forEach(element => {
            element.innerHTML = this.songs[this.musicPlayer.currentIndexSong].songName
        })
    }
    setCurrentSongImage(){
        const elements = document.querySelectorAll(this.options.imgSelector)
        elements.forEach(element => {
            element.style.backgroundImage = `url(${this.options.imgFolder}${this.songs[this.musicPlayer.currentIndexSong].image})`
        })
    }
    setCurrentBgGradient(){

    }
}