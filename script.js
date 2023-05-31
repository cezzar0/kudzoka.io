let navbar = document.querySelector(".nav-bar");
let home = document.querySelector(".home-car");

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let navheight = navbar.getBoundingClientRect().height;
  if (scroll > navheight) {
    navbar.classList.add("box-shadow");
  } else {
    navbar.classList.remove("box-shadow");
  }
});



let burger = document.querySelector(".burger");
let link = document.querySelector(".link-nav-cont");
let nav = document.querySelector(".nav-bar");
let header = document.querySelector(".one-section")

burger.addEventListener("click", () => {
  burger.classList.toggle("show");
  link.classList.toggle("show");
  link.style.transition = "0.8s";
  nav.classList.toggle("nav-blur");
  nav.style.transition = " all 0.8s ease";
});


let scrollbtn = document.querySelector(".scroll") ;
let btn = document.querySelector(".btn") ;
  window.addEventListener ("scroll" , ()=> {
    let scrollY = window.pageYOffset;
    let navheight = navbar.getBoundingClientRect().height;
    if ( scrollY > navheight) {
      scrollbtn.classList.add("show-scroll")
    }else {
      scrollbtn.classList.remove("show-scroll")
    }
  })

  btn.addEventListener("click" , ()=> {
    window.scrollTo({
      top : 0 ,
      left : 0 ,
      behavior: "smooth",
    }) ;
  })
