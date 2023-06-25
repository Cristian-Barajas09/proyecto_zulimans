if(localStorage.getItem("autorizado")) {
    location.href = "../html/index.html"
}




let nombre = document.getElementById("name");
let apellido = document.getElementById("lastname");
let correo = document.getElementById("email");
let password = document.getElementById("password");
let confirmar = document.getElementById("confirmPassword");
let mensaje = document.getElementById("mensaje")
let btn = document.getElementById("btn")
let mostrar1 = document.getElementById("mostrar1")
let mostrar2 = document.getElementById("mostrar2")



function registro(e){
    e.preventDefault()

    if(!nombre.value || !apellido.value || !correo.value || !password.value){
        alert("por favor rellene todos los campos")
        // console.log("rellene todos los campos")
    }else if(password.value != confirmar.value) {
        alert("las contraseñas no son iguales")
    }else {

        localStorage.setItem("nombre",nombre.value)
        localStorage.setItem("apellido",apellido.value)
        localStorage.setItem("correo",correo.value)
        localStorage.setItem("password",password.value)
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
function mostrar_confirm(e){
    e.preventDefault()
    if(confirmar.getAttribute("type") == "text"){
        confirmar.setAttribute("type","password")
    } else {
        confirmar.setAttribute("type","text")
    }
}


btn.onclick = registro
mostrar1.onclick = mostrar_password
mostrar2.onclick = mostrar_confirm
