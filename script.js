const inputTexto = document.querySelector(".input-texto"); /* seleccion de los elementos por medio de sus clases */
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
const mujer = document.querySelector(".mujer");
const temporal = document.querySelector(".temporal");
const msjBox = document.querySelector(".mensaje-box")
btnCopy.style.display = "none";
mensaje.style.display = "none";


//Encriptar mensaje

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.style.display = "block";
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
    msjBox.style.cssText = "width: 343px; height: 595px;";
    temporal.style.display = "none";
    btnCopy.style.display = "block";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;

    
}


//Desencriptar mensaje

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


//botón copiar

function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}
