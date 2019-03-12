
slidr.create('carousel', {
    after: function(e) { number(e.in.slidr) },
    before: function(e) { console.log('out: ' + e.out.slidr); },
    keyboard: true,
    overflow: true,
    controls: 'none', 
    breadcrumbs: true,
    timing: { 'linear': '0.5s ease-in' },
    touch: true,
    pause: true,
    transition: 'linear'
  }).add('h', ['one', 'two', 'three', 'one'])
  .start().auto(4000);

function number(picid){
  let divone = document.querySelector(".insideImg__text");
  let divoneimg = document.querySelector(".insideImg__img")

  let divtwo = document.querySelector(".insideImgtwo__text");
  let divtwoimgleft = document.querySelector(".insideImgtwo__leftimg")
  let divtwoimgright = document.querySelector(".insideImgtwo__rightimg")

  let divthree = document.querySelector(".insideImgthree__text");
  let divthreeimgright = document.querySelector(".insideImgthree__rightimg")

  if(picid == "one"){
    divone.classList.remove("tTobanimation")
    divoneimg.classList.remove("sIoAnimation")

    // one
    divone.classList.add("topTobottomAnimation")
    divoneimg.classList.add("sliderImgOneAnimation")

    // two
    divtwo.classList.remove("topTobottomAnimation")
    divtwoimgleft.classList.remove("leftTorightAnimation")
    divtwoimgright.classList.remove("rightToleftAnimation")

    // three
    divthree.classList.remove("topTobottomAnimation")
    divthreeimgright.classList.remove("rightToleftAnimation")

  }else if(picid == "two"){
    // two
    divtwo.classList.add("topTobottomAnimation")
    divtwoimgleft.classList.add("leftTorightAnimation")
    divtwoimgright.classList.add("rightToleftAnimation")

    // one
    divone.classList.remove("topTobottomAnimation")
    divoneimg.classList.remove("sliderImgOneAnimation")

    // three
    divthree.classList.remove("topTobottomAnimation")
    divthreeimgright.classList.remove("rightToleftAnimation")

  }else{
    console.log('es la imagen tres')
    // three
    divthree.classList.add("topTobottomAnimation")
    divthreeimgright.classList.add("rightToleftAnimation")

    // one
    divone.classList.remove("topTobottomAnimation")
    divoneimg.classList.remove("sliderImgOneAnimation")

    // two
    divtwo.classList.remove("topTobottomAnimation")
    divtwoimgleft.classList.remove("leftTorightAnimation")
    divtwoimgright.classList.remove("rightToleftAnimation")
  }
}