
var zonadatos;

function iniciar() {
	
	zonadatos = document.getElementById("zonadatos");
	var boton = document.getElementById("boton");
	
	boton.addEventListener("click", enviar_datos, false);
	
}

function enviar_datos(){
	el_nombre = document.getElementById("elnombre");
	el_apelliso = document.getElementById("elapellido");
	
	var datos = new FormData();
	
	datos.append("nombre", el_nombre);
	datos.append("apellido", el_apelliso);
	
	var url = "procesar.php";
	
	var solicitud = new XMLHttpRequest();
	
	solicitud.addEventListener("load", mostrar, false);
	
	solicitud.open("POST", url, true);
	
	solicitud.send(datos);
}





function mostrar(e){
	zonadatos.innerHTML = e.target.responseText;
	
}



window.addEventListener("load", iniciar, false);