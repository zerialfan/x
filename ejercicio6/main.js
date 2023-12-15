// Aqui voy a crear un programa que identifique si el numero dentro de un array es par o no

let array =[]
array.push(2,4,6,8,10)

// para el primer ejemplo voy a usar un ciclo for este comprueba si todos los numeros son pares o todos impares 

function forPair(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            return 'Hay numeros que son impar'
        }
        else{
            return 'Todos los numeros son pares'
        }
        
    }
}

// Este comprueba cuales son pares y cuales impares a partir de map
const isPair = array.filter(item=> item % 2 == 0)

console.log(isPair);