let pokemonAmigo = document.getElementById("pokemon-amigo")
let pokemonEnemy = document.getElementById("pokemon-enemy")
let pokemonbag = document.getElementById("PokemonBag")


function pintarPokemon (){         
    pokemonEnemy.innerHTML = template(moltres, true)
    pokemonAmigo.innerHTML = template(cubone1, false)

} 




class Pokemon{
    constructor({name , hp , pokenumber}){
        this.name = name
        this.hp = hp
        this.spriteback = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokenumber}.png`
        this.spritefront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokenumber}.png`

    }
    saludar(){
        console.log(`----------- \n hi ${this.name} \n HP:${this.hp} \n type ${this.tipo}\n ----------- \n`)
    }
    makeDamage(enemy){
        enemy.reciveDamage(5)
    }
    reciveDamage(damage){
        this.hp -= damage
    }
    
}
let moltres = "";
let pokemon = [];


(async ()=>{
    const idRamdon = Math.floor(Math.random() * 150 )
    moltres =  await callPokemonInfo(idRamdon)

        pintarPokemon()
        pokemon.push( await callPokemonInfo(1))
        pokemon.push( await callPokemonInfo(2))
        pokemon.push( await callPokemonInfo(3))
        console.log(pokemon);
        for (let p = 0; p < pokemon.length; p = p + 1){
            pokemonbag.innerHTML += templatebag(pokemon[p])
        }



   
})()

async function callPokemonInfo(id){
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    const dataJSon = await data.json()
    return new PokemonNormal ({name:dataJSon.name , hp:150 , pokenumber:id})
}

 






// .then((poke) => poke.json())
// .then((pokedata) => console.log(pokedata))




async function callPokemon(){
    
    return data
}


class PokemonNormal extends Pokemon {
    constructor(data){
        super(data)
        this.tipo = "Normal"

    }
    // saludarPKNormal(){
    //     console.log("soy un pokemon que no sigue la corriente")
    // }
    
}
// let picachu = new PokemonElectrico("picachu" , 100 )
const cubone1 = new PokemonNormal ( {pokenumber:141 ,name:"cubone" , hp:140  })




const templatebag =(pokemon) => `
<section>
        <img src="${pokemon.spritefront}" alt="">
        <p>name Poke: ${pokemon.name}</p>
        </section>
` 



const template = (Pokemon, isEnemy)  => {
    Pokemon.idImage = isEnemy ? "imageEnemy" :" imageAlly"
    
    return(`
            <section>
                <div class="poke-info">
                    <p>name: ${Pokemon.name} </p>
                    <p class = "hpBar">hp: ${Pokemon.hp}</p>
                </div>
                <img id=${Pokemon.idImage} class="chowPokemon  pokemonImagesIdle " src= ${isEnemy ? Pokemon.spritefront:Pokemon.spriteback} alt="not">
            </section>`)}






const showAttack= ( )=>{  
    let allyImage = document.getElementById("imageAlly")
    function action(){
        allyImage.classList.add("pokemonImagesIdle")
        allyImage.classList.remove("pokemonImagesAttack")  
        pintarPokemon()
    }

    allyImage.classList.remove("pokemonImagesIdle")
    allyImage.classList.add("pokemonImagesAttack")
    
    setTimeout(action,2000);


  
//     console.log(moltres.hp)
   cubone1.makeDamage(moltres)
//   console.log(moltres.hp)
//   moltres.makeDamage(cubone1)
 
}



