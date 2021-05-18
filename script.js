//Scroll animation
window.addEventListener('scroll' ,()=> {
    let nav = document.querySelector('.navbar');
    let position = window.pageYOffset;
        if (position > 0){
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

//Hamburg animation
let menuBtn = document.querySelector('.menu-btn');
let isOpen = false;
menuBtn.addEventListener('click', () => {
  if(!isOpen) {
    menuBtn.classList.add('open');
    isOpen = true;
  } else {
    menuBtn.classList.remove('open');
    isOpen = false;
  }
});

let menuButton = document.querySelector(".menu-btn");
  menuButton.addEventListener('click' , ()=> {
  let navBar = document.querySelector('.navbar .menu');
  navBar.classList.toggle("active");
  console.log(navBar);
});

//typing animation script

let text = document.querySelector(".typing");
let strText = text.textContent;
let splitText = strText.split("");
text.textContent= "";

splitText.forEach(key => {
  text.innerHTML +="<span>"+ key + "</span>";
});

let char = 0;
let timer = setInterval(onTick , 100);

function onTick() {
  let span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}