console.dir(document);
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
diff[4].style.backgroundColor = 'blue';
