const userMoney = {
    John: 200,
    Ann: 500,
    Pete: 400
}

function obj (userMoney) {
    let sum = 0;
    for (let key in userMoney) {
        sum += userMoney[key];
    }
    return sum;
}

console.log(obj(userMoney));