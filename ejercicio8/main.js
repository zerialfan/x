let array = [20,10,1,10,11,1,2,3,10,4,5,6]
array.push(10,11,12,13,14,15)
array.push(10,5,6,7,8,9,10)

let newArray = array.sort((a,b)=> a -b)

let frecuencia = newArray.reduce((contador, elemento) => {
    contador[elemento] = (contador[elemento] || 0)+ 1
    return contador
},{})

let claves = Object.keys(frecuencia)

let maxFrequency =0
let modas = []

claves.forEach(item => {
    if (frecuencia[item]>maxFrequency ) {
        maxFrequency =frecuencia[item];
        modas =[item]
    } else if (frecuencia[item]===maxFrequency) {
        modas.push(item);    
    } 
});
console.log(`Moda: ${modas.join(', ')}, Frecuencia: ${maxFrequency}`)