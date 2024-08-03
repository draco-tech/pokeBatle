class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirRujido() {
        console.log("el animal a rujido")
    }
}

class Jaguar extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza;
    }
    emitirRujido() {
        console.log("el jaguar ha rujido agresivamente")
    }
    correr(){
     console.log(`${this.nombre} corre agresivamente para atrapar a su presa`)
    }
}


const jaguarsito = new Jaguar("jaggy", "felino", "jaguar")

console.log(jaguarsito);
jaguarsito.correr();
jaguarsito.emitirRujido();

jaguarsito.nuevoMetodo = function(){
    console.log("Este es un metodo");
};
Jaguar.Prototype.segundoMetodo = function(){
    console.log("Este es otro metodo");
};