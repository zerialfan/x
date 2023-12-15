// se inicializa 
let serie= [];
serie.push(1,2,3,4)
serie.push(2,4,5,6,7,8,9,10)
serie.push(10,12,13)
const n = serie.length

function getAverage(serie) {
   
    const suma = serie.reduce((a,b)=> a + b)

    return suma/n
   
}
//esta usa el metodo reduce
const promedio = serie.reduce((a,b)=> (a+b))
//primero se suma todo y luego lo divido entre el numero de elementos
const average = promedio/n;

//aqui voy a usar un ciclo para lograrlo

const calcularPromedio3 = (serie)=>{
    let initialValue = 0
    for(value of serie){
        initialValue += value;
    }
    const resultado = initialValue / n
    return resultado
}

console.log(getAverage(serie),average, calcularPromedio3(serie));
