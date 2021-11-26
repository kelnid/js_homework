alert( 'Я хочу поиграть с тобой' );

const startGame = prompt( 'Введите один из варинтов: камень, ножницы или бумага' ).toLowerCase();

const rules = {
    'камень': 'ножницы',
    'бумага': 'камень',
    'ножницы': 'бумага'
};

const choices = Object.keys(rules);

const computerChoice = choices[Math.floor(Math.random() * 3)];

if (choices.indexOf(startGame) < 0) {
    alert( 'Так не пойдёт!' );
} else if (startGame === computerChoice) {
    alert( 'Ничья!' );
} else {

    const userChoice = rules[startGame];

    if (userChoice === computerChoice) {
        alert( `Победил игрок ${startGame} против ${computerChoice}` );
    } else {
        alert( `Победил комп ${startGame} против ${computerChoice}` );
    }
}