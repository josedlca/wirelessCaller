// selected active

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

one.addEventListener('click', function(){
    one.classList.add('active')
    two.classList.remove('active')
    three.classList.remove('active')
})
two.addEventListener('click', function(){
    two.classList.add('active')
    one.classList.remove('active')
    three.classList.remove('active')
})
three.addEventListener('click', function(){
    three.classList.add('active')
    two.classList.remove('active')
    one.classList.remove('active')
})