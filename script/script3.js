const number = +prompt( 'Введите число' );

const notNaN = !isNaN(number);

if (number) {
    if (number % 2 === 0) {
        alert ( 'Чётное' );
    } else {
        alert ( 'Нечётное' );
    }
}