/*console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.head);

var r = document.getElementById("header-title");
r.style.borderBottom = 'solid 1px #000'
var a = document.getElementById('main-header');
a.style.borderBottom = 'solid #000'

var v = document.getElementsByClassName('list-group-item');
console.log(v);
v[1].style.fontWeight = 'bold';
v[0].style.fontWeight = 'bold';
v[2].style.fontWeight = 'bold';
v[3].style.fontWeight = 'bold';
v[2].style.backgroundColor = 'green';
var i = document.getElementsByClassName('title');
console.log(i);
var dif = document.getElementsByClassName('list-group-itemfive');
console.log(dif);
dif[0].style.backgroundColor = 'red';
var diff = document.getElementsByTagName('li');
console.log(diff);
diff[4].style.backgroundColor = 'blue';*/

var p = document.querySelector('#items');
console.log(p.parentNode);
console.log(p.parentElement);
console.log(p.lastChild);
console.log(p.lastElementChild);
console.log(p.firstChild);
console.log(p.firstElementChild);
console.log(p.nextElementSibling);
console.log(p.nextSibling);
console.log(p.previousElementSibling);
console.log(p.previousSibling);
p.previousElementSibling.style.color = 'red';
var newDiv = document.createElement('Div');
console.log(newDiv);
newDiv.setAttribute('title', 'erripuk');
var newDivText = document.createTextNode('HEllo');
newDiv.appendChild(newDivText);

var c = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
c.insertBefore(newDiv, h1);

console.log(p.firstElementChild);
p.firstElementChild.textContent = 'HEllo item1';




















