
var zonadatos;

function iniciar() {
	var boton = document.getElementById("boton");
	
	boton.addEventListener("click", enviar, false);
	
	
	trabajador = new SharedWorker("trabajador.js");
	
	trabajador.port.addEventListener("message", recibido, false);
	
	trabajador.port.start();
	
}

function enviar(){
	var nombre = document.getElementById("nombre").value;
	
	
	trabajador.port.postMessage(nombre);
	
}

function recibido(e){
	
	alert(e.data);
	
}




window.addEventListener("load", iniciar, false);