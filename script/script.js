// function upFirst(str) {
//
//     if (!str) {
//         return str;
//     }
//
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
//
// }
//
// alert( upFirst("иванов") );
// alert( upFirst("ИВАНОВ") );





// function truncate(str, maxlength) {
//
//     return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
//
// }
//
// alert(truncate('Приветвфцвфцвфцвфцвфвф', 7));





// let userName = 'Иванов Сергей Петрович';
//
// function getShortName(string) {
//
//     const arr = string.split(' ');
//
//     return arr[0] + ' ' + arr[1][0] + '. ' + arr[2][0] + '.';
//
// }
//
// alert(getShortName(userName));



// const users = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'Marry',
//         age: 22
//     },
//     {
//         id: 3,
//         name: 'Poll',
//         age: 25
//     },
// ]
//
// function filterArray (arr) {
//
//     let filter = arr.filter(function (user) {
//         return user.name;
//     })
//
//     return filter;
//
// }
// console.log(filterArray(users));




// const arrOne = ['Абрикос', 'Кокос', 'Посос'];
// const arrTwo = ['Абрикос', 'Холодос', 'Посос'];
//
// function getUnitedArr (arrThree, arrFour) {
//
//     const unitedArr = arrThree.concat(arrFour);
//
//     return [new Set(unitedArr)];
//
// }
//
// console.log(getUnitedArr(arrOne, arrTwo));



// const userSnakeName = 'super_user_name';
//
// function modifyToCamelCase (string) {
//
//     let result = '';
//
//     const splitMethod = string.split('_');
//
//     for (let i = 0; i < splitMethod.length; i++) {
//         if (i === 0) {
//             result = result + splitMethod[i];
//         } else {
//             result += splitMethod[i][0].toUpperCase() + splitMethod[i].slice(1);
//         }
//     }
//     return result;
// }
//
// console.log(modifyToCamelCase(userSnakeName));


//
// const calc = '5+10';
//
// function pop (string) {
//
//     return eval(string);
//
// }
//
// console.log(pop(calc));



// const users = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'Marry',
//         age: 22
//     },
//     {
//         id: 3,
//         name: 'Poll',
//         age: 25
//     },
// ];
// function getArrayWithNames(array) {
//     return array.map(function (user) {
//         return user.name;
//     });
// }
// console.log(getArrayWithNames(users));





// const users = [1, 'John', 20, 'Pete', 40];
// function start(array) {
//     return array.map(function (item) {
//         if (typeof item === 'string') {
//             return item.trim().split('');
//         }
//         return item * 2;
//     })
// }
// console.log(start(users));



/*const str = 'снюс снюс снюс снюс помидор помидор джон джон джон';
function checkSpam (sting) {

    const string = sting.trim().split(" ").map(function (item) {

        return item.toLowerCase();
    });

    return checkIfDuplicateExists(string);
}

function checkIfDuplicateExists(array) {

    return new Set(array).size !== array.length;

}

console.log(checkSpam(str));
*/


// const censoredWords = ['Помидор', 'Кошмар', 'Идиот', 'Жаба', 'Говнюк'];
//
// const line = 'жопа Помидор';
//
// function checkCensoredWord (str) {
//
//     str = str.toLowerCase();
//
//     for (let item of censoredWords.map(function (items) {
//         return items.toLowerCase();
//     })) {
//
//         if (str.includes(item)) {
//             return true;
//         }
//     }
//     return false;
// }
//
// console.log(checkCensoredWord(line));





// const arrayToSentence = ['Привет', 1, null, 'как', {}, 'дела'];
//
// function get (array) {
//
//     return array.filter(function (item) {
//
//         if (typeof item === 'string') {
//             return item;
//         }
//
//     }).join(' ');
// }
//
// console.log(get(arrayToSentence));



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//
// function createPhoneNumber (numbers) {
//
//     let format = '(xxx) xxx-xxxx';
//
//     for (let number of numbers) {
//         format = format.replace('x', number);
//     }
//
//     return format;
// }
//
// console.log(createPhoneNumber(numbers));





// const users = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20,
//         salary: 1000
//     },
//     {
//         id: 2,
//         name: 'Marry',
//         age: 22,
//         salary: 1500
//     },
//     {
//         id: 3,
//         name: 'Poll',
//         age: 25,
//         salary: 1200
//     },
// ];
// function getHighestSalary (array) {
//
//     let max = array.reduce(function (prev, current) {
//
//         if (current.salary > prev.salary) {
//             return current;
//         } else {
//             return prev;
//         }
//
//     });
//
//     return max.name;
// }
// console.log(getHighestSalary(users));



// function checkString (string) {
//
//     let str = document.getElementById(string);
//
//     if(str.length >= 3 && str <= 16) {
//         return true
//     }
//
// }
// console.log(checkString('adwdaw'));



// function isCorrectString(str) {
//     str = str.trim();
//     return str && (str.length >= 3 && str.length <= 16) && isNotNumbers(str);
// }


// console.log(isCorrectString('фыasdadadadadadx'));
//
// function isCorrectPassword(password) {
//     password = password.trim();
//     return password && password.length >= 6 && !isNotNumbers(password) && checkUpperSymbols(password);
// }
//
// function isNotNumbers (str) {
//     for (let symbol of str) {
//         if (isFinite(+symbol)) {
//             return false;
//         }
//     }
//
//     return true;
// }



// function checkUpperSymbols (str) {
//     for (let symbol of str) {
//         if (symbol === symbol.toUpperCase() && !isFinite(+symbol)) {
//             return true;
//         }
//     }
//
//     return false;
// }
//
//
// console.log(isCorrectPassword('sada2A'));



