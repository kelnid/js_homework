const gameQuestions = {
    '1. Что будет? "" + 1 + 0': '"10"',
    '2. Что будет? "" - 1 + 0': '-1',
    '3. Что будет? 6 / "3"': '2',
    '4. Что будет? "2" * "3"': '6',
    '5. Что будет? true + false': '1',
    '6. Что будет? "$" + 4 + 5': '"$45"',
    '7. Что будет? "5px" - 2': 'NaN',
    '8. Что будет? 2 / 0': 'infinity',
    '9. Что будет? "-5" - 5': '-10',
    '10. Что будет? null + 1': '1',
}

function startGame (obj) {
    let sum = 0;
    for (let key in obj) {

        const answer = prompt(key);

        if (answer === obj[key]) {
            sum ++
        }
    }
    return alert(`Правильных ответов: ${sum}`);
}

startGame(gameQuestions);

