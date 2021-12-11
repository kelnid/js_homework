const products =
    [{id: 1, name: 'Tequila', category: 'drink', image: 'images/cofee.png', price: '10.99'},
        {id: 2, name: 'Beer', category: 'drink', image: 'images/cofee.png', price: '5.99'},
        {id: 3, name: 'Burger', category: 'food', image: 'images/cofee.png', price: '7.99'},
        {id: 4, name: 'Shawarma', category: 'food', image: 'images/cofee.png', price: '10.99'},
        {id: 5, name: 'Wine', category: 'drink', image: 'images/cofee.png', price: '8.99'},
        {id: 6, name: 'Gelatto', category: 'dessert', image: 'images/cofee.png', price: '11.99'}];

const addProduct = document.querySelector('.shop-items');

const favouriteItemsFromLocalStorage = JSON.parse(localStorage.getItem('favouriteItems'));

function getHuet() {
        for (let i = 0; i < products.length; i++) {
        addProduct.insertAdjacentHTML(
            'beforeend',
            `<div class="shop-item" data-sort="${products[i].price}">
            <span class="shop-item-title">${products[i].name}</span>
            <img class="shop-item-image" src=${products[i].image}>
            <span class="shop-item-price">${products[i].price}$</span>
            <div class="shop-item-details">
                <button class="btn btn-primary shop-item-button" type="button" onclick="getShow()">Добавить в корзину</button>
                <button class="favourite-item-button btn btn-primary" onclick = 'getShowDiv()' type="button" product-id="${products[i].id}" onclick="getShowSecond(this)">Добавить в избранное</button>
            </div>
        </div>`
        )}
}

getHuet();

const removeCartItemButtons = document.getElementsByClassName('btn-danger');

for (let i = 0; i < removeCartItemButtons.length; i++) {

    let button = removeCartItemButtons[i];

    button.addEventListener('click', removeCartItem);

}
// удаление товара из корзины и обновление итоговой стоимости
function removeCartItem(event) {

    let buttonClicked = event.target;

    buttonClicked.parentElement.parentElement.remove();

    updateCartTotal();

}

const removeFavouriteItemButtons = document.getElementsByClassName('btn-danger2');

for (let i = 0; i < removeFavouriteItemButtons.length; i++) {

    let button = removeFavouriteItemButtons[i];

    button.addEventListener('click', removeFavouriteItem);

}

function removeFavouriteItem(event) {

    let buttonClicked = event.target;

    buttonClicked.parentElement.parentElement.remove();

    localStorage.removeItem('favouriteItems');
}

const quantityInputs = document.getElementsByClassName('cart-quantity-input');

for (let i = 0; i < quantityInputs.length; i++) {

    let input = quantityInputs[i];

    input.addEventListener('change', quantityChanged);
}
// функция для инпута,инпут не может быть меньше 1 или 0
function quantityChanged(event) {

    let input = event.target;

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }

    updateCartTotal();

}

const addToCartButtons = document.getElementsByClassName('shop-item-button');

for (let i = 0; i < addToCartButtons.length; i++) {

    let button = addToCartButtons[i];

    button.addEventListener('click', addToCartClicked);

}

function addToCartClicked(event) {

    let button = event.target;

    let shopItem = button.parentElement.parentElement;

    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;

    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;

    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;

    addItemToCart(title, price, imageSrc);

    updateCartTotal();

}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

// нажатаие на оформить товар в корзине,происходит очищение корзины и алерт
function purchaseClicked() {

    alert('Спасибо за покупку!');

    let cartItems = document.getElementsByClassName('cart-items')[0];

    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }

    updateCartTotal();
}

function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0];

    const cartRows = cartItemContainer.getElementsByClassName('cart-row');

    let total = 0;

    for (let i = 0; i < cartRows.length; i++) {

        let cartRow = cartRows[i];

        const priceElement = cartRow.getElementsByClassName('cart-price')[0];

        const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];

        let price = parseFloat(priceElement.innerText.replace('$', ''));

        let quantity = quantityElement.value;

        total = total + (price * quantity);

    }

    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;

}

const addToFavouriteButtons = document.getElementsByClassName('favourite-item-button');

for (let i = 0; i < addToFavouriteButtons.length; i++) {

    let button = addToFavouriteButtons[i];

    button.addEventListener('click', addToFavouriteClicked);

}

function addToFavouriteClicked(event) {

    let button = event.target;

    let shopItem = button.parentElement.parentElement;

    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;

    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;

    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;

    addItemToFavourite(title, price, imageSrc, shopItem);

}

