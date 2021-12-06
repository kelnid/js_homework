1
button1.onclick = function() {

    alert('Hello, Palmo!');

};

2
function myFunction() {

    document.getElementById("part1").value="WORLD";

}

3
function getMeInput () {

    let input = document.getElementById('val').value;

    console.log(input);

}

4
function swapValues() {

    const firstText = document.getElementById("input1").value;

    document.getElementById("input1").value = document.getElementById("input2").value;
    document.getElementById("input2").value = firstText;

}

5
function changeColor () {

    const color1 = document.getElementById("p1");

    if (color1.style.color === 'red') {
        color1.style.color = '';
    } else {
        color1.style.color = 'red';
    }

}

6
function getDisable () {

    const disable1 = document.getElementById('value2')
    if (disable1.disabled === true) {
        disable1.disabled = false;
    } else {
        disable1.disabled = true;
    }
}

7

const colorRed = document.getElementsByClassName('first_block');
colorRed[0].style.backgroundColor = "red";

const colorYellow = document.getElementsByClassName('second_block');
colorYellow[0].style.backgroundColor = "yellow";

function getSwapColors() {
    if (colorRed[0].style.backgroundColor === "red") {
        colorRed[0].style.backgroundColor = "yellow";
        colorYellow[0].style.backgroundColor = "red";
    } else {
        colorRed[0].style.backgroundColor = "red";
        colorYellow[0].style.backgroundColor = "yellow";
    }
}

8

function addList() {

    let parent = document.getElementsByTagName("ol")[0];

    let li = document.createElement("li");

    parent.appendChild(li);
}


9
function getList() {
    let areaData = document.getElementById('text');
    let listData = areaData.value.split(',');

    let listContainer = document.getElementById('lists');
    let listElem = document.createElement('ol');
    listContainer.appendChild(listElem);

    let numberItems = listData.length;
    let listItem;
    for (let i = 0; i < numberItems; ++i) {
        listItem = document.createElement("li");
        listItem.innerHTML = listData[i];
        listElem.appendChild(listItem);
    }
}

10
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const login = document.getElementById('login');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const formBtn = document.getElementById('butt-form');

const successAlert = document.querySelector('.success-alert');

const errorLogin = document.querySelector('.error-login');
const errorEmail = document.querySelector('.error-email');
const errorAge = document.querySelector('.error-age');
const errorPassword = document.querySelector('.error-password');

let errors = {};

formBtn.onclick = function () {
    errors = {};
    errorLogin.style.display = errorEmail.style.display = errorAge.style.display = errorPassword.style.display = 'none';
    login.style.border = email.style.border = age.style.border = password.style.border = '';

    if (validateForm(login, email, age, password)) {
        successAlert.style.display = 'block';
        successAlert.innerText = 'Успешно!';
        login.value = email.value = age.value = password.value = '';
    } else {
        if (errors.login) {
            errorLogin.style.display = 'block';
            errorLogin.innerText = errors.login;
            login.style.border = '2px solid red';
        }

        if (errors.email) {
            errorEmail.style.display = 'block';
            errorEmail.innerText = errors.email;
            email.style.border = '2px solid red';
        }

        if (errors.age) {
            errorAge.style.display = 'block';
            errorAge.innerText = errors.age;
            age.style.border = '2px solid red';
        }

        if (errors.password) {
            errorPassword.style.display = 'block';
            errorPassword.innerText = errors.password;
            password.style.border = '2px solid red';
        }
    }
}

function validateForm(login, email, age, password) {
    return isCorrectLogin(login) && isCorrectEmail(email) && isCorrectAge(age) && isCorrectPassword(password);
}


function isCorrectLogin(login) {
    if ((login.value.length >= 4 && login.value.length <= 20) && isSymbolsEmpty(login.value)) {
        return true;
    }

    errors.login = 'Логин должен быть не менее 4 и не более 20 символов, и не содержать знаки';

    return false;
}

function isSymbolsEmpty(value) {
    if (
        value.includes('.')
        || value.includes('_')
        || value.includes('/')
        || value.includes('\\')
        || value.includes(',')
        || value.includes('|')
    ) {
        return false
    }

    return true;
}

function isCorrectEmail(email) {
    if (EMAIL_REGEXP.test(email.value)) {
        return true;
    }

    errors.email = 'Некорректный email';

    return false;
}

function isCorrectAge(age) {
    if (age.value > 0) {
        return true;
    }

    errors.age = 'Возраст должен быть числом и не быть отрицательным';

    return false;
}

function isCorrectPassword(password) {
    password = password.value;
    const uppers = /[A-Z]/.test(password); // Есть хотя бы одна буква в верхнем регистре
    const numbers = /\d/.test(password); // Есть хотя бы одна цифра
    const onlyLatin = /^[A-Za-z\d]{6,}$/.test(password); //Минимум бы 6 цифр

    if (uppers && numbers && onlyLatin) {
        return true;
    }

    errors.password = 'Пароль должен содержать хотя бы одну заглавную букву и одну цифру и быть не менее 6 символов';

    return false;
}
11
function insert(num) {
    document.form.textView.value = document.form.textView.value + num;
}

document.querySelector('.clean').onclick = function () {
    document.form.textView.value = '';
}

document.querySelector('.back').onclick = function () {
    const exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.length - 1);
}

document.querySelector('.equal').onclick = function () {
    const exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = eval(exp);
    }
}
12
const documentElem = document,
    itemBox = documentElem.querySelectorAll('.item_box'),
    cartCont = documentElem.getElementById('cart_content');

function addEvent(elem, type, handler){
    elem.attachEvent = function (s, param2) {

    }
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);

    } else {
        elem.attachEvent('on'+type, function(){ handler.call( elem );
        });
    }

    return false;

}

function getCartData(){

    return JSON.parse(localStorage.getItem('cart'));

}

function setCartData(o){

    localStorage.setItem('cart', JSON.stringify(o));

    return false;

}

function addToCart(e){

    this.disabled = true;

    let cartData = getCartData() || {},
        parentBox = this.parentNode,
        itemId = this.getAttribute('data-id'),
        itemTitle = parentBox.querySelector('.item_title').innerHTML,
        itemPrice = parentBox.querySelector('.item_price').innerHTML;

    if(cartData.hasOwnProperty(itemId)){
        cartData[itemId][2] += 1;
    } else {
        cartData[itemId] = [itemTitle, itemPrice, 1];
    }

    if(!setCartData(cartData)){

        this.disabled = false;

    }

    return false;

}

for(let i = 0; i < itemBox.length; i++){

    addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);

}

function openCart(e){

    let cartData = getCartData(),
        totalItems = '';

    console.log(JSON.stringify(cartData));

    if(cartData !== null){
        totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
        for(let items in cartData){
            totalItems += '<tr>';
            for(let i = 0; i < cartData[items].length; i++){
                totalItems += '<td>' + cartData[items][i] + '</td>';
            }
            totalItems += '</tr>';
        }
        totalItems += '<table>';
        cartCont.innerHTML = totalItems;
    } else {

        cartCont.innerHTML = 'В корзине пусто!';
    }

    return false;
}
addEvent(documentElem.getElementById('clear_cart'), 'click', function(e){
    localStorage.removeItem('cart');
    cartCont.innerHTML = 'Корзина очищена.';
});
const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

addEvent(documentElem.getElementById('myBtn'), 'click', openCart);

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {

    modal.style.display = "block";

}

span.onclick = function() {

    modal.style.display = "none";

}

window.onclick = function(event) {

    if (event.target == modal) {
        modal.style.display = "none";
    }

}