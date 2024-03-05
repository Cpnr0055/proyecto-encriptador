// matrices de ID de cadena (minusculas)

let matrizPermitidos = [
    32,     //" "
    97,     //a
    98,     //b 
    99,     //c
    100,    //d
    101,    //e
    102,    //f   
    103,    //g
    104,    //h
    105,    //i
    106,    //o
    107, //
    108, //
    109, //
    110, //
    111, //
    112, //
    113, //
    114, //
    115, //
    116, //
    117, //
    118, //
    119, //
    120,     //
    121,     //
    122,     //
]; 

//prototipos (fallidos) de funciones de validacion de Inputs

function validacion(datos){
    for(indice in matrizPermitidos2){
        //console.log(indice,datos);
        if(datos.includes(matrizPermitidos2[indice])){
            
            //datos[indice] = matrizPermitidos2[indice];
            datos = datos.replaceAll(matrizPermitidos2[indice]);
            //console.log(datos);
            return true;
            //break;
            
        }  //else 
        console.log("dato no permitido")
           //return false  
           //break;  
    }
    return false;
     
}


function validacion2(datos){
    let notIncludes = [];
    //console.log(notIncludes);
    for(idx in datos){
        for(indice in matrizPermitidos2){
            if(!datos[idx].includes(matrizPermitidos2[indice])){
                
                //notIncludes = notIncludes.push(matrizPermitidos2[indice]);
                notIncludes[idx] = matrizPermitidos2[indice]; 
                console.log(notIncludes);
                //console.log(datos);  
                return false;
                //break;
            } return true;
            
        }  
        /* else {
          datos[indice] = matrizPermitidos2[indice];
          return datos;
        } */
             
    }
    return datos;
     
}

function validacion3(datos){  

    for (let i=0; i<=datos.length-1; i++){
       // console.log(i);
        for (let j=0; j<=matrizPermitidos2.length-1; j++){
            if (datos[i]===matrizPermitidos2[j]){
                datos[i] = matrizPermitidos[j];
                //console.log(valor);
                //console.log("Hola"); 
                //console.log(matrizPermitidos[j]);
                return true; 
            }   else if (datos[i]!==matrizPermitidos2[j]){
                    console.log("Valor no permitido");
                    //break;
                }       
        }            
    } 
    return datos;     
}

function validacion4(datos){  

    for (let i=0; i<=datos.length-1; i++){
       // console.log(i);
        for (let j=0; j<=matrizPermitidos2.length-1; j++){
            if (datos[i]!==matrizPermitidos2[j]){
                datos[i] = matrizPermitidos[j];
               
                return false; 
            }   /* else if (datos[i]!==matrizPermitidos2[j]){
                    console.log("Valor no permitido");
                    //break;
                }  */      
        }            
    } 
    return datos;     
}

//prototipo de funcion de btnCifrar embedida funcion de validacion (fallida)

function btnEncriptar2(){  
    
    let valor =[];                  //datos de entrada en ASCII
    let input= text_input.value;   //datos de entrada en alfanumerico
      for (let i=0; i<=input.length-1; i++){
        valor[i] = input.charCodeAt(i);
        for (let j=0; j<=matrizPermitidos.length-1; j++){
            if (valor.includes(matrizPermitidos)){
                valor = matrizPermitidos[j];
                //console.log(valor);
                console.log("Hola"); 
                console.log(matrizPermitidos[j]);
                //return; 
                    }    else {
                        console.log("Valor no permitido");
                        //break;
                        }
                    //return;   
            }
            return;
        } 
        return valor;  
     
}


//funcion copiar
function btnCopy(){
    //let output = text_output.value;
    let output = "hola";
    //console.log(output);
    let textoCopiado = async () => {
        try {
          await navigator.clipboard.writeText(output);
          console.log('Contenido copiado al portapapeles');
        } catch (err) {
          console.error('Error al copiar: ', err);
        }
      }
}