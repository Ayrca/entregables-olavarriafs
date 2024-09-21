// const procesarDatos = async () => {
//     let respuesta = await obtenerResultado();
//     console.log(respuesta);
// }

// procesarDatos();

// fetch

// let informacion = fetch("https://fakestoreapi.com/products");

// console.log(informacion)

let contenedor = document.getElementById("contenedor");

// fetch("https://fakestoreapi.com/products")
//     .then(resp => resp.json())
//     .then(data => {
//         data.forEach(prod => {
//             contenedor.innerHTML += `<h2> Nombre: ${prod.title} </h2>
//                                      <h4> Precio: ${prod.price} </h4>`
//         })
//     })
//     .catch(err => console.log(err))
let imagenes = [
    "./imagenes/bulbasaur.jfif",
    "./imagenes/yvisaur.jfif",
    "./imagenes/venusaur.jfif",
    "./imagenes/charmander.jfif",
    "./imagenes/charmeleon.jfif",
    "./imagenes/charizard.jfif",
    "./imagenes/squirtle.jfif",
    "./imagenes/wartortle.jfif",
    "./imagenes/blastoise.jfif",
    "./imagenes/caterpie.jfif",
];
fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then((resp) => resp.json())
    .then((data) => {
        data.results.forEach((pokemon, index) => {
            fetch(pokemon.url)
                .then((resp) => resp.json())
                .then((data) => {
                    if (index < imagenes.length) {
                        contenedor.innerHTML += `
            <img src="${imagenes[index]}" alt="pokes" width="100%" height="160px"> </img>
             <div><h3><span style="text-transform:uppercase;color:blue;"> 
             ${pokemon.name}
              </span>
            </h3>
            <span>Experiencia base: ${data.base_experience}</span> <br>
            </div>`;
                    }
                });
        });
    })
    .catch((err) => console.log(err));
