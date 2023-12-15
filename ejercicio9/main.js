let array = []

document.getElementById('btn').addEventListener('click',(event)=>{
    event.preventDefault();
    let getNumber = parseInt(document.getElementById('number').value)
    if (!isNaN(getNumber)) {
    array.push(getNumber);
    acualizarArray();
    calcularModa();
    average();
    }
})

function acualizarArray() {
    array.sort((a,b)=> a- b)
    let display = 
document.getElementById('arrayDisplay')
display.innerHTML =''

array.forEach(num => {
    let numDiv = document.createElement('div');
    numDiv.classList.add('number-div');
    numDiv.innerText =num;
    display.appendChild(numDiv);
})
}
function calcularModa() {
    let frequency = array.reduce((count, item) => {
        count[item] = (count[item] || 0) + 1;
        return count;
    }, {});

    let maxFrecuency = 0;
    let modaZ = [];

    for (let num in frequency) {
        if (frequency[num] > maxFrecuency) {
            maxFrecuency = frequency[num];
            modaZ = [num];  
        } else if (frequency[num] === maxFrecuency) {
            modaZ.push(num);
    }

    actualizarModa(modaZ,maxFrecuency);
}}
function average() {
    let n = array.length
    let sum = array.reduce((a,b)=>a+b)
    return sum/n
}
function actualizarModa(modaZ, maxFrecuency) {
    let modaDisplay = document.getElementById('actualizarModa')
    let prom = average();
    modaDisplay.innerHTML = `Promedio: ${prom} Moda: ${modaZ.join(', ')}, Frequencia: ${maxFrecuency}`
}
