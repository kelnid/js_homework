const numbers = {
    name: 'John',
    number1: 25,
    number2: 160,
    number3: 130,
    surname: undefined
}

function modifyObject(object) {
    for (let key in object) {
        if (isFinite(object[key])) {
            object[key] = Math.round(object[key] / 2);
        }
        else if (typeof object[key] === 'string') {
            object[key] = 'Hello, Palmo';
        } else {
            delete object[key];
        }
    }
    return object;
}

console.log(modifyObject(numbers));