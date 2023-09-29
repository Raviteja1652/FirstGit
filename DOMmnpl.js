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

/*var p = document.querySelector('#items');
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
p.firstElementChild.textContent = 'HEllo item1';*/


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

















