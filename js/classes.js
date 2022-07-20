class Song {
    constructor(songName, author, link, image, bgColor,) {
        this.author = author
        this.songName = songName
        this.link = link
        this.image = image
        this.bgColor = bgColor
    }
}
class MusicPlayer {
    constructor(songs = [], folder) {
        this.songs = songs
        this.currentIndexSong = 0
        this.folder = folder
        this.audioPlayer = new Audio(this.folder + this.songs[this.currentIndexSong].link)
        this.status = "paused"
    }
    pause() {
        this.audioPlayer.pause()
    }
    play() {
        if (this.status == "paused") {
            this.status = "playing"
            const elements = document.querySelectorAll(".playPause")
            elements.forEach(element => {
                element.innerHTML = "| |"
            })
            this.audioPlayer.play()
        } else {
            this.status = "paused"
            const elements = document.querySelectorAll(".playPause")
            elements.forEach(element => {
                element.innerHTML = "▶"
            })
            this.audioPlayer.pause()
        }
    }
    prevSong() {
        this.currentIndexSong = this.currentIndexSong - 1
        if (this.currentIndexSong < 0) {
            this.currentIndexSong = this.songs.length-1
        }
        this.pause()
        this.audioPlayer = new Audio(this.folder + this.songs[this.currentIndexSong].link)
        if (this.status == "playing") {
            this.audioPlayer.play()
        }
    }
    nextSong() {
        this.currentIndexSong = this.currentIndexSong + 1
        if (this.currentIndexSong >= this.songs.length) {
            this.currentIndexSong = 0
        }
        this.pause()
        this.audioPlayer = new Audio(this.folder + this.songs[this.currentIndexSong].link)
        if (this.status == "playing") {
            this.audioPlayer.play()
        }
    }
}
class MusicGallery {
    constructor(songs = [], musicPlayer, options){
        this.songs = [...songs]
        this.musicPlayer = musicPlayer
    }
    updateSongInfo(){
        this.setCurrentSongText()
        this.setCurrentSongImage()
        this.setCurrentBgGradient()

    }
    setCurrentSongText(){
        const elements = document.querySelectorAll(".songText")
        elements.forEach(element => {
            element.innerHTML = this.songs[this.musicPlayer.currentIndexSong].songName
        })
        const elements2 = document.querySelectorAll(".songArtist")
        elements2.forEach(element => {
            element.innerHTML = this.songs[this.musicPlayer.currentIndexSong].author
        })
    }
    setCurrentSongImage(){
        const elements = document.querySelectorAll(".bgImg")
        elements.forEach(element => {
            element.style.backgroundImage = `url(./MEDIA/img/${this.songs[this.musicPlayer.currentIndexSong].image})`
        })
    }
    setCurrentBgGradient(){
        const elements = document.querySelectorAll("body")
        elements.forEach(element => {
            element.style.backgroundImage = `linear-gradient(${this.songs[this.musicPlayer.currentIndexSong].bgColor})`
        })
    }
}