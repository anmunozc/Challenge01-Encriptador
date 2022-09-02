// "a" se converte en "ai"
// "e" se converte en "enter"
// "i" se converte en "imes"
// "o" se converte en "ober"
// "u" se converte en "ufat

function encriptar(){
    var texto= document.getElementById("ingresarTexto").value.toLowerCase();
    var txtCrifrado=texto.replace("a","ai");
    var txtCrifrado=texto.replace("e","enter");
    var txtCrifrado=texto.replace("i","imes");
    var txtCrifrado=texto.replace("o","ober");
    var txtCrifrado=texto.replace("u","ufat");
    
   document.getElementById("figura").style.display="none";
   document.getElementById("texto").style.display="none";
   document.getElementById("texto2").innerHTML=txtCrifrado;
   Document.getElementById("copiar").style.display="show";
   document.getElementById("copiar").style.display=innerit;
}

   function desencriptar(){
    var texto= document.getElementById("ingresarTexto").value.toLowerCase();
    var txtCrifrado=texto.replace("ai","a");
    var txtCrifrado=texto.replace("enter","e");
    var txtCrifrado=texto.replace("imes","i");
    var txtCrifrado=texto.replace("ober","o");
    var txtCrifrado=texto.replace("ufat","u");

    document.getElementById("figura").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML=txtCrifrado;
    Document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display=innerit;
}

function copiar(){
    var contenido=document.querySelector("texto2");
    contenido.ariaSelected();
    document.designMode("cut");
    alert("Se Copió");
}