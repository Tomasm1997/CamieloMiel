const login = document.getElementById('login')
const visitors = document.getElementById('visita')
let usuario = ""
let visitantes = 0


addEventListener('DOMContentLoaded', contador);

function contador(){
    visitantes = localStorage.getItem('visitantes')
    visitantes ++
    localStorage.setItem('visitantes',visitantes)
    visitors.innerHTML= `Visitas: <b>${visitantes}</b>`
}

login.addEventListener('click', identificarUsuario);

function identificarUsuario(){
    usuario = prompt('Ingrese su nombre de usuario: ')
    if (usuario == 0){
        usuario = ""
    }
    localStorage.setItem('usuario', usuario)
    login.innerHTML= `Bienvenid@ ${usuario}`
}


let usuario_guardado = localStorage.getItem('usuario')

if(usuario_guardado ==null){
    usuario_guardado == ""
}
else(login.innerHTML= `Bienvenid@ ${usuario_guardado}`)



