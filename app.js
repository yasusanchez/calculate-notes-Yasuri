const username = document.getElementById('name');
const data1 = document.getElementById('note1');
const data2 = document.getElementById('note2');
const data3 = document.getElementById('note3');
const btnCalculate = document.getElementById('btn-calculate');
const btnpredict = document.getElementById('btn-predict');
const response = document.getElementById('result');

btnCalculate.addEventListener('click', calculateNote);
btnpredict.addEventListener('click', predictNote);


function calculateNote() {
    let user = username.value;
    let note1 = Number(data1.value);
    let note2 = Number(data2.value);
    let note3 = Number(data3.value);
    let result = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4);
    response.textContent = `Sr (a)(e)(i) ${user}, su nota es de: ${result}`;

    if (result < 3.5) {
        response.textContent = `Sr(a) ${user}, su nota es de: ${result}. perdiste la materia.`;
        response.style.color = 'black';
    } else if(result >= 3.5 && result <= 4.5){
        response.textContent = `Sr(a) ${user}, su nota es de: ${result}. ganaste la materia.`;
        response.style.color = 'orange';
    } else {
        response.textContent = `Sr(a) ${user}, su nota es de: ${result}. su nota es sobresaliente.`;
        response.style.color = 'green';
    }

}
calculateNote()

function predictNote() {

    let note1 = Number(data1.value);
    let note2 = Number(data2.value);
    let requiredNote = (3.5 - (note1 * 0.3 + note2 * 0.3)) / 0.4;

    data3.value = requiredNote.toFixed(2);
}