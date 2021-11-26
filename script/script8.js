const firstNum = +prompt( 'Введите первое число' );
const symbol = prompt( 'Введите действие /, *, -, +' );
const secondNum = +prompt( 'Введите второе число' );
const numIsCorrect = (firstNum !== '' && !isNaN(firstNum)) && (secondNum !== '' && !isNaN(firstNum));

if (numIsCorrect) {
    if (symbol === '+') {
        alert(firstNum + secondNum);
    } else if (symbol === '-') {
        alert(firstNum - secondNum);
    } else if (symbol === '*') {
        alert(firstNum * secondNum);
    } else if (symbol === '/') {
        if (secondNum === 0) {
            alert( 'На ноль делить нельзя' );
        } else {
            alert(firstNum / secondNum);
        }
    } else {
        alert( 'Неправильный знак' );
    }
} else {
    alert( 'Не сработает' );
}