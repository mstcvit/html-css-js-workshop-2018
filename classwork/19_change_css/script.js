console.log("I'm running in a website!");

var heading = document.querySelector('#heading');
var paragraph = document.querySelector('#para');
var button = document.querySelector('#changeButton');

function changeContent() {
    heading.textContent = 'Riya Banerjee';
    paragraph.textContent = 'I love JavaScript!';
    heading.style.backgroundColor = 'indianred';
    heading.style.color = 'white';
}

button.addEventListener('click', changeContent);
