import peliculas from './peliculas.js'

console.log(peliculas);

//Filtrar Peliculas Acción id=28
const accion = peliculas.filter((element) => element.genre_ids.includes(28));
console.log("Peliculas de Acción", accion);

//Filtrar Peliculas Thriller id=53
const thriller = peliculas.filter((element) => element.genre_ids.includes(53));
console.log("Peliculas de Thriller", thriller);

//Filtrar Peliculas Aventura id=12
const aventura = peliculas.filter((element) => element.genre_ids.includes(12));
console.log("Peliculas de Aventura", aventura);  


//Sección Acción
const llamarGen28 = document.getElementById("genero-28");//Llamo al id "Genero-28"
console.log(llamarGen28);

const crearDiv28 = document.createElement("div")//Acá me Creo Div Hijo del Div Genero-28
llamarGen28.appendChild(crearDiv28);

const crearImg28= document.createElement("img");// Acá me Creo Img Hijo de Div
crearDiv28.appendChild(crearImg28);

const primerImgPelicula = accion[0].poster_path;//Pongo Imagen de la Pelicula
crearImg28.setAttribute("src", "https://image.tmdb.org/t/p/w500/qXChf7MFL36BgoLkiB3BzXiwW82.jpg");

const crearP28 = document.createElement("p");// Acá me Creo P Hermano de Img
crearDiv28.appendChild(crearP28);

const primerTitulo = accion[0].title;//Pongo el Titulo de la Pelicula
crearP28.textContent = primerTitulo;

const crearDiv282 = document.createElement("div")//Acá me Creo Cada Div Hijo del Div Genero-28
llamarGen28.appendChild(crearDiv282);
const crearDiv283 = document.createElement("div")
llamarGen28.appendChild(crearDiv283);
const crearDiv284 = document.createElement("div")
llamarGen28.appendChild(crearDiv284);
const crearDiv285 = document.createElement("div")
llamarGen28.appendChild(crearDiv285);
const crearDiv286 = document.createElement("div")
llamarGen28.appendChild(crearDiv286);
const crearDiv287 = document.createElement("div")
llamarGen28.appendChild(crearDiv287);
const crearDiv288 = document.createElement("div")
llamarGen28.appendChild(crearDiv288);
const crearDiv289 = document.createElement("div")
llamarGen28.appendChild(crearDiv289);
const crearDiv2810 = document.createElement("div")
llamarGen28.appendChild(crearDiv2810);
const crearDiv2811 = document.createElement("div")
llamarGen28.appendChild(crearDiv2811);
const crearDiv2812 = document.createElement("div")
llamarGen28.appendChild(crearDiv2812);
const crearDiv2813 = document.createElement("div")
llamarGen28.appendChild(crearDiv2813);
const crearDiv2814 = document.createElement("div")
llamarGen28.appendChild(crearDiv2814);
const crearDiv2815 = document.createElement("div")
llamarGen28.appendChild(crearDiv2815);
const crearDiv2816 = document.createElement("div")
llamarGen28.appendChild(crearDiv2816);
const crearDiv2817 = document.createElement("div")
llamarGen28.appendChild(crearDiv2817);
const crearDiv2818 = document.createElement("div")
llamarGen28.appendChild(crearDiv2818);
const crearDiv2819 = document.createElement("div")
llamarGen28.appendChild(crearDiv2819);
const crearDiv2820 = document.createElement("div")
llamarGen28.appendChild(crearDiv2820);


