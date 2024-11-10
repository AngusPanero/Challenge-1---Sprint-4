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

//Crear Nodo que Sume un <figure> a div "Genero-28"
const llamarGen28 = document.getElementById("genero-28");
console.log(llamarGen28);

const crearP28 = document.createElement("p");
llamarGen28.appendChild(crearP28)
console.log(llamarGen28);

const primerPelicula = accion[0].title;
llamarGen28.textContent = primerPelicula;

