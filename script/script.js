const country = prompt('Страна проживания');

if (country) {
    if (!isNaN(+country)) {
        alert( 'Названия не может быть числом' );
    }
} else {
    alert('Введите сообщение');
}