const crearImg282= document.createElement("img");// Acá me Creo Cada Img Hijo de Div
crearDiv282.appendChild(crearImg282);
const crearImg283= document.createElement("img");
crearDiv283.appendChild(crearImg283);
const crearImg284= document.createElement("img");
crearDiv284.appendChild(crearImg284);
const crearImg285= document.createElement("img");
crearDiv285.appendChild(crearImg285);
const crearImg286= document.createElement("img");
crearDiv286.appendChild(crearImg286);
const crearImg287= document.createElement("img");
crearDiv287.appendChild(crearImg287);
const crearImg288= document.createElement("img");
crearDiv288.appendChild(crearImg288);
const crearImg289= document.createElement("img");
crearDiv289.appendChild(crearImg289);
const crearImg2810= document.createElement("img");
crearDiv2810.appendChild(crearImg2810);
const crearImg2811= document.createElement("img");
crearDiv2811.appendChild(crearImg2811);
const crearImg2812= document.createElement("img");
crearDiv2812.appendChild(crearImg2812);
const crearImg2813= document.createElement("img");
crearDiv2813.appendChild(crearImg2813);
const crearImg2814= document.createElement("img");
crearDiv2814.appendChild(crearImg2814);
const crearImg2815= document.createElement("img");
crearDiv2815.appendChild(crearImg2815);
const crearImg2816= document.createElement("img");
crearDiv2816.appendChild(crearImg2816);
const crearImg2817= document.createElement("img");
crearDiv2817.appendChild(crearImg2817);
const crearImg2818= document.createElement("img");
crearDiv2818.appendChild(crearImg2818);
const crearImg2819= document.createElement("img");
crearDiv2819.appendChild(crearImg2819);
const crearImg2820= document.createElement("img");
crearDiv2820.appendChild(crearImg2820);


const primerImgPelicula2 = accion[1].poster_path;//Pongo Cada Imagen de la Pelicula
crearImg282.setAttribute("src", "../img/retribution.jpg");
const primerImgPelicula3 = accion[2].poster_path;
crearImg283.setAttribute("src", "../img/fastx.jpg");
const primerImgPelicula4 = accion[3].poster_path;
crearImg284.setAttribute("src", "../img/The Equalizer 3.jpg");
const primerImgPelicula5 = accion[4].poster_path;
crearImg285.setAttribute("src", "../img/gran turismo.jpg");
const primerImgPelicula6 = accion[5].poster_path;
crearImg286.setAttribute("src", "https://image.tmdb.org/t/p/w500/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg");
const primerImgPelicula7 = accion[6].poster_path;
crearImg287.setAttribute("src", "../img/mission impossible dead.jpg");
const primerImgPelicula8 = accion[7].poster_path;
crearImg288.setAttribute("src", "../img/Sound of Freedom.jpg");
const primerImgPelicula9 = accion[8].poster_path;
crearImg289.setAttribute("src", "../img/meg 2.jpg");
const primerImgPelicula10 = accion[9].poster_path;
crearImg2810.setAttribute("src", "../img/desperation road.jpg");
const primerImgPelicula11 = accion[10].poster_path;
crearImg2811.setAttribute("src", "../img/surgical strike.jpg");
const primerImgPelicula12 = accion[11].poster_path;
crearImg2812.setAttribute("src", "https://image.tmdb.org/t/p/w500/tj7mp7uWjVw5N73G5Hwm1bkMOcD.jpg");
const primerImgPelicula13 = accion[12].poster_path;
crearImg2813.setAttribute("src", "https://image.tmdb.org/t/p/w500/3H9NA1KWEQN0ItL3Wl3SFZYP6yV.jpg");
const primerImgPelicula14 = accion[13].poster_path;
crearImg2814.setAttribute("src", "../img/paw patrol.jpg");
const primerImgPelicula15 = accion[14].poster_path;
crearImg2815.setAttribute("src", "https://image.tmdb.org/t/p/w500/a9bt9byTQ1MIfRWYQX240HiYPrl.jpg");
const primerImgPelicula16 = accion[15].poster_path;
crearImg2816.setAttribute("src", "../img/transformers.jpg");
const primerImgPelicula17 = accion[16].poster_path;
crearImg2817.setAttribute("src", "https://image.tmdb.org/t/p/w500/r08U3dwiOeStXcjYmfnRyumgKyq.jpg");
const primerImgPelicula18 = accion[17].poster_path;
crearImg2818.setAttribute("src", "../img/spiderman across.jpg");
const primerImgPelicula19 = accion[18].poster_path;
crearImg2819.setAttribute("src", "../img/babylon ad.jpg");
const primerImgPelicula20 = accion[19].poster_path;
crearImg2820.setAttribute("src", "../img/the engineer.jpg");


