
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');

const mañana = document.getElementById("mañana");
const tarde = document.getElementById('tarde');
const noche = document.getElementById('noche');


let reproducir = false;

mañana.addEventListener('click', () => {
    if (reproducir===false) {
    audio1.play();
    }
    else {
        audio1.pause();
    }
    reproducir = !reproducir;
})

tarde.addEventListener('click', () => {
    if (reproducir===false) {
    audio2.play();
    }
    else {
        audio2.pause();
    }
    reproducir = !reproducir;
})

noche.addEventListener('click', () => {
    if (reproducir===false) {
    audio3.play();
    }
    else {
        audio3.pause();
    }
    reproducir = !reproducir;
})

const imagenes = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTSXfHq19jQJFg7sF16elOZYcDbJCk1fD9lq6oVKOJ3WBB5IcWRKhr7hGRplpAuS6fAqDaiZL4EYUgIHQnYS-hOrOEmWVSgN-WYXmW28FCVOKt-KkQi7mvtIPYF_9pxiRVGUOa6lTj5Qs/s1600/GranoleriaAguaPatos001a.jpg",
];

const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");
