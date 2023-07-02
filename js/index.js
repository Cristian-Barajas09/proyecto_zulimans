let header = document.querySelector("header");
let btn_navbar = document.getElementById('btn-navbar')

let enlace1 = document.getElementById("enlace1")
let enlace2 = document.getElementById("enlace2")
let enlace3 = document.getElementById("enlace3")

const myslide = document.querySelectorAll('.myslide'),
	dot = document.querySelectorAll('.dot');
let counter = 1;
let timer = setInterval(autoSlide, 8000);
slidefun(counter);

function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}


enlace3.addEventListener("click",function () {
    localStorage.removeItem("autorizado")
    location.href = "../html/index.html"
})

if(!localStorage.getItem("autorizado")){
	enlace1.innerText = "Ingresar"
	enlace2.innerText = "Registro"
	enlace3.innerText = ""
}



const user = ()=>{
	window.location.href="/profile"
}

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};