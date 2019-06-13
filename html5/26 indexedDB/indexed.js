
var db;
var zonadatos;

function iniciar() {
	
//	console.log(33344)
	
	zonadatos = document.getElementById("zonadatos");
	var boton = document.getElementById("grabar");
	
	boton.addEventListener("click", agregarobjeto, false);
	
	var solicitud = indexedDB.open("mibase2");
	
	solicitud.onsuccess = function(e){
		bd = e.target.result;
	}
	
	solicitud.onupgradeneeded = function(e){
		bd = e.target.result;
		bd.createObjectStore("gente", {keyPath: "clave"});
		
	}
	
}

function agregarobjeto() {
//	console.log(1111)
	var clave = document.getElementById("clave").value;
	
	var titulo = document.getElementById("texto").value;
	var fecha = document.getElementById("fecha").value;
//	console.log(clave, titulo, fecha)
	var transaccion = bd.transaction(["gente"], "readwrite");
	
//	console.log(transaccion)
	
	var almacen = transaccion.objectStore("gente");
	
//	console.log(almacen)
	
	var agregar = almacen.add({clave: clave, titulo: titulo, fecha: fecha});
	
	agregar.addEventListener("success", mostrar, false);
	
	document.getElementById("clave").value = "";
	document.getElementById("texto").value = "";
	document.getElementById("fecha").value = "";
	
}

function mostrar() {
	
	zonadatos.innerHTML = "";
	var transaccion = bd.transaction(["gente"], "readonly");
	var almacen = transaccion.objectStore("gente");
	
	var cursor = almacen.openCursor();
	
	cursor.addEventListener("success", mostrarDatos, false);
	
}


function mostrarDatos(e) {
	
	var cursor = e.target.result;
	
	if(cursor){
		zonadatos.innerHTML += "<div>" + cursor.value.clave + " - " + cursor.value.titulo +
			" - " + cursor.value.fecha + "</div>";
		
		cursor.continue();
	}
}



window.addEventListener("load", iniciar, false);