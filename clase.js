const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = prompt("adivina el numero del 1 al 10")
console.log(typeof Number(numeroJugador) )
console.log(typeof numeroSecreto )
console.log(`este es el numero con el que juegas ${numeroSecreto}`)

if(Number(numeroJugador) == numeroSecreto){
    console.log("🎉🎉yay adivinaste🎉🎉")  
} else if (Number(numeroJugador) < numeroSecreto){
    console.log("🤣nop🤣") 
} else {
    console.log("🤣🤣no adivinaste🤣🤣") 
}