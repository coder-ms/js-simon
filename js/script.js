/*
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 5 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, 
tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

let numRandom = 5;

//Array
let numArray = [];
let numUserPutInArr = [];
let correctNumbers= [];
let wrongNumbers = [];

//All getElementById
const randomNumbers = document.getElementById('randomNumbers');
const numUser = document.getElementById('numbersUser');
const sendResult = document.getElementById('sendResult');
let resultCorrect = document.getElementById('resultCorrect');
const numCorrect = document.getElementById('numCorrect');
const numWrong = document.getElementById('numWrong');
const arrayWrongFull = document.getElementById('arrayWrongFull');
const tryAgain = document.getElementById('rigioca');



function randomNumberFunct(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

while(numArray.length < numRandom){
    let numChosen = randomNumberFunct(1,100);
    if(!numArray.includes(numChosen)){
        numArray.push(numChosen);
    }

}
console.log(numArray);
randomNumbers.innerText=(numArray)

function clear (){
    randomNumbers.innerText = '';
}
setTimeout(clear, 5000);


// Check se numero e` stato indovinato
function checkNumber(){
    let numbersByUser = parseInt(numUser.value);
    // You lost
    if(numUserPutInArr.length == numArray.length){
        arrayWrongFull.innerText = 'All 5 spots are occupied! Pay attention!';
        arrayWrongFull.classList.add('arrayWrongFull');
    }
    else{
        numUserPutInArr.push(numbersByUser);
    }
    // You win
    if(numUserPutInArr.length == numArray.length){
        resultCorrect.innerText = 'All 5 spots are occupied! You win!';
        resultCorrect.classList.add('resultCorrect');
    }



    if(!numArray.includes(numbersByUser)){
        wrongNumbers.push(numbersByUser);
        randomNumbers.innerHTML = 'Wrong number. Try Again...';
        randomNumbers.classList.add('wrong')
        randomNumbers.classList.remove('correct');
    }
    else{
        correctNumbers.push(numbersByUser);
        randomNumbers.innerHTML = 'Correct number. You have a good memory!';
        randomNumbers.classList.add('correct');
    }

    if(correctNumbers.length >= 5){
        sendResult.removeEventListener('click', checkNumber);
    }
    else if( wrongNumbers.length >= 5){
        sendResult.removeEventListener('click', checkNumber);
    }

    console.log(correctNumbers, wrongNumbers);
    //console.log(wrongNumbers)

    numCorrect.innerHTML = correctNumbers;
    numCorrect.classList.add('correct');
    numWrong.innerHTML = wrongNumbers;

    numWrong.classList.add('wrong');
    //console.log(numeriUtenteInseriti)

}
/*
function replayFunct(){
    window.location.reload();
}
*/
sendResult.addEventListener('click', checkNumber);
//tryAgain.addEventListener('click', replayFunct)









