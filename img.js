var next=document.querySelector('.next'),
  prev=document.querySelector('.prev'),
  carasoul=document.querySelector('.carasoul'),
  imgs=document.querySelector('.imgs'),
  photos=document.querySelectorAll('.photos'),
  timer=document.querySelector('.timer')


let timers=3000
let timeautonext=7000




next.onclick=function(){
    showSliders('next')
}

prev.onclick=function(){
    showSliders('prev')
}

let runtime
let runNextAuto=setTimeout(()=>{
    next.click()

},timeautonext)

function resetTimeAnimation(){
    timer.style.animation='None'
    timer.offsetHeight
    timer.style.animation='null'
    timer.style.animation='timer 7s linear 1 forwards'
}

function showSliders(type){
    let sliderItems=imgs.querySelectorAll('.carasoul .imgs .photos')
    if(type ==='next'){
        imgs.appendChild(sliderItems[0])
        carasoul.classList.add('next')

    }else{
        imgs.prepend(sliderItems[sliderItems.length-1])
        carasoul.classList.add('prev')
    }
    clearTimeout(runtime)

    runtime=setTimeout(()=>{
        carasoul.classList.remove('next')
        carasoul.classList.remove('prev')
    },timeautonext)

    clearTimeout(runNextAuto)
    runNextAuto=setTimeout(()=>{
       next.click()

    },timeautonext)
    resetTimeAnimation()
}

