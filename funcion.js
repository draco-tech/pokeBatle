// function suma(a, b) {
    // return a + b
// }
// suma(3, 5)

// function:palabra clave
// Nombre:suma
// parametro/s:(a, b)
// cuerpo:return a + b
// llamado:suma(3, 5)
// Argumento:(3, 5)

/*
function saludar(parametro1, parametro2){
    if (parametro2 >= 12) {
        parametro2 += " Pm"
    } else {
        parametro2 += " Am"
    }
    console.log(`hola ${parametro1} alas ${parametro2}`)

}
saludar("aaron", 8 ) 
saludar("alan", 15 )
saludar("aaron", 9 ) 
saludar("aaron", 10 ) 
saludar("aaron", 1 ) 
saludar("aaron", 3  ) 
saludar("aaron", 4  ) 
saludar("aaron", 5  ) 
saludar("aaron", 6  )
saludar("aaron", 7  ) 
// function calculateDiscountedPrice(price, discountPercentage){
//     const discount = (price * discountPercentage) / 100
//     const priceWithdiscount =  price - discount

//     return priceWithdiscount
// }

// const originalPrice = 1000
// const discountPercentage = 15
// const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

// console.log('Original Price: $' + originalPrice)
// console.log('Discount: ' + discountPercentage + '%')
// console.log('Price with dicount: $' + finalPrice)



*/



function startGame(){
    let hp = 100
    function takeDamage(){
        hp = hp - 5
        console.log(hp) 
    }
    function showLive(){
        console.log(hp)
    }
    function healLive(){
        hp = hp + 5
        console.log(hp)
    }
    let functions = {
        takeDamage,
        showLive,
        healLive,
        hp
    }
    return functions
}

let game1 = startGame()
console.log(game1)

const leerEntrada = (prompt) => {
    return new Promise((resolve) => {
        process.stdout.write(prompt);
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
};

(async () => {
    try {
        while (game1.hp > 50) {
            
       
            const comand = await leerEntrada('do something \n 1: show live \n 2:take damage \n 3:heal life ');

            switch (comand) {
                case "1":
                    game1.showLive()
                    break;
                case "2":
                    game1.takeDamage()
                    break;
                case "3":
                    game1.healLive()
                    break;
            
                default:
                    break;
            }
        }
        
    } catch (error) {
        console.error('Error:', error);
        process.stdin.pause();
    }
})();


