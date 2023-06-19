if(!localStorage.getItem("autorizado")){
    location.href = "../html/ingresar.html"
}

let enlace1 =document.getElementById("enlace1")

let products = [];
let total = 0;

if(localStorage.getItem("autorizado")){
    enlace1.setAttribute("href","#productos")
    enlace1.innerText = "productos"

}


function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    localStorage.setItem("products",products)
    localStorage.setItem("total",total)
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    document.getElementById("checkout").innerHTML = `Pagar`
    window.alert(products.join(", \n"));
}


