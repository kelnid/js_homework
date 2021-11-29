const number = prompt( 'Введите число для проверки' );

function isEven(number) {
    return number !== '' && isFinite(+number);
}

alert(isEven(number));