function addItemToCart(title, price, imageSrc) {

    let cartRow = document.createElement('div');

    cartRow.classList.add('cart-row');

    let cartItems = document.getElementsByClassName('cart-items')[0];

    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');

    for (let i = 0; i < cartItemNames.length; i++) {

        if (cartItemNames[i].innerText === title) {

            blockDiv.style.display = 'none';

            alert('Этот товар уже добавлен в корзину');

            return;

        }
    }

    let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Удалить из корзины</button>
        </div>`

    cartRow.innerHTML = cartRowContents;

    cartItems.append(cartRow);

    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);

    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);

}

function addItemToFavourite(title, price, imageSrc) {

    const favouriteRow = document.createElement('div');

    favouriteRow.classList.add('favourite-row');

    let favouriteItems = document.getElementsByClassName('favourite-items')[0];

    let favouriteItemNames = favouriteItems.getElementsByClassName('favourite-item-title');

    for (let i = 0; i < favouriteItemNames.length; i++) {

        if (favouriteItemNames[i].innerText === title) {

            blockDiv.style.display = 'none';

            alert('Этот товар уже добавлен в избранное');

            return;
        }
    }

    let favouriteRowContents = `
    <div class="favourite-item favourite-column">
        <img class="favourite-item-image" src="${imageSrc}" width="100" height="100">
        <span class="favourite-item-title">${title}</span>
    </div>
    <span class="favourite-price favourite-column">${price}</span>
    <div class="favourite-quantity favourite-column">
        <button class="btn btn-primary shop-item-button" type="button">Добавить в корзину</button>
        <button class="btn btn-danger2" type="button">Удалить из избранного</button>
    </div>`

    favouriteRow.innerHTML = favouriteRowContents;

    favouriteItems.append(favouriteRow);

    favouriteRow.getElementsByClassName('btn-danger2')[0].addEventListener('click', removeFavouriteItem);

}
// поиска
document.querySelector('#elastic').oninput = function () {

    const val = this.value.trim();

    const elasticItems = document.querySelectorAll('.shop-item');

    if (val !== '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) === -1) {
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');
            }
        });
    } else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }

}

const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const blockDiv = document.getElementById('welcome');

const blockDivSecond = document.getElementById('welcome2');

function getShow() {
    blockDiv.style.display = 'block';
    setTimeout(function () {
        blockDiv.style.display = 'none';
    }, 2500);
}
//добавление товаров в localstorage
function getShowSecond(item) {

    const product = products.filter(product => {
        return product.id === +item.getAttribute('product-id');
    })[0];

    let favouriteItems = [];

    let favouriteItemsFromLocalStorage = localStorage.getItem('favouriteItems');

    if (favouriteItemsFromLocalStorage) {
        favouriteItems = JSON.parse(favouriteItemsFromLocalStorage);
    }

    favouriteItems.push(product);

    localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
}

function getShowDiv () {
    blockDivSecond.style.display = 'block';

    setTimeout(function () {
        blockDivSecond.style.display = 'none';
    }, 2500);
}

if (favouriteItemsFromLocalStorage) {
    for (let item of favouriteItemsFromLocalStorage) {
        addItemToFavourite(item.name, item.price, item.image, item.id);
    }
}

const modalSecond = document.getElementById('myModal2');

const goToModal = document.getElementById('btn-go-to-cart');

const btnSecond = document.getElementById('myBtn2');

const spanSecond = document.getElementsByClassName("close2")[0];

btnSecond.onclick = function () {
    modalSecond.style.display = "block";
}

goToModal.onclick = function () {
    modalSecond.style.display = "none";
    modal.style.display = "block";
}

spanSecond.onclick = function () {
    modalSecond.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modalSecond) {
        modalSecond.style.display = "none";
    }
}

//сортировка по возрастанию
function getHuet2() {
    const node = document.querySelector('.shop-items');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    products.sort(function(a, b){return a.price - b.price});

    for (let i = 0; i < products.length; i++) {
        addProduct.insertAdjacentHTML(
            'beforeend',
            `<div class="shop-item" data-sort="${products[i].price}">
            <span class="shop-item-title">${products[i].name}</span>
            <img class="shop-item-image" src=${products[i].image}>
            <span class="shop-item-price">${products[i].price}$</span>
            <div class="shop-item-details">
                <button class="btn btn-primary shop-item-button" type="button" onclick="getShow()">Добавить в корзину</button>
                <button class="favourite-item-button btn btn-primary" type="button" product-id="${products[i].id}" onclick="getShowSecond(this)">Добавить в избранное</button>
            </div>
        </div>`
        )}
}

document.getElementById('sort-asc').onclick = getHuet2;

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

//сортировка по убыванию
function mySortSecond() {

    const shopItems = document.querySelector('.shop-items');

    for (let i = 0; i < shopItems.children.length; i++) {
        for (let j = i; j < shopItems.children.length; j++) {
            if (+shopItems.children[i].getAttribute('data-sort') < +shopItems.children[j].getAttribute('data-sort')) {
                replaceNode = shopItems.replaceChild(shopItems.children[j], shopItems.children[i]);
                insertAfter(replaceNode, shopItems.children[i]);
            }
        }
    }

}

// const generateCardProductFromFavourite = (img, title, price) => {
//     return `
//         <div class="cart-item cart-column">
//             <img class="cart-item-image" src="${img}" width="100" height="100">
//             <span class="cart-item-title">${title}</span>
//         </div>
//         <span class="cart-price cart-column">${price}</span>
//         <div class="cart-quantity cart-column">
//             <input class="cart-quantity-input" type="number" value="1">
//             <button class="btn btn-danger" type="button">Удалить из корзины</button>
//         </div>
//     `;
// }

