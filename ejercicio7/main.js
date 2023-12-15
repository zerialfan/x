let array =[]
array.push(40,50,60)
array.push(10,20,30)

//Primero teneremos que ordenar la lista 
let newArray = array.sort((acc,next)=> acc-next)

// El ejercicio requiere que obtenga la mediana de las listas
// ojo cuando 
function isArrayPair(newArray) {
    const indexList = newArray.length/2

    if (newArray.length % 2 == 0) { 
        let mid = newArray.length/2 
        let mediana = ((newArray[mid-1] + newArray[mid])/2)
        return mediana
    }else {
        return  newArray[Math.floor(indexList)]
    }
}

console.log(isArrayPair(newArray), newArray);