const userPrice = {
    John: 200,
    Ann: 500,
    Pete: 400
}

function obj (userPrice) {
    let sum = 0;
    for (let key in userPrice) {
        sum += userPrice[key];
    }
    return sum;
}

console.log(obj(userPrice));