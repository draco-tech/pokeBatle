class Pokemon{
    constructor({name , hp , pokenumber}){
        this.name = name
        this.hp = hp
        this.spriteback = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokenumber}.png`
        this.spritefront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokenumber}.png`
        // this.idImage = ""
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
const moltres = new PokemonNormal ({name:"moltres" , hp:150 , pokenumber:25})
/*
class PokemonElectrico extends Pokemon {
    constructor(name , hp ){
        super(name , hp)
        this.tipo = "electrico"

    }
    saludarPKElectrio(){
        console.log("soy un pokemon que no sigue la corriente")
    }
    
}

class PokemonAgua extends Pokemon {
    constructor(name , hp ){
        super(name , hp)
        this.tipo = "agua"

    }

    saludarPKAgua(){
        console.log(`yo si sigo la corriente`)
}
    
}
    


class PokemonFuego {
    constructor(name , hp ){
        this.name = name
        this.hp = hp
        this.tipo = "fuego"

    }
    saludarPKfuego(){
        console.log(`bolita de fuego`)
    }
    
}

// let picachu = new PokemonElectrico("picachu" , 100 )
// let charmande = new PokemonFuego("charmander", 100 ,"fuego")
// let Zapdos = new PokemonElectrico("Zaptdos" , 100 , "electrico")
let electron = new PokemonElectrico("electron" , 100 , "electrico")
let squirtle = new PokemonAgua("squirtler", 100 )

squirtle.saludar()
*/

let pokemonAmigo = document.getElementById("pokemon-amigo")
let pokemonEnemy = document.getElementById("pokemon-enemy")





const template = (Pokemon, isEnemy)  => {
    Pokemon.idImage = isEnemy ? "imageEnemy" :" imageAlly"
    
    return(`
            <section>
                <div class="poke-info">
                    <p>name: ${Pokemon.name}</p>
                    <p class = "hpBar">hp: ${Pokemon.hp}</p>
                </div>
                <img id=${Pokemon.idImage} class="chowPokemon  pokemonImagesIdle " src= ${isEnemy ? Pokemon.spritefront:Pokemon.spriteback} alt="not">
            </section>`)}



function pintarPokemon (){         
            pokemonEnemy.innerHTML = template(moltres, true)
            pokemonAmigo.innerHTML = template(cubone1, false)

} 


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

pintarPokemon()

