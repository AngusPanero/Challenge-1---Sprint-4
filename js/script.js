import peliculas from './peliculas.js'

//Filtrar Peliculas Acción id=28
const accion = peliculas.filter((element) => element.genre_ids.includes(28));
console.log("Peliculas de Acción", accion);

//Filtrar Peliculas Thriller id=53
const thriller = peliculas.filter((element) => element.genre_ids.includes(53));
console.log("Peliculas de Thriller", thriller);

//Filtrar Peliculas Aventura id=12
const aventura = peliculas.filter((element) => element.genre_ids.includes(12));
console.log("Peliculas de Aventura", aventura);  

//Crear Nodo que Sume un <div> <p> <figure> a div "Genero-28"
const llamarGen28 = document.getElementById("genero-28");
console.log(llamarGen28);

const crearDiv28 = document.createElement("div")//Acá me Creo Div Hijo del Div Genero-28
llamarGen28.appendChild(crearDiv28);

const crearFigure28= document.createElement("figure");// Acá me Creo Fig Hijo de Div
crearDiv28.appendChild(crearFigure28);

const crearP28 = document.createElement("p");// Acá me Creo P Hermano de Fig
crearDiv28.appendChild(crearP28);

const primerPelicula = accion[0].title;//Pongo el Titulo de la Pelicula
crearP28.textContent = primerPelicula;

