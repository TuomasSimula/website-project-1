const notesSharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const notesFlat= ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

var maxFret = 5, maxString = 6;

document.getElementById('12-fret-radio').addEventListener('click', () => {
    maxFret = 12;
    document.getElementById('fretboard-5').style.display = 'none';
    document.getElementById('fretboard-12').style.display = 'inline';
    getRandNote();
});


document.getElementById('5-fret-radio').addEventListener('click', () => {
    maxFret = 5;
    document.getElementById('fretboard-5').style.display = 'inline';
    document.getElementById('fretboard-12').style.display = 'none';
    getRandNote();
});

document.getElementById('open-strings-radio').addEventListener('click', () => {
    maxFret = 0;
    document.getElementById('fretboard-5').style.display = 'inline';
    document.getElementById('fretboard-12').style.display = 'none';
    getRandNote();

document.getElementById('all-strings-radio').addEventListener('click', () => {
    maxString = 6;
    getRandNote();
});

document.getElementById('two-strings-radio').addEventListener('click', () => {
    maxString = 2;
    getRandNote();
});

document.getElementById('get-random-note').addEventListener('click', () => {getRandNote()});
document.getElementById('check-button').addEventListener('click', () => {checkAnswer()});

document.getElementById('note').addEventListener('keypress', (e) => {
    var key = e.which || e.keyCode;
    if (key === 13) {
        checkAnswer();
    }
});

var currentString, currentFret;

document.getElementById('5-fret-radio').checked = true;
document.getElementById('all-strings-radio').checked = true;

getRandNote();

function getRandNote () {
    var prevString = currentString;
    var prevFret = currentFret;
    
    while(currentString === prevString && currentFret === prevFret) {
        currentString = Math.floor(Math.random() * maxString);
        currentFret = Math.floor(Math.random() * maxFret);
    }
    
    document.getElementById('result').innerText = '';

    document.getElementById('dot-img').style.top = `${203 - currentString * 40}px`;
    document.getElementById('dot-img').style.left = `${48 + currentFret * 61}px`;
}

function checkAnswer (){
    var index = (currentString * 5 + currentFret + 8);
    if (currentString > 3) index--;
    index = index % 12;
    var ans = document.getElementById('note').value.replace(/\s/g, '');
   
    document.getElementById('note').value = '';
    console.log(notesSharp[index], index);
    if(ans === notesSharp[index] || ans === notesFlat[index]) {
        document.getElementById('result').innerText = 'Correct!';
        getRandNote();
    } else {
        document.getElementById('result').innerText = 'Wrong answer.';
        document.getElementById.value = '';
    }
}
