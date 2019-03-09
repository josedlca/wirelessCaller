// Dropdown burger button
let burguerButton = document.getElementById("dropMenu");
let listMenu = document.querySelector('.dropmenu__list');

// burguerButton.addEventListener('click', function(){
//     listMenu.classList.toggle("hidden");
// })
// Dropdown burger button

let cruzButton = document.querySelector('.cruz');
let updiv = document.querySelector('.up');
let childUl = document.querySelector('.thinkmenu');

cruzButton.addEventListener('click', function(){
    childUl.classList.toggle("hiddenchild");
    updiv.classList.toggle("updown");
    console.log('hola');
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


// SendForm tester

let sendForm = document.querySelector('#sendForm');
let contactsend = document.querySelector('.contact__send');
let contactForm = document.querySelector('.contact__form');

sendForm.addEventListener('click',function(){
    contactForm.classList.add('quiteform');
    contactsend.classList.add('addmessage');
});
