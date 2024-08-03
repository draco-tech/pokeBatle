// function fetchData() {
//     fetch(" https://pokeapi.co/api/v2/pokemon/cubone")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }


async function fetchData() {
    try {
        let response = fetch(" https://pokeapi.co/api/v2/pokemon/cubone")
        let data = (await response).json()
        console.log(data)
    } catch(error){
        console.log(error)
    }
}

const Urls = [
     "https://rickandmortyapi.com/api/character",
     "https://rickandmortyapi.com/api/location",
     "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() { 
    try {
      for await (let Url of Urls) {
        let response = await fetch (Url)
        let data = await response.json
        ();
        console.log(data)
      }
    } catch(error) {
        console.log(error)
    }
}

fetchNewData()