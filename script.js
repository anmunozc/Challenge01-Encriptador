function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace("a","ai");
    var txtCifrado = txtCifrado.replace("e","enter");
    var txtCifrado = txtCifrado.replace("i","imes");
    var txtCifrado = txtCifrado.replace("o","ober");
    var txtCifrado = txtCifrado.replace("u","ufat");
    
   document.getElementById("figura").style.display="none";
   document.getElementById("texto").style.display ="none";
   document.getElementById("texto2").innerHTML = txtCifrado;
   document.getElementById("copiar").style.display ="show";
   document.getElementById("copiar").style.display ="inherit";
}

function desencriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/ai/gm,"a");
    var txtCrifrado = txtCifrado.replace("enter","e");
    var txtCifrado = txtCifrado.replace("imes","i");
    var txtCifrado = txtCifrado.replace("ober","o");
    var txtCifrado = txtCifrado.replace("ufat","u");

    document.getElementById("figura").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto Copiado");
}