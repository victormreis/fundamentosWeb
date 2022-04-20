let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
let foto = document.querySelector('#foto')



function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length  < 3){
        nome.style.borderBottom = '3px solid red'
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML ='Nome Válido'
        txtNome.style.color = 'green'
        nome.style.borderBottom = '3px solid green'
        nomeOk = true

    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.')== -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color= 'red'
        email.style.borderBottom = '3px solid red'
        emailOk = false
    }else {
        txtEmail.style.color= 'green'
        txtEmail.innerHTML = 'E-mail Válido'
        email.style.borderBottom = '3px solid green'
        emailOk = true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto excede o limite maximo de caracteres (100)'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assunto.style.borderBottom = '3px solid red'
        assuntoOk = false
    }else {
        txtAssunto.style.display = 'none'
        assunto.style.borderBottom = '3px solid green'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulario Enviado com Sucesso!')
    } else{
        alert('Preencha todos os Dados corretamente antes de Enviar!')
    }
}

function mapaZoom(){
    mapa.style.width = '900px'
    mapa.style.height = '750px'
}

function mapaNormal(){
    mapa.style.width = '500px'
    mapa.style.height = '350px'
}

function fotoQuadrada(){
    foto.style.borderRadius = '0'
    foto.style.width= '400px'
}

function fotoNormal(){
    foto.style.borderRadius = '50%'
    foto.style.width= '300px'
}


