function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/gm,"ober");
    var txtCifrado = txtCifrado.replace(/i/gm,"imes");
    var txtCifrado = txtCifrado.replace(/a/gm,"ai");
    var txtCifrado = txtCifrado.replace(/u/gm,"ufat");
    
    
    
   document.getElementById("figura").style.display="none";
   document.getElementById("texto").style.display ="none";
   document.getElementById("texto2").innerHTML = txtCifrado;
   document.getElementById("copiar").style.display ="show";
   document.getElementById("copiar").style.display ="inherit";
}

function desencriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/gm,"e");
    var txtCifrado = txtCifrado.replace(/ober/gm,"o");
    var txtCifrado = txtCifrado.replace(/imes/gm,"i");
    var txtCifrado = txtCifrado.replace(/ai/gm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/gm,"u");
    

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