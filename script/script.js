const number = +prompt( 'Write a number' );

function checkNumber () {
    if (isNaN(number)) {
        alert(Boolean(false));
    } else {
        alert(Boolean (true));
    }
}

checkNumber();
