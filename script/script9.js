while(true){
    const money = +prompt( 'Введите сумму денег' );

    let a = +prompt( 'Введите первое значение для диапазона' );

    let b = +prompt( 'Введите второе значение для диапазона' );

    const sum = (b - a) * 0.1 + money;
    alert(`Вы получите = ${sum}`);

    let num = +prompt('Введите число');

    while (num > b || num < a) {
        num = +prompt(`Введите правильно число в диапазоне от ${a} то ${b}`);
    }
// проверка типов данных на пустые строки

    const notEmpty = money  && a  && b  && num;
    const notNaN = !isNaN(money) && !isNaN(a) && !isNaN(b) && !isNaN(num);

    if (notEmpty && notNaN) {
        break;
    } else {
        alert('Одно из введённых значений не валидно');
    }
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let rNum = rand(a , b)

if (num !== rNum) {
    alert(`Поздравляю, вы проиграли! Загаданное число было ${rNum}`);
} else {
    alert('Поздравляю, вы победили!');
}