const crearP282 = document.createElement("p");// Acá me Creo Cada P Hermano de Img
crearDiv282.appendChild(crearP282);
const crearP283 = document.createElement("p");
crearDiv283.appendChild(crearP283);
const crearP284 = document.createElement("p");
crearDiv284.appendChild(crearP284);
const crearP285 = document.createElement("p");
crearDiv285.appendChild(crearP285);
const crearP286 = document.createElement("p");
crearDiv286.appendChild(crearP286);
const crearP287 = document.createElement("p");
crearDiv287.appendChild(crearP287);
const crearP288 = document.createElement("p");
crearDiv288.appendChild(crearP288);
const crearP289 = document.createElement("p");
crearDiv289.appendChild(crearP289);
const crearP2810 = document.createElement("p");
crearDiv2810.appendChild(crearP2810);
const crearP2811 = document.createElement("p");
crearDiv2811.appendChild(crearP2811);
const crearP2812 = document.createElement("p");
crearDiv2812.appendChild(crearP2812);
const crearP2813 = document.createElement("p");
crearDiv2813.appendChild(crearP2813);
const crearP2814 = document.createElement("p");
crearDiv2814.appendChild(crearP2814);
const crearP2815 = document.createElement("p");
crearDiv2815.appendChild(crearP2815);
const crearP2816 = document.createElement("p");
crearDiv2816.appendChild(crearP2816);
const crearP2817 = document.createElement("p");
crearDiv2817.appendChild(crearP2817);
const crearP2818 = document.createElement("p");
crearDiv2818.appendChild(crearP2818);
const crearP2819 = document.createElement("p");
crearDiv2819.appendChild(crearP2819);
const crearP2820 = document.createElement("p");
crearDiv2820.appendChild(crearP2820);

const primerTitulo2 = accion[1].title;//Pongo el Titulo de Cada Pelicula
crearP282.textContent = primerTitulo2;
const primerTitulo3 = accion[2].title;
crearP283.textContent = primerTitulo3;
const primerTitulo4 = accion[3].title;
crearP284.textContent = primerTitulo4;
const primerTitulo5 = accion[4].title;
crearP285.textContent = primerTitulo5;
const primerTitulo6 = accion[5].title;
crearP286.textContent = primerTitulo6;
const primerTitulo7 = accion[6].title;
crearP287.textContent = primerTitulo7;
const primerTitulo8 = accion[7].title;
crearP288.textContent = primerTitulo8;
const primerTitulo9 = accion[8].title;
crearP289.textContent = primerTitulo9;
const primerTitulo10 = accion[9].title;
crearP2810.textContent = primerTitulo10;
const primerTitulo11 = accion[10].title;
crearP2811.textContent = primerTitulo11;
const primerTitulo12 = accion[11].title;
crearP2812.textContent = primerTitulo12;
const primerTitulo13 = accion[12].title;
crearP2813.textContent = primerTitulo13;
const primerTitulo14 = accion[13].title;
crearP2814.textContent = primerTitulo14;
const primerTitulo15 = accion[14].title;
crearP2815.textContent = primerTitulo15;
const primerTitulo16 = accion[15].title;
crearP2816.textContent = primerTitulo16;
const primerTitulo17 = accion[16].title;
crearP2817.textContent = primerTitulo17;
const primerTitulo18 = accion[17].title;
crearP2818.textContent = primerTitulo18;
const primerTitulo19 = accion[18].title;
crearP2819.textContent = primerTitulo19;
const primerTitulo20 = accion[19].title;
crearP2820.textContent = primerTitulo20;

//Sección Thriller
const llamarGen53 = document.getElementById("genero-53");//Llamo al id "Genero-53"
console.log(llamarGen53);

const crearDiv53 = document.createElement("div")//Acá me Creo Div Hijo del Div Genero-53
llamarGen53.appendChild(crearDiv53);

const crearImg53= document.createElement("img");// Acá me Creo Img Hijo de Div
crearDiv53.appendChild(crearImg53);

const crearP53 = document.createElement("p");// Acá me Creo P Hermano de Img
crearDiv53.appendChild(crearP53);

const segundaImgPelicula = accion[4].poster_path;//Pongo Imagen de la Pelicula
crearImg53.setAttribute("src", "https://image.tmdb.org/t/p/w500/qXChf7MFL36BgoLkiB3BzXiwW82.jpg");

const segundoTitulo = accion[0].title;//Pongo el Titulo de la Pelicula
crearP53.textContent = segundoTitulo;



