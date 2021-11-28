const user = {
    name : "John" ,
    surname : "Smith"
}

function fullName(user) {
    return user.name + ' ' + user.surname;
}

console.log(fullName(user));