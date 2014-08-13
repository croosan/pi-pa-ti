//function 
function aleatorio1 (max,min) {
	var numero = Math.floor(Math.random() * (max - min +1)+ min);
	return numero;
}
//var
var piedra    = 0;
var papel     = 1;
var tijera    = 2;
var opciones0 =["piedra","papel","tijera"];
var aleatorio = aleatorio1(2,0);

// entrada de texto
var opciones = prompt ("elige un valor \n entre 0 y 2.", 0);

//otros
alert("el computador eligio: " + opciones0[aleatorio]);
document.write (opciones0[aleatorio] + " ");

// condicionaleishon
if (opciones > 2) {
	alert ("PERDISTE. elige entre el 0 y el 2");
}
else{
	alert ("elejiste :" + opciones0[opciones]);
	document.write (opciones0[opciones]);
}

if (opciones==aleatorio) {
	alert("empate!!!");
}

else if ((opciones == 0 && aleatorio == 2)||(opciones == 1 && aleatorio == 0)||(opciones == 2 && aleatorio == 1)) {
	alert("GANASTE!!! :3");
}else{
	alert("perdiste :c");
}
