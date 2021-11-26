const number = prompt( 'Введите число' );

if (number) {

    if (!isNaN(+number)) {
        alert( number % 2 === 0 ? 'Число четное' : 'Число нечетное' );
    } else {
        alert( 'Значение должно быть числом' );
    }

} else  {
    alert( 'Не оставляйте пустую строку' );
}