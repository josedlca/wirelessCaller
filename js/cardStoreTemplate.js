// selected active

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let idone= document.querySelector("#one");
let idtwo = document.querySelector("#two");
let idthree = document.querySelector("#three");

one.addEventListener('click', function(){
    one.classList.add('active')
    idone.classList.add('showInfo')

    two.classList.remove('active')
    three.classList.remove('active')
    idtwo.classList.remove('showInfo')
    idthree.classList.remove('showInfo')
})
two.addEventListener('click', function(){
    two.classList.add('active')
    idtwo.classList.add('showInfo')

    one.classList.remove('active')
    three.classList.remove('active')
    idone.classList.remove('showInfo')
    idthree.classList.remove('showInfo')
    
})
three.addEventListener('click', function(){
    three.classList.add('active')
    idthree.classList.add('showInfo')

    two.classList.remove('active')
    one.classList.remove('active')
    idone.classList.remove('showInfo')
    idtwo.classList.remove('showInfo')
})