var randomNumber = Math.floor(Math.random() * 10) + 1;
var turns = 5;

const reload = () => {
    window.location.reload();
};

const displayTurns = () => {
    document.getElementById(
        'turns'
    ).innerHTML = `<b class="turnz">Turns Left :${turns}</b>`;
};

const updateResult = (result) => {
    document.getElementById(
        'result'
    ).innerHTML = `<b class="resultz col">${result}</b>`;
};

const handleGameOver = (currTurnsLeft) => {
    document.getElementById('sub').disabled = true;
    turns = currTurnsLeft;
    displayTurns();
};

const handleTurnCheck = () => {
    if (turns == 1) {
        updateResult(
            `You Ran out of turns! <button onClick="reload()" class="btn cent">Restart</button>`
        );
        handleGameOver(0);
    } else {
        turns -= 1;
        displayTurns();
    }
};

// Call on first load
displayTurns();

const handle = () => {
    var val = parseInt(document.getElementById('numberVal').value);
    console.log(val, randomNumber);
    if (val == randomNumber) {
        updateResult(
            'You guessed it! <button onClick="reload()" class="btn cent">Restart</button>'
        );
        handleGameOver(turns);
    } else if (val < randomNumber) {
        updateResult(`Guess a number greater than ${val}`);
    } else if (val > randomNumber) {
        updateResult(`Guess a number less than ${val}`);
    }
    handleTurnCheck();
};
