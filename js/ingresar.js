if(localStorage.getItem("autorizado")) {
    location.href="../html/index.html"
}

let email = document.getElementById("email")
let password = document.getElementById("password")
let mensaje = document.getElementById("mensaje")
let mostrar1 = document.getElementById("mostrar1")

let btn = document.getElementById("btn")

function ingresar(e) {
    e.preventDefault()

    let emailSave = localStorage.getItem("correo")
    let passwordSave = localStorage.getItem("password")


    if(!email.value || !password.value){
        mensaje.innerText = "faltan campos por rellenar"
    } else if(emailSave != email.value || passwordSave != password.value){
        mensaje.innerText = "los datos ingresados no se encuentran registrados"
    } else {

        localStorage.setItem("autorizado",true)

        location.href = "../html/index.html"
    }

}
function mostrar_password(e){
    e.preventDefault()
    if(password.getAttribute("type") == "text"){
        password.setAttribute("type","password")
    } else {
        password.setAttribute("type","text")
    }
}

btn.onclick = ingresar
mostrar1.onclick = mostrar_password

