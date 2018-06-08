


cifrar=()=>{ // FUNCION CIFRAR
let frase=document.getElementById("entrada").value;// llamo frase de usuario
let desplazr=document.getElementById("incre").value;// llamo los saltos

for (i=0; i<frase.length; i++){// inicializa en 0
  let cadenas = frase.charCodeAt(i);
  console.log(cadenas);

if(cadenas >=65 && cadenas <= 90){// para mayusculas ascii
  let resultado =String.fromCharCode((cadenas -65+ desplazr) %26 + 65);
  console.log(resultado);


}
}
}
