/* This is the data we will be using, study it but don't change anything, yet. */

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuMaker(arr) {

  let menu = document.createElement('div');
  let menuUl = document.createElement('ul');

  menu.appendChild(menuUl);
  menu.classList.add('menu');

  arr.forEach(item => {
    let str = document.createElement('li');
    str.textContent = item;
    menuUl.appendChild(str);
  })

  let menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });

  return menu;

}

let menuParent = document.querySelector('.header');

menuParent.appendChild(menuMaker(menuItems));

// function menuMaker(arr){

// const menu = document.createElement('div');
// const menuUl = document.createElement('ul');

// menu.classList.add('menu');
// arr.map(item => {
//   let x = document.createElement('li');
//   x.textContent = item;
//   menuUl.appendChild(x);
// });

// let menuButton = document.querySelector('.menu-button');
// menuButton.addEventListener('click', () => {
//   menu.classList.toggle('menu--open');
// });

// return menu;

// }

// let menuParent = document.querySelector('ul');
// menuItems.map(item => {
// menuParent.appendChild(menuMaker());
// });
