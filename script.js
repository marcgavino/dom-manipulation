const container = document.querySelector('#container');

// Problem 1
const p = document.createElement('p');
p.textContent = "Hey I'm red!"; 
p.style.color = 'red';

container.appendChild(p);

// Problem 2
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

container.appendChild(h3);

// Problem 3
const div = document.createElement('div');
div.setAttribute('style', 'border: 1px solid black; background-color: pink');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const pp = document.createElement('p');
pp.textContent = "ME TOO!"; 

div.append(h1, pp);
container.append(div);
