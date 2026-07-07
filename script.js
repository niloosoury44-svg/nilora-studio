// ===========================
// MOBILE MENU
// ===========================

const mobileMenu = document.getElementById("mobileMenu");

function openMenu(){

mobileMenu.style.right="0";

}

function closeMenu(){

mobileMenu.style.right="-280px";

}

// ===========================
// CLOSE MENU AFTER CLICK
// ===========================

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

closeMenu();

});

});

// ===========================
// SCROLL ANIMATION
// ===========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(".card,.project,.stat").forEach(item=>{

observer.observe(item);

});

// ===========================
// ACTIVE NAVBAR
// ===========================

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.background="rgba(15,15,15,.92)";

nav.style.boxShadow="0 10px 40px rgba(0,0,0,.35)";

}else{

nav.style.background="rgba(255,255,255,.05)";

nav.style.boxShadow="none";

}

});

// ===========================
// SMOOTH BUTTONS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});