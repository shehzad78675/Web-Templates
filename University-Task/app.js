// let takeInput = prompt('Enter your name!');

let h1 = document.createElement('h1');
let text = document.createTextNode(takeInput);

h1.appendChild(text);

let container = document.querySelector('.outer-container');

document.body.append(h1);