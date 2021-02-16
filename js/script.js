let cart = {
    'shshsh23' : {
        'name': 'item1',
        'quantity': 2,
    },
    'pfppgh24' : {
        'name': 'item2',
        'quantity': 3,
    },
};

let headers = ['Item', 'Quantity'];

document.onclick = event => {  
    if (event.target.classList.contains('plus')) {    
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {    
        minusFunction(event.target.dataset.id);
    }
}

//увеличение количества товара
const plusFunction = id => {
    cart[id]['quantity']++;
    renderCart();
}

//уменьшение количества товара
const minusFunction = id => {
    if (cart[id]['quantity'] == 0) {
       deleteFunction(id);
       return true;
    }
    cart[id]['quantity']--;
    renderCart();
}

//удаление товара
const deleteFunction = id => {
    delete cart[id]['quantity'];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}

renderCart();
