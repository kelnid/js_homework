const money = +prompt( 'Введите сумму,которые хотите поставить' );
const firstNumber = +prompt( 'Первое число' );
const secondNumber = +prompt( 'Второе число' );

if (money && firstNumber && numberTwo ) {
    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && Number.isInteger(money)) {

        const prize = (secondNumber - firstNumber) * 0.1 + money;

        if (firstNumber && secondNumber) {
            alert( `Вы можете выиграть ${prize}` );
        }

        const putNumber = +prompt( 'Введите число, чтобы сыграть' );

        if (putNumber >= firstNumber && putNumber <= secondNumber) {
            const random = rand(firstNumber, secondNumber);

            if (putNumber !== random) {
                alert( `Kомпьютер выбрал ${random}, вы проиграли ${prize}` );
            } else {
                alert( `Поздравляю, вы выиграли ${prize}!` );
            }
        }
    }

} else {
    alert( 'Так не пойдёт!' );
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}