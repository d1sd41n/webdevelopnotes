// java script document
var alert;
var window;
var document;


function ejecuta() {
	//	document.querySelector("#principal p:first-child").onclick=saludo;
	var elementos = document.querySelectorAll("#principal p, span")
	console.log(elementos.length);
	console.log(elementos);
	for (var i = 0; i < elementos.length; i++) {
		elementos[i].onclick = saludo;
		console.log(elementos[i],i);
	}
}

function saludo() {
	alert("que hay de nuevo");
}


window.onload = ejecuta;
