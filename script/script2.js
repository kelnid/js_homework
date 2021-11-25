const first = +prompt('Введите первое число');
const second = +prompt('Введите первое число');

const notEmpty = first  && second;
const notNaN = !isNaN(first) && !isNaN(second);

if (notEmpty) {
    if (notNaN) {
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