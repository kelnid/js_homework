const numbers = {
    name: 'John',
    number1: 25,
    number2: 160,
    number3: 130,
    surname: undefined
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] /= 2;
            if (!Number.isInteger(obj[key])) {
                obj[key] = Math.round(obj[key]);
            }
        } else if (typeof obj[key] == 'string') {
            obj[key] = 'Hello, Palmo';
        } else {
            delete obj[key];
        }
    }
    return obj;
}

console.log(multiplyNumeric(numbers));