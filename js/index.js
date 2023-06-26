let header = document.querySelector("header");
let btn_navbar = document.getElementById('btn-navbar')

let enlace1 = document.getElementById("enlace1")
let enlace2 = document.getElementById("enlace2")

if(!localStorage.getItem("autorizado")){
	enlace1.innerText = "Ingresar"
	enlace2.innerText = "Registro"

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