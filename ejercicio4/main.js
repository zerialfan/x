const pAlert = document.getElementById('alert')
document.getElementById('btn').addEventListener('click',enter)
const dataBase =[]

dataBase.push({name:'alexis',id:'231995', password:'aleDAN23'})
dataBase.push({name:'daniel',id:'021995', password:'aleDAN02'})
dataBase.push({name:'sanchez',id:'671995', password:'aleDAN67'})
dataBase.push({name:'arias',id:'401995', password:'aleDAN40'})

function fullData(element,nombre,idItem,password) {
    return element.name.toLowerCase()=== nombre && element.id ===idItem && element.password === password;
}
function enter() {
    const nombre = document.getElementById('nombre').value.toLowerCase()
    const idItem = document.getElementById('idItem').value
    const password = document.getElementById('password').value

    const dataFull = dataBase.find(element=> fullData(element, nombre, idItem, password))

    if (dataFull){
        pAlert.innerText = `su nombre es: ${dataFull.name} su id: ${dataFull.id} su contraseña: ${dataFull.password}`
    }else{
        pAlert.innerText ='esta mal'

    }

    // const dataName = dataBase.find(item => item.name.toLowerCase()=== name)
    // if (dataName) {
    //     pAlert.innerText = `Su nombre es ${name.toUpperCase()}`
    // }else{
    //     pAlert.innerText = 'Ingrese un nombre correcto'
    // }
    // const dataId = dataBase.find(id=>id.id === idItem)
    // if (dataId) {
    //     pAlert.innerText = `su id es: ${idItem}`
    // }else{
    //     pAlert.innerText = 'Ingrese un nombre correcto'
    // }
    // const dataPassword = dataBase.find(termo => termo.password=== password)
    // if (dataPassword) {
    //     pAlert.innerText = `su id es: ${dataPassword.password}`
    // }
}