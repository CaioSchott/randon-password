let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizeSlider = document.querySelector('#valor');
let senha = document.querySelector('#senha');

let containerSenha = document.querySelector('#container-senha');

let charset = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890$&<>@";
let novaSenha = "";

sizeSlider.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizeSlider.innerHTML = this.value;
}

function gerarSenha (){

    let pass = "";
    
    for (let i = 0, n = charset.length; i < sliderElement.value; i++ ){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerSenha.classList.remove("hide");
    senha.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha() {
    console.log("Senha copiada")
    navigator.clipboard.writeText(novaSenha);
}

