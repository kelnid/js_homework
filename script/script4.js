const number = prompt( 'Введите число' );

if (number) {
    if (!isNaN(+number)) {
        if (number >= 1 && number <= 100) {
           if (number >= 1 && number <= 25){
               alert( 'Первая четверть' );
           }

            if (number >= 26 && number <= 50){
                alert( 'Вторая четверть' );
            }

            if (number >= 51 && number <= 75){
                alert( 'Третья четверть' );
            }

            if (number >= 76 && number <= 100){
                alert( 'Четвертая четверть' );
            }
        } else {
            alert( 'Значение должно быть от 1 до 100' );
        }
    } else {
        alert( 'Значение должно быть числом' );
    }
} else {
    alert( 'Значение пустое' );
}