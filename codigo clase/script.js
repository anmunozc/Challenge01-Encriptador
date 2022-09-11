const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

/*e --> Enter 
o --> ober 
i --> imes 
a --> ai 
u --> ufat */

function btnEmcriptar(){
    const TextoEncriptado = encriptar(inputTexto.value)
    mansaje.value = TextoEncriptado;
    mensaje.style.backgroundImage=
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", enter]], [["i", imes]], [["a", ai]],[["o", ober]],[["u", ufat]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for( let i=0; matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return

    function desencriptar(stringEncriptada){
        let matrizCodigo = [["e", enter]], [["i", imes]], [["a", ai]],[["o", ober]],[["u", ufat]];
        stringEncriptada = stringEncriptada.toLowerCase();
        
        for( let i=0; matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return