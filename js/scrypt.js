if(!localStorage.getItem("autorizado")){
    location.href = "../html/ingresar.html"
}

const header = document.querySelector("header");
const btn_navbar = document.getElementById('btn-navbar')
let enlace1 = document.getElementById("enlace1")

enlace1.addEventListener("click",function () {
    localStorage.removeItem("autorizado")
    location.href = "../html/index.html"
})



// let enlace1 =document.getElementById("enlace1")

let products = [];
let total = 0;

// if(localStorage.getItem("autorizado")){
//     enlace1.setAttribute("href","#productos")
//     enlace1.innerText = "productos"

// }


function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    localStorage.setItem("products",products)
    localStorage.setItem("total",total)
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    console.log(products)
    if(products === [] ){
        alert("no hay productos a pagar")
    } else {
        document.getElementById("checkout").innerHTML = `Pagar`
        alert(products.join(", \n"));
        products = []
    }
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

