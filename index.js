//DESARROLLA AQUI TUS SOLUCIONES

//Ejercicio 1

async function getRandomPokemon() {
    try {
        const listaPokemon = 1302;
        let pokemonAleatorio = 1 + Math.floor(Math.random() * listaPokemon);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`);
        let data = response.json();
        return data
    } catch (error){
        console.log(`ERROR: ${error.stack}`)
    }
}

//Ejercicio 2

async function getImageAndName (pokemon){
    try{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        let data = await response.json()
        let name = data.name;
        let img = data.sprites.front_default;
        return {name, img}
    } catch (error){
        console.log(`ERROR: ${error.stack}`)
    }
}
    
getImageAndName().then(data => console.log(data))

//Ejercicio 3

async function printImageAndName(pokemon) {
    try{
        let response = await getImageAndName()

        let contenedor = document.createElement("section")

        let imgElement = document.createElement("img");
        img.src = img;
        img.alt = nombre;

        let nombrePokemon = document.createElement("h1");
        nombrePokemon.innerHTML = nombre;

        document.body.appendChild(contenedor);
        contenedor.appendChild(imgElement);
        contenedor.appendChild(nombrePokemon);

       return response
    } 
    catch (error){
    console.log(`ERROR: ${error.stack}`)
    }
}



//Ejercicio 4

async function getRandomDogImage () {
    try {
        let imagenPerro = await fetch(`https://dog.ceo/api/breeds/image/random`);
        let data = await imagenPerro.json();
        let urlImg = data.message;
        return urlImg;
    }
    catch (error){
        console.log(`ERROR: ${error.stack}`)
    }
    
}


//Ejercicio 5

async function getRandomPokemonImage() {
    try {
        const listaPokemon = 1302;
        let pokemonAleatorio = 1 + Math.floor(Math.random() * listaPokemon);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`)
        let data = await response.json()
        let urlPokemon = data.front_default;
        return urlPokemon
    }
    catch (error){
        console.log(`ERROR: ${error.stack}`)
    }
}

getRandomPokemonImage()



//Ejercicio 6

function printPugvsPicachu () {
    const pikachuURL = "https://pokeapi.co/api/v2/pokemon/pikachu";
    const pugURL = "https://dog.ceo/api/breed/pug/images/random";

    console.time("***timer2***"); //Iniciamos el temporizador
    datos0 = ""; //Creamos dos variables vacías donde guardar los datos de la "carrera"
    datos1 = "";
    Promise.all([ //Utilizamos Promise.all para ejecutar todas las promesas, que los fetch nos devolverán.
        fetch(pikachuURL).then(res => res.json()), 
        fetch(pugURL).then(res => res.json())
    ]).then(data => {
        const pikachuData = data[0]; //Almacenamos la respuesta de Pikachu y Pug
        const pugData = data[1];
        datos0 = data[0]; //Metemos los datos en las variables
        datos1 = data[1];
        console.log(`Pikachu ha terminado en ${datos0.sprites.front_default}`) //Imprimimos por consola los resultados
        console.log(`Pug ha terminado en ${datos1.message}`)
        console.time("***time2***"); //Detenmos el temporizador

        return {pikachuData, pugData}
    });
}

printPugvsPicachu()


//Ejercicio 7

async function getRandomCharacter() {
    try {
        const listaPersonajes = 826;
        let personajeAleatorio = Math.floor(Math.random() * listaPersonajes) + 1;
        let response = await fetch(`https://rickandmortyapi.com/api/character/${personajeAleatorio}`)
        let data = response.json();
        return data
    } catch (error){
        console.log(`ERROR: ${error.stack}`)
    }
}

//Ejercicio 8