const crearDiv532 = document.createElement("div")//Acá me Creo Div Hijo del Div Genero-53
llamarGen53.appendChild(crearDiv532);
const crearDiv533 = document.createElement("div")
llamarGen53.appendChild(crearDiv533);
const crearDiv534 = document.createElement("div")
llamarGen53.appendChild(crearDiv534);
const crearDiv535 = document.createElement("div")
llamarGen53.appendChild(crearDiv535);
const crearDiv536 = document.createElement("div")
llamarGen53.appendChild(crearDiv536);
const crearDiv537 = document.createElement("div")
llamarGen53.appendChild(crearDiv537);
const crearDiv538 = document.createElement("div")
llamarGen53.appendChild(crearDiv538);
const crearDiv539 = document.createElement("div")
llamarGen53.appendChild(crearDiv539);
const crearDiv5310 = document.createElement("div")
llamarGen53.appendChild(crearDiv5310);

const crearImg532= document.createElement("img");// Acá me Creo Img Hijo de Div
crearDiv532.appendChild(crearImg532);
const crearImg533= document.createElement("img");
crearDiv533.appendChild(crearImg533);
const crearImg534= document.createElement("img");
crearDiv534.appendChild(crearImg534);
const crearImg535= document.createElement("img");
crearDiv535.appendChild(crearImg535);
const crearImg536= document.createElement("img");
crearDiv536.appendChild(crearImg536);
const crearImg537= document.createElement("img");
crearDiv537.appendChild(crearImg537);
const crearImg538= document.createElement("img");
crearDiv538.appendChild(crearImg538);
const crearImg539= document.createElement("img");
crearDiv539.appendChild(crearImg539);
const crearImg5310= document.createElement("img");
crearDiv5310.appendChild(crearImg5310);


const crearP532 = document.createElement("p");// Acá me Creo P Hermano de Img
crearDiv532.appendChild(crearP532);
const crearP533 = document.createElement("p");
crearDiv533.appendChild(crearP533);
const crearP534 = document.createElement("p");
crearDiv534.appendChild(crearP534);
const crearP535 = document.createElement("p");
crearDiv535.appendChild(crearP535);
const crearP536 = document.createElement("p");
crearDiv536.appendChild(crearP536);
const crearP537 = document.createElement("p");
crearDiv537.appendChild(crearP537);
const crearP538 = document.createElement("p");
crearDiv538.appendChild(crearP538);
const crearP539 = document.createElement("p");
crearDiv539.appendChild(crearP539);
const crearP5310 = document.createElement("p");
crearDiv5310.appendChild(crearP5310);

const segundaImgPelicula2 = accion[4].poster_path;//Pongo Imagen de la Pelicula
crearImg532.setAttribute("src", "../img/retribution.jpg");
const segundaImgPelicula3 = accion[4].poster_path;
crearImg533.setAttribute("src", "../img/fastx.jpg");
const segundaImgPelicula4 = accion[4].poster_path;
crearImg534.setAttribute("src", "../img/The Equalizer 3.jpg");
const segundaImgPelicula5 = accion[5].poster_path;
crearImg535.setAttribute("src", "https://image.tmdb.org/t/p/w500/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg");
const segundaImgPelicula6 = accion[4].poster_path;
crearImg536.setAttribute("src", "../img/mission impossible dead.jpg");
const segundaImgPelicula7 = accion[4].poster_path;
crearImg537.setAttribute("src", "../img/desperation road.jpg");
const segundaImgPelicula8 = accion[4].poster_path;
crearImg538.setAttribute("src", "https://image.tmdb.org/t/p/w500/a9bt9byTQ1MIfRWYQX240HiYPrl.jpg");
const segundaImgPelicula9 = accion[4].poster_path;
crearImg539.setAttribute("src", "../img/babylon ad.jpg");
const segundaImgPelicula10 = accion[4].poster_path;
crearImg5310.setAttribute("src", "../img/the engineer.jpg");

