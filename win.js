// ELEMENT SELECTORS

// Single Element Selectors
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));
// Multiple Element Selectors
/*console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items')
 //ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello'
ul.firstElementChild.style.color='green'
ul.children[1].innerText = 'Yellow'
ul.children[1].style.color='yellow'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//const btn = document.querySelector('.btn');
// btn.style.background = 'red';*/


//Events
 const ul = document.querySelector('.items')
const btn = document.querySelector('.btn');
/*btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  }); */

 /*  btn.addEventListener('mouseover', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  }); */
  btn.addEventListener('mouseout', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('h1').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
   
   
  });