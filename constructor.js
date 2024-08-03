// const persona = {
//     nombre: "Diego",
//     apellido: "escamilla"
// } 

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const personita = new Persona("izuku", "midoriya", 24)

console.log(personita);


Persona.prototype.quirk = "one-for-all"

personita.nacionalidad = "americano"

Persona.prototype.saludar = function(){
    console.log(`hi my name is ${this.nombre}  ${this.apellido} and i am ${this.edad} year's old `)
};

personita.saludar()