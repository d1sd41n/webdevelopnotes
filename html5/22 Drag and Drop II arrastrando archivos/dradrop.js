
var soltar;


function comenzar() {
	
	soltar = document.getElementById("zonadestino");
	
	soltar.addEventListener("dragenter", entrando, false);
	
	soltar.addEventListener("dragover", function(e){
		e.preventDefault();}, false);
	
	soltar.addEventListener("drop", soltado, false);
}

function entrando(e) {
	
	e.preventDefault();
}

function soltado(e) {
	e.preventDefault();
	
	var archivos = e.dataTransfer.files;
	
	console.log(archivos);
	
	var listado = "";
	
	for(var f=0; f<archivos.length; f++){
		console.log(f, archivos[f]);
		listado += "Archivo: " + archivos[f].name + " peso: " + (archivos[f].size/1024).toFixed(2) + " Tipo: " + archivos[f].type + "<br>";
		
	}
	
	soltar.innerHTML = listado;
}




window.addEventListener("load", comenzar, false);
