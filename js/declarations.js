
const mySongs = [
    new Song(
        'Tú Me Dejaste De Querer',
        'C. Tangana',
        'c-tangana-nino-de-elche-la-hungara-tu-me-dejaste-de-querer.mp3',
        'tu-me-dejaste-de-querer.jpg'
    ),
    new Song(
        'Ateo',
        'C. Tangana',
        "c-tangana-nathy-peluso-ateo-video-oficial.mp3",
        'ateo.jpg'
    ),
    new Song(
        'Demasiadas Mujeres',
        'C. Tangana',
        'y2mate.com - C Tangana  Demasiadas Mujeres Video Oficial.mp3',
        'demasiadas-mujeres.jpg'
    ),
    new Song(
        'Nunca Estoy',
        'C. Tangana',
        'c-tangana-nunca-estoy-video-oficial.mp3',
        'nunca-estoy.jpg'
    ),
]
const myMusicPlayer = new MusicPlayer(mySongs, "./MEDIA/")
const myMusicGallery = new MusicGallery(mySongs, myMusicPlayer, { bgSelector: ".background-gallery", textSelector: ".songText", imgSelector: ".bgImg", imgFolder: "./MEDIA/img/" })
