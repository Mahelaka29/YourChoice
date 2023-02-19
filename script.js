const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
// Cart Data Store

let removeCartItemBtn = document.getElementsByClassName('danger-btn')
console.log(removeCartItemBtn)
for(let i = 0; i < removeCartItemBtn.length; i++){
    let button = removeCartItemBtn[i]
    button.addEventListener('click', function(event){
        let buttonClicked = event.target
        buttonClicked.closest("tr").remove()
        updateCartTotal()
    })
}

function updateCartTotal(){
var cartItemContainer = document.getElementsByTagName('tbody')[0]
var cartRows = cartItemContainer.document.getElementsByTagName('tbody')
for(let i = 0; i < cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    console.log(priceElement, quantityElement)
}
}
