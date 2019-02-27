// Dropdown burger button
let burguerButton = document.getElementById("dropMenu");
let listMenu = document.querySelector('.dropmenu__list');

burguerButton.addEventListener('click', function(){
    listMenu.classList.toggle("hidden");
})
// Dropdown burger button

let cruzButton = document.querySelector('.cruz');
let updiv = document.querySelector('.up');
let childUl = document.querySelector('.thinkmenu');

cruzButton.addEventListener('click', function(){
    childUl.classList.toggle("hiddenchild");
    updiv.classList.toggle("updown");
})

