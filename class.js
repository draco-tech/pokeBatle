class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`hola yo soy ${this.nombre} tengo ${this.edad}`)
    }
}



const ash = new Persona("ash", 17)
const gary = new Persona("gary", 19)

let garyObj ={
    name:'Garyo',
    edad:21,
    saludar:function(){
        console.log(`hola yo soy ${this.nombre} tengo ${this.edad}`)
    }
}

gary.saludar()

garyObj.saludar()

