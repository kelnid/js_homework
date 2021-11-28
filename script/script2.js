const firstNumber = +prompt("первое число", '');
const secondNumber = +prompt("второе число", '');
const thirdNumber = +prompt("третье число", '');

if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
        alert( 'Одно из значений не является числом,используйте числа' );
} else {
    alert( getNumbers(firstNumber, secondNumber, thirdNumber) );
}

function getNumbers( num1, num2, num3 ) {
    if ((isFinite(firstNumber) && isFinite(secondNumber) && isFinite(thirdNumber)) && (firstNumber && secondNumber && thirdNumber)) {
        return firstNumber > secondNumber ? (firstNumber > thirdNumber ? thirdNumber : firstNumber) : (secondNumber > thirdNumber ? thirdNumber : secondNumber);
    }
}