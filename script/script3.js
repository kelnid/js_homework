const user = {
    // name: 'John',
    age: 30,
};

function isEmpty(obj) {
    return 'name' in obj;
}

alert(isEmpty(user))