const num1 = +prompt('Введите первое число')

const action = prompt('Введите один из знаков +, -, *, /')

const num2 = +prompt('Введите второе число');
let result = 0;
if(num1 || num2 || action) {
    if(isNaN(num1) || isNaN(num2)) {
        alert('Одно из ведённых значений не является числом')
    }
} else {
    alert('Одно из полей пустое');
}

switch (action) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if( num2 === 0 ) {
            alert('На 0 делить нельзя')
        } else {
            result = num1 / num2;
        }
        break;
}

alert(result);