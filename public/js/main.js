// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('.connexion');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


//------------------------------------------------//

const title = document.querySelector(".scrollTitle")
const hautTitle = document.querySelector("hautTitle")
const nav = document.querySelector(".nav")

window.addEventListener('scroll', () => {
    if(window.scrollY > 83){
      title.style.display = "block"
      nav.style.position = "fixed"
      nav.style.top = "0"
      nav.style.backgroundColor = "gray"
      nav.style.color = "white"
      nav.style.index = "1"
      nav.style.width = "100%"
      // nav.style.position = "relative"
    } else if(window.scrollY < 83){
      title.style.display = "none"
      nav.style.position = ""
      nav.style.top = ""
      nav.style.backgroundColor = ""
      nav.style.color = ""
    }
  });


  // overflow: hidden
  // background-color: #333
  // position: fixed /* Set the navbar to fixed position */
  // top: 0 /* Position the navbar at the top of the page */
  // width: 100% /* Full width */

//////////////////////////////////
  /// burger
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
////////////////////////////
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const body = document.querySelector("body")
const prem = document.querySelectorAll(".prem")

button1.addEventListener('click', () => {
  body.style.backgroundColor = "white"
  body.style.color = "black" 
  prem.style.color = "black !important"
})


button2.addEventListener('click', () => {
  body.style.backgroundColor = "black"
  body.style.color = "white"
  prem.style.color = "white !important"
})