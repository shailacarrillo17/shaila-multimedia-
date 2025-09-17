const play = document.getElementById('play');
const audio1 = document.getElementById('audio1');

let reproducir = false;

document.body.addEventListener('click', () => {
    if (reproducir===false) {
    audio1.play();
    }
    else {
        audio1.pause();
    }
    reproducir = !reproducir;
})


