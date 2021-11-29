const user = {
    name : "John" ,
    surname : "Smith"
}

function getFullName(user) {
    return user.name + ' ' + user.surname;
}

console.log(getFullName(user));