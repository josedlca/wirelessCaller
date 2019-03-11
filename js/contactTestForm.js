// SendForm tester

let sendForm = document.querySelector('#sendForm');
let contactsend = document.querySelector('.contact__send');
let contactForm = document.querySelector('.contact__form');

sendForm.addEventListener('click',function(){
    contactForm.classList.add('quiteform');
    contactsend.classList.add('addmessage');
});