const bg = document.querySelector('.jonas'); //paselektina is html pagal klase jonas
const text = document.querySelector('.textColor');
const button = document.querySelector('button');
const container = document.querySelector('body');

button.addEventListener("click", change);

function change(){
    container.style.backgroundColor = bg.value;//paima reiksme is edit lauko
    container.style.color = text.value;
}

