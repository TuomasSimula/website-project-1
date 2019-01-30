const notesSharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const notesFlat= ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

document.getElementById('get-random-note').addEventListener('click', () => {getRandNote()});
document.getElementById('check-button').addEventListener('click', () => {checkAnswer()});
document.getElementById('note').addEventListener('keypress', (e) => {
    var key = e.which || e.keyCode;
    if (key === 13) {
        checkAnswer();
    }
});

var currentString, currentFret;

getRandNote();

function getRandNote () {
    currentString = Math.floor(Math.random() * 6);
    currentFret = Math.floor(Math.random() * 5);
    
    document.getElementById('result').innerText = '';

    document.getElementById('dot-img').style.left = `${7 + currentString * 80}px`;
    document.getElementById('dot-img').style.top = `${95 + currentFret * 123}px`;
}

function checkAnswer (){
    var index = (currentString * 5 + currentFret + 8);
    if (currentString > 3) index--;
    index = index % 12;
    var ans = document.getElementById('note').value.replace(/\s/g, '');
   
    document.getElementById('note').value = '';
    console.log(notesSharp[index], index);
    if(ans === notesSharp[index] || ans === notesFlat[index]) {
        document.getElementById('result').innerText = 'Correct!';
        getRandNote();
    } else {
        document.getElementById('result').innerText = 'Wrong answer.';
        document.getElementById.value = '';
    }
}
