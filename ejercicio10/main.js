let array = []

document.getElementById('btn').addEventListener('click', (event)=>{
    event.preventDefault();
    let getNumber = parseInt(document.getElementById('addNumber').value)
    if (!isNaN(getNumber)) {
        array.push(getNumber)
        arrayDisplay();
        getAverage();
        getModa();
    }
})
// esta funcion devuelve el promedio de los numeros ingresados
function getAverage() {
// primero se obtiene la longuitud total del array
    let n = array.length
// Usando reduce se suman los valores dentro del array
    let sum = array.reduce((a,b)=>a+b)
// y por ultimo la sumatoria dividida entre el numero de elementos nos da el promedio
    return sum / n
}
// Esta funcion muestra el array en pantalla
function arrayDisplay() {
// usamos metodo Sort para ordenar los numeros de manera ascendente
    array.sort((a,b)=> a-b)
// Luego traemos al div donde se van a insertar

    let display = document.getElementById('arrayDisplay')
    display.innerHTML=''

// Costruimos el div utilizando un forEach para el recorrido 
    array.forEach(num =>{
// CreateElement crea un nuevo elemento HTML mientras que clasList permite nombrarle una clase
        let numDiv = document.createElement('div')
        numDiv.classList.add('number-div')
        numDiv.innerText = num

        display.appendChild(numDiv)
    })
}

function getModa() {
    let frecuency = array.reduce((count,item)=> {
        count[item] =(count[item] || 0) + 1;
        return count; 
    },{})

    let maxFrecuency = 0;
    let moda =[]

    for(let num in frecuency){
        if (frecuency[num]>maxFrecuency) {
            maxFrecuency = frecuency[num]
            moda = [num]
        }else if (frecuency[num]=== maxFrecuency) {
            moda.push(num)
        }
    }
    newDisplay(moda,maxFrecuency);
}
function newDisplay(moda,maxFrecuency) {
    let refreshAverage = document.getElementById('refreshAverage')
    let prom = getAverage();
    refreshAverage.innerText =`El promedio es: ${prom} Moda: ${moda.join(', ')} Frecuencia: ${maxFrecuency}`
}