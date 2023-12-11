const pAlert = document.getElementById('result')
document.getElementById('btn').addEventListener('click',execution)

const arrayCoupon = [];
arrayCoupon.push({name:'dx10', discount: 10});
arrayCoupon.push({name:'dx15', discount: 15});
arrayCoupon.push({name:'dx20', discount: 20});
arrayCoupon.push({name:'dx25', discount: 25});

function execution() {
    const forPrice = document.getElementById('price').value;
    const cupon = document.getElementById('cupon').value;
    let discount;
    const price = parseInt(forPrice)
    
    if (!isNaN(price)) {
        if (cupon) {
            const checkInArray= arrayCoupon.find (coupon => coupon.name === cupon)
        
            if (checkInArray) {
                discount = checkInArray.discount
                const newPrice = price * (100- discount)/100;
                pAlert.innerText = `su nuevo precio es: ${newPrice} su descuento: ${discount}%`
            } else {
                pAlert.innerText = 'Ponga bien un cupon bastardo'
            }
        }else{
            pAlert.innerText = 'cupon invalido'
        }
    } else {
        pAlert.innerText = 'Esto no es un juego'
    }
}

