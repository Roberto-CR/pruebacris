//Esta funcion va a limpiar la caja 


function LimpiaCajas(){
    document.getElementById('input').value = "";
}


//Con esta funcion puedo elegir una etiqueta de HTML por ejemplo las cajas de texto donde va el texto Encriptado y desencriptado //
function MostrarTexto(Etiqueta,Respuesta){
    let EtiquetaHTML = document.getElementById(Etiqueta)
    EtiquetaHTML.innerHTML = Respuesta
    
}

// Con esta funcion podremos obtener el texto que escribio el usuario y encriptarlo// 
function TextoUsuarioEncriptado(){
    const TextoEntrante = document.getElementById('input').value;
    var TextoNuevo = ""
    
    
    for(let i = 0; i < TextoEntrante.length; i++){
        if (TextoEntrante[i] === "e"){
            TextoNuevo += "enter"
        } else if (TextoEntrante[i] === "i"){
            TextoNuevo += "imes";
        } else if (TextoEntrante[i] === "a"){
            TextoNuevo += "ai";
        } else if (TextoEntrante[i] === "o"){
            TextoNuevo += "ober";
        } else if (TextoEntrante[i] === "u"){
            TextoNuevo += "ufat";           
        } else {
            TextoNuevo += TextoEntrante[i]
        }

    } 
        MostrarTexto("TextoEncriptado",TextoNuevo)
        // lo siguiente causará que los botones de [Copiar] y [Desencriptar] se habiliten y deshabiliten dependiendo del valor de la caja de texto.
        let Caja = TextoNuevo;
        let botonCopiar = document.getElementById("Copiar");
        let botonDes = document.getElementById("Desencriptar");
        //Boton de Copiar //
        if (Caja !== ""){
            botonCopiar.removeAttribute("disabled")
        } else {
            botonCopiar.setAttribute("disable", true)
        }
        // Boton desencriptar//
        if (Caja !== ""){
            botonDes.removeAttribute("disabled")
        } else {
            botonDes.setAttribute("disabled", true)
        }
}   

//Con esta funcion vamos a desencriptar el mensaje que el usurio coloce // 
function TextoUsuarioDesencriptado(){
    const TextoEntrante = document.getElementById('input').value;
    var TextoNuevo = ""
    

    for(let i = 0; i < TextoEntrante.length; i++){
        if (TextoEntrante[i] === "e"){
            TextoNuevo += "e"
            i+=4    
        } else if (TextoEntrante[i] === "i"){
            TextoNuevo += "i";
            i+=3
        } else if (TextoEntrante[i] === "a"){
            TextoNuevo += "a";
            i+=1
        } else if (TextoEntrante[i] === "o"){
            TextoNuevo += "o";
            i+=3
        } else if (TextoEntrante[i] === "u"){
            TextoNuevo += "u";
            i+=3           
        } else {
            TextoNuevo += TextoEntrante[i]
        }

    } 

MostrarTexto("TextoEncriptado",TextoNuevo)
}

//con esta funcion vamos a copiar (un ctrl + c) desde un boton el contenido de nuestra caja de texto (donde se muestra el mensaje encritado/Desencriptado)
function copiar(){
    var Texto = document.getElementById("TextoEncriptado").value;
    navigator.clipboard.writeText(Texto);


}

