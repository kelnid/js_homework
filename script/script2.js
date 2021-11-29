const firstNumber = prompt( 'Введите первое число' );
const secondNumber = prompt( 'Введите второе число' );
const thirdNumber = prompt( 'Введите третье  число' );

function getAverage () {
    if (isCorrectValue(firstNumber) && isCorrectValue(secondNumber) && isCorrectValue(thirdNumber)) {
        return  +firstNumber > +secondNumber ? (+firstNumber > +thirdNumber ? +thirdNumber : +firstNumber) : (+secondNumber > +thirdNumber ? +thirdNumber : +secondNumber);
    }  else {
        return 'Не правильно!';
    }
}
function isCorrectValue(value) {
    return value !== '' && isFinite(+value);
}

alert(getAverage(firstNum, secondNum, thirdNum));