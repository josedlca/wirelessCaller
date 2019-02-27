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

// arrow up
let arrowUp = document.querySelector('.arrow-up');

arrowUp.classList.add('hide-arrow');
window.addEventListener('scroll',function(){
    if(window.pageYOffset >20){
        arrowUp.classList.remove('hide-arrow');
    }else{
        arrowUp.classList.add('hide-arrow');
    }
});
