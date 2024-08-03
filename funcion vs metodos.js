//  Capacidades que tienen las funciones igual que otros

// 1. Pasar funciones como argumentos -> callback

// function a () {}
// function b (a) {}
// b(a) 

// // return funciones

// function a () {
//     function b () {}
//     return b
// }

// // 

function toUpperCase(name){
    return name.toUpperCase()
}
function tolowCase(name){
    return name.tolowCase()
}

function masSaludar(func){
    let newName = func("aaron y ALAan")
    console.log('Mas funcion ' + newName)
}



masSaludar(toUpperCase)
masSaludar(tolowCase)