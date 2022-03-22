const heading = document.getElementsByClassName('heading');

const ul = document.getElementsByTagName('ul');
var li = document.getElementsByTagName('li');
let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let li3 = document.getElementById('li3');
let li4 = document.getElementById('li4');

const its = document.getElementById('itsh1');
itsh1.style.color = 'black';
itsh1.innerHTML = 'Welcome to My Blog';

const p = document.getElementsByTagName('p');
for (let i = 0; i < 5 ; i++) {
    p[i].style.color = 'black';
    }
p[5].style.color = 'white';

const body = document.getElementsByClassName('body');
const prm = document.querySelector('#column p');
prm.style.color = 'black';

const h2rm = document.querySelectorAll('h2');
for (let i = 0; i < h2rm.length ; i++) {
    h2rm[i].style.color = 'black';
}

const footer = document.getElementsByClassName('footer');
footer[0].innerHTML = '@copyright 2022 || by nad';
