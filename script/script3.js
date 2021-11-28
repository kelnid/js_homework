const user = {};

user["name"] = "John";

alert( isEmpty(user) ); // false

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}