const first = +prompt('Введите первое число');
const second = +prompt('Введите первое число');

if (first  && second) {
    if (!isNaN(first) && !isNaN(second)) {
        if (second % first === 0) {
            alert( 'Кратное' );
        } else {
            alert( 'Не кратное' );
        }
    } else {
        alert( 'Значения должны быть числами' );
    }
} else {
    alert( 'Введите значения' );
}