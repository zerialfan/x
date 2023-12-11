document.getElementById('btn').addEventListener('click',btnListener)

let newArray =[];
const discountObj ={
    'descuento1':10,
    'descuento2':15,
    'descuento3':20,
    'descuento4':25,
}
let discount;
// Se va a usar el metodo finder y el metodo filter

function btnListener() {
    const pAlert = document.getElementById('parrafo');
    const priceValue = document.getElementById('inputPrice').value
    const cupon = document.getElementById('inputCupon').value
    const price = parseInt(priceValue)

    if (priceValue==='' || cupon ==='') {
        pAlert.innerText = 'Llena el formulario'
        return;
    }

    if (!isNaN(price)) {
        if (discountObj[cupon]) {
            discount = discountObj[cupon]
            const newPrice = price * (100-discount)/100
            pAlert.innerText = `Cupon aplicado. Su total ${newPrice} su descuento es: ${discount}%`

        }else if (!isNaN(cupon)){
            pAlert.innerText = 'Generalmente los cupones tienen letras y numeros'
        } 
        else {
            pAlert.innerText = 'Este es fayuca padrino'
            return;
        }
    }else if (isNaN(price) && !isNaN(cupon)){
        pAlert.innerText ='por eso el champú trae instructivo'
    } 
    else{
        pAlert.innerText = 'Eso no es un número Papito'
    }

}
