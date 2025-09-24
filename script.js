
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
    "https://radionacional-v3.s3.amazonaws.com/s3fs-public/node/article/field_image/000_Mvd6636262.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b1/b4/2b/caption.jpg?w=1200&h=1200&s=1",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTSXfHq19jQJFg7sF16elOZYcDbJCk1fD9lq6oVKOJ3WBB5IcWRKhr7hGRplpAuS6fAqDaiZL4EYUgIHQnYS-hOrOEmWVSgN-WYXmW28FCVOKt-KkQi7mvtIPYF_9pxiRVGUOa6lTj5Qs/s1600/GranoleriaAguaPatos001a.jpg",
     
];

const titulos = [
    "Ciclovía",
    "Les amis bizcocheria",
    "Al agua patos",
];
const frases = [
" Uno de los planes más emblemáticos de Bogotá. Calles principales se cierran para vehículos y se permite el libre tránsito de ciclistas, corredores, caminantes. Buena forma de ejercitarse, hacer plan social en ambiente abierto y respirar aire fresco. Lo mejor: ambiente festivo, accesible para todos, vistas de la ciudad, oportunidad de ver actividades callejeras, música, puestos de comida. Horario: La ciclovía suele funcionar los domingos y festivos, de 7:00 a. m. hasta cerca de 2:00 p. m. (puede variar dependiendo de la localidad). Tip: Llevar ropa cómoda, bloqueador, agua, y chequear qué avenidas específicas están cerradas según el distrito ese día.",
"Café / bizcochería boutique, ideal para un late morning o media mañana relajada, sobremesa, postres, café especial, ambiente agradable. Perfecto después de la ciclovía para recargar energías. Lo mejor: buen ambiente, pastelería de calidad, opción de café, opciones de snack. Horario habitual: Carrera 16 # 86a-05 Lunes a sábado 8:00 a. m. a 7:30 p. m.; domingos y festivos de 8:00 a. m. a 6:00 p. m.",
"Restaurante / café de comida saludable. Perfecto para comenzar el día ligero: granolas, bowls, sándwiches, frutas, jugos naturales. Ambiente calmado, ideal para disfrutar tranquilamente antes de salir a caminar o hacer actividades al aire libre. Lo mejor: variedad en opciones saludables, locales bien ambientados, buena ubicación (varias sedes). Horario estimado: abre 7:00 a. m. y cierra 21:00 (algunas sedes domingos cierran antes, alrededor de las 7-8 p. m.).Tip: Si vas temprano, aprovechas para evitar filas y disfrutar más tranquilo.",
]

const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

const imagenesT = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/21/5f/e3/piazza-italia-by-storia.jpg",
    "https://jbb.gov.co/wp-content/uploads/2024/07/Rosaleda-2-scaled.jpg",
    "https://files.visitbogota.co/drpl/sites/default/files/2022-04/Colpatria5_RicardoB%C3%A1ez.jpg",
     
];

const titulosT = [
    "Verano restaurante",
    "Jardin botanico",
    "Atardecer Torre colpatria",
];
const frasesT = [
"Un lugar con encanto ideal para el final de la tarde: combina buena comida, ambiente acogedor y estética que invita a quedarse. Aquí lo que lo hace atractivo: Ambiente bien pensado: luces cálidas, detalles estéticos, decoración que invita al relax y a las buenas fotos. Carta cuidadosa: menú que mezcla lo gourmet con lo casero, con ingredientes frescos. Horario estimado / sugerido Calle 81 a # 8 - 30 Su horario fuerte es entre el mediodía hasta las 4:00 pm, donde casi siempre es necesario hacer reserva.",
"Espacio verde muy bonito con variedad de plantas, espacios tranquilos, senderos, ideal para paseo relajado, fotos, descanso en medio de naturaleza urbana. Buen contraste con la ciudad. Lo mejor: diversidad botánica, ambiente pacífico, adecuado para fotos, ideal para meditar / caminar lento. Horario: De martes a viernes de 8:00 a. m. a 5:00 p. m.; sábados, domingos y festivos de 9:00 a. m. a 5:00 p. m.; lunes cerrado por mantenimiento y desinfección. Precio: Nacionales mayores de 5 años ‒ ingreso ~$5.000 COP; menores de 5 años y mayores de 62 gratis.",
"Ver el atardecer desde la Torre Colpatria ofrece vistas panorámicas de la ciudad con luces que cambian, un contraste urbano que se ve espectacular. Buen plan fotográfico, romántico o relajado. Lo mejor: vistas amplias de la ciudad, ver cómo la luz baja, como se va iluminando Bogotá, ideal para fotos. Horario estimado: Viernes: 5:00 p. m. a 9:00 p. m. (último ingreso ~ 8:20 p. m.) Sábados: 12:00 p. m. a 9:00 p. m. (último ingreso ~ 8:20 p. m.)  Domingos y festivos: 11:00 a. m. a 6:00 p. m. (último ingreso ~ 5:20 p. m.) Tip: Verificar qué día hay buen clima, evitar días nublados; si vas con cámara, lleva trípode.",
]

const imagenT = document.getElementById("foto2");
const tituloT = document.getElementById("titulo2");
const prediccionT = document.getElementById("prediccion2");
const botonT = document.getElementById("boton2");


const imagenesN = [
    "https://www.andrescarnederes.com/uploads/images/galeria/660af6d9b027c628039048.jpg",
    "https://cdn.corner.inc/place-photo/AUGGfZkHDu4UxOyf4IZ4i2upw53XGO_mbiIg6BbFqSxdm25FwqqFHU9BwZ84PQd8WJ2Q-pl7jH-9AC1Y8SwRWo_H1CKBhYAdL4eDbMzKQHEmcfjY2u821Vl7GQDKPp3rlDb0C9S2tY9oTYsWRppIArlPmngTsywXdL3ogps85kHv8qkDTksk.jpeg",
    "https://agenciapi.co/sites/default/files/2022-09/THEATRON%20DISCOTECA.jpg",
     
];

const titulosN = [
    "Andrés Carne de Res (y Andrés D.C.)",
    "Rooftop ODEM",
    "theatron discoteca",
];
const frasesN = [
"Restaurante-fiesta icónico en Colombia. Comida abundante, ambiente festivo, música, decoración llamativa, ideal si buscas algo con mucha energía, comida típica combinada con ambiente de rumba. Lo mejor: experiencia inmersiva, varios pisos, posibilidad de bailar, buena comida, es un clásico que muchos turistas y locales disfrutan para “salir por todo” en Bogotá. Horario (Bogotá ‒ Andrés D.C.): Domingo a miércoles de 12:00 m. a 12:00 a. m.; jueves hasta 2:00 a. m.; viernes y sábado hasta 3:00 a. m.",
"Rooftop/bar terraza con vista, ambiente de cocteles, ideal para disfrutar de la ciudad iluminada, tomar algo con amigos, ver cómo cambia la noche desde las alturas. Lo mejor: vistas panorámicas, atmósfera más relajada que una discoteca, ideal como transición entre cena y rumba. Horario estimado:  Cl. 63 ##13-11 Miércoles 5pm-1am Jueves 4pm-3am / Viernes y sábado 3pm-3:30am Domingos 5pm-3am-seguido por festivo.",
"Una de las Discotecas más grandes del mundo con varios ambientes, música variada, espectáculos, público diverso. Excelente para cerrar la noche con baile. Lo mejor: variedad musical, producción de luces, ambiente animado, ideal si ya estás con ánimo de fiesta. Horario estimado:  Calle 58 # 10-32 suele abrir alrededor de las 9-10 p. m. y cerrar hasta altas horas de la madrugada (1-3 a. m.), depende del día.",
]


const imagenN = document.getElementById("foto3");
const tituloN = document.getElementById("titulo3");
const prediccionN = document.getElementById("prediccion3");
const botonN = document.getElementById("boton3");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}


// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
     const indice = numeroRandom(0, imagenes.length); // 0, 1, 2, 3, 4 

     imagen.src = imagenes[indice];
     titulo1.innerText = titulos[indice]; 
     prediccion1.innerText = frases[indice]; 
});



// Ejecuta la función generarPoema() cada vez que hago click en el botón
botonT.addEventListener("click", function () {
     const indice = numeroRandom(0, imagenesT.length); // 0, 1, 2, 3, 4 

     imagenT.src = imagenesT[indice];
     tituloT.innerText = titulosT[indice]; 
     prediccionT.innerText = frasesT[indice]; 
});

// Ejecuta la función generarPoema() cada vez que hago click en el botón
botonN.addEventListener("click", function () {
     const indice = numeroRandom(0, imagenesN.length); // 0, 1, 2, 3, 4 

     imagenN.src = imagenesN[indice];
      tituloN.innerText = titulosN[indice]; 
      prediccionN.innerText = frasesN[indice]; 
});