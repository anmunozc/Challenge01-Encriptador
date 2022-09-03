// "a" se converte en "ai"
// "e" se converte en "enter"
// "i" se converte en "imes"
// "o" se converte en "ober"
// "u" se converte en "ufat

function encriptar(){
    var texto = document.getElementById("text-input").value.toLowerCase();
    var txtCrifrado = txtCrifrado.replace(/a/gm,"ai");
    var txtCrifrado = txtCrifrado.replace(/e/gm,"enter");
    var txtCrifrado = txtCrifrado.replace(/i/gm,"imes");
    var txtCrifrado = txtCrifrado.replace(/o/gm,"ober");
    var txtCrifrado = txtCrifrado.replace(/u/gm,"ufat");
    
   document.getElementById("figura").style.display="none";
   document.getElementById("texto").style.display ="none";
   document.getElementById("texto2").innerHTML = txtCifrado;
   document.getElementById("copiar").style.display ="show";
   document.getElementById("copiar").style.display ="inherit";
}

   function desencriptar(){
    var texto= document.getElementById("text-input").value.toLowerCase();
    var txtCrifrado = txtCrifrado.replace(/ai/gm,"a");
    var txtCrifrado = txtCrifrado.replace(/enter/gm,"e");
    var txtCrifrado = txtCrifrado.replace(/imes/gm,"i");
    var txtCrifrado = txtCrifrado.replace(/ober/gm,"o");
    var txtCrifrado = txtCrifrado.replace(/ufat/gm,"u");

    document.getElementById("figura").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.Select();
    document.designMode("copy");
    alert("Texto Copiado");
}