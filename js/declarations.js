
const mySongs = [
    new Song(
        'Tú Me Dejaste De Querer',
        'C. Tangana',
        'c-tangana-nino-de-elche-la-hungara-tu-me-dejaste-de-querer.mp3',
        'tu-me-dejaste-de-querer.jpg',
        '#49494A,#5B3E30',
    ),
    new Song(
        'Ateo',
        'C. Tangana',
        "c-tangana-nathy-peluso-ateo-video-oficial.mp3",
        'ateo.jpg',
        '#010101,#A0474B',

    ),
    new Song(
        'Demasiadas Mujeres',
        'C. Tangana',
        'y2mate.com - C Tangana  Demasiadas Mujeres Video Oficial.mp3',
        'demasiadas-mujeres.jpg',
        '#2A2F35,#5F5852'
    ),
    new Song(
        'Nunca Estoy',
        'C. Tangana',
        'c-tangana-nunca-estoy-video-oficial.mp3',
        'nunca-estoy.jpg',
        "#EAE7D4,#DFDECC",
    ),
]

localStorage.setItem("mySongs",JSON.stringify(mySongs))
const mySongsinStorage = JSON.parse( localStorage.getItem("mySongs"))
console.log(mySongsinStorage)

const myMusicPlayer = new MusicPlayer(mySongs, "./MEDIA/")
const myMusicGallery = new MusicGallery(mySongs, myMusicPlayer,)
