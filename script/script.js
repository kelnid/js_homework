const country = prompt( 'Введите вашу страну проживания' );

if (country) {
    if (!isNaN(+country)) {
        alert( 'Название страны не может быть числом' );
    }
} else {
    alert( 'Нужно ввести страну' );
}