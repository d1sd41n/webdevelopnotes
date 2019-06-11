

function comenzar() {
	
	var boton = document.getElementById("grabar");
	
	boton.addEventListener("click", itemNuevo, false);
}


function itemNuevo(){
	
	clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;
	
	localStorage.setItem(clave, valor);
	
	leer_mostrar(clave);
	
	
	document.getElementById("clave").value = "";
	document.getElementById("valor").value = "";
	
}


function leer_mostrar(clave){
	
	var zonadatos = document.getElementById("zonadatos");
	
	zonadatos.innerHTML = "<div><button onclick='eliminarTodo()'>Eliminar todo</button></div>";
	
	
//	var elvalor = sessionStorage[clave];
	
	
//	zonadatos.innerHTML = "";
	
	for(i=0; i<localStorage.length; i++){
		var clave = localStorage.key(i);
		var elvalor = localStorage.getItem(clave);
		
		zonadatos.innerHTML += "<div>Clave: " + clave + "-- Valor: " + elvalor + 
			"<br><button onclick='eliminarItem(\"" + clave + "\")'>Eliminar item</button></div>";
	}
	
}




function eliminarTodo(){
	
	if(confirm("Estas seguro?")){
		localStorage.clear();
		leer_mostrar();
	}
	
}


function eliminarItem(clave){
	
	if(confirm("Estas seguro?")){
		localStorage.removeItem(clave);
		leer_mostrar();
	}
	
}


window.addEventListener("load", comenzar, false);