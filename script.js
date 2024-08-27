let textArea = document.querySelector('.apresentacao__texto');
let mensagem = document.querySelector('.apresentacao__lateral__mensagem');

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e','enter'], ['i','ines'], ['a','ai'], ['o','ober'], ['u','ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    document.querySelector('.apresentacao__lateral__mensagem').style.backgroundImage = 'none';
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [['e','enter'], ['i','ines'], ['a','ai'], ['o','ober'], ['u','ufat']];
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    document.querySelector('.apresentacao__lateral__mensagem').style.backgroundImage = 'none';
    return stringDesencriptar;
}

    function copiar() {
        navigator.clipboard.writeText(document.querySelector('.apresentacao__lateral__mensagem').value);
}