const segundoTitulo2 = accion[1].title;//Pongo el Titulo de la Pelicula
crearP532.textContent = segundoTitulo2;
const segundoTitulo3 = accion[2].title;
crearP533.textContent = segundoTitulo3;
const segundoTitulo4 = accion[3].title;
crearP534.textContent = segundoTitulo4;
const segundoTitulo5 = accion[5].title;
crearP535.textContent = segundoTitulo5;
const segundoTitulo6 = accion[6].title;
crearP536.textContent = segundoTitulo6;
const segundoTitulo7 = accion[9].title;
crearP537.textContent = segundoTitulo7;
const segundoTitulo8 = accion[14].title;
crearP538.textContent = segundoTitulo8;
const segundoTitulo9 = accion[18].title;
crearP539.textContent = segundoTitulo9;
const segundoTitulo10 = accion[19].title;
crearP5310.textContent = segundoTitulo10;


//Sección Aventura
const llamarGen12 = document.getElementById("genero-12");//Llamo al id "Genero-12"
console.log(llamarGen12);

const crearDiv12 = document.createElement("div")//Acá me Creo Div Hijo del Div Genero-12
llamarGen12.appendChild(crearDiv12);

const crearImg12= document.createElement("img");// Acá me Creo Img Hijo de Div
crearDiv12.appendChild(crearImg12);

const crearP12 = document.createElement("p");// Acá me Creo P Hermano de Img
crearDiv12.appendChild(crearP12);

const terceraImgPelicula = accion[4].poster_path;//Pongo Imagen de la Pelicula
crearImg12.setAttribute("src", "https://image.tmdb.org/t/p/w500/qXChf7MFL36BgoLkiB3BzXiwW82.jpg");

const tercerTitulo = accion[0].title;//Pongo el Titulo de la Pelicula
crearP12.textContent = tercerTitulo;


const crearDiv122 = document.createElement("div")//Acá me Creo Div Hijo del Div Genero-12
llamarGen12.appendChild(crearDiv122);
const crearDiv123 = document.createElement("div")
llamarGen12.appendChild(crearDiv123);
const crearDiv124 = document.createElement("div")
llamarGen12.appendChild(crearDiv124);
const crearDiv125 = document.createElement("div")
llamarGen12.appendChild(crearDiv125);
const crearDiv126 = document.createElement("div")
llamarGen12.appendChild(crearDiv126);

const crearImg122= document.createElement("img");// Acá me Creo Img Hijo de Div
crearDiv122.appendChild(crearImg122);
const crearImg123= document.createElement("img");
crearDiv123.appendChild(crearImg123);
const crearImg124= document.createElement("img");
crearDiv124.appendChild(crearImg124);
const crearImg125= document.createElement("img");
crearDiv125.appendChild(crearImg125);
const crearImg126= document.createElement("img");
crearDiv126.appendChild(crearImg126);

const crearP122 = document.createElement("p");// Acá me Creo P Hermano de Img
crearDiv122.appendChild(crearP122);
const crearP123 = document.createElement("p")
crearDiv123.appendChild(crearP123);
const crearP124 = document.createElement("p")
crearDiv124.appendChild(crearP124);
const crearP125 = document.createElement("p")
crearDiv125.appendChild(crearP125);
const crearP126 = document.createElement("p")
crearDiv126.appendChild(crearP126);

const terceraImgPelicula2 = accion[5].poster_path;//Pongo Imagen de la Pelicula
crearImg122.setAttribute("src", "https://image.tmdb.org/t/p/w500/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg");
const terceraImgPelicula3 = accion[12].poster_path;
crearImg123.setAttribute("src", "https://image.tmdb.org/t/p/w500/3H9NA1KWEQN0ItL3Wl3SFZYP6yV.jpg");
const terceraImgPelicula4 = accion[15].poster_path;
crearImg124.setAttribute("src", "../img/transformers.jpg");
const terceraImgPelicula5 = accion[17].poster_path;
crearImg125.setAttribute("src", "../img/spiderman across.jpg");
const terceraImgPelicula6 = accion[18].poster_path;
crearImg126.setAttribute("src", "../img/babylon ad.jpg");

const tercerTitulo2 = accion[5].title;//Pongo el Titulo de la Pelicula
crearP122.textContent = tercerTitulo2;
const tercerTitulo3 = accion[12].title;
crearP123.textContent = tercerTitulo3;
const tercerTitulo4 = accion[15].title;
crearP124.textContent = tercerTitulo4;
const tercerTitulo5 = accion[17].title;
crearP125.textContent = tercerTitulo5;
const tercerTitulo6 = accion[18].title;
crearP126.textContent = tercerTitulo6; 


//Probando Consola