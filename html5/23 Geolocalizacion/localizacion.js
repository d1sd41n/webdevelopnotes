

function comenzar() {
	
	var miboton = document.getElementById("dame_ubicacion");
	miboton.addEventListener("click", obtener, false);
}

function obtener(){
	var parametros = {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000};
	navigator.geolocation.getCurrentPosition(mostrar_posicion, gestion_errores, parametros);
}


function mostrar_posicion(posicion){
	var ubicacion = document.getElementById("ubicacion");
	
	var miubicacion = "";
	
	miubicacion += "Latitud: " + posicion.coords.latitude +"<br>";
	miubicacion += "Longitud: " + posicion.coords.longitude +"<br>";
	miubicacion += "Exactitud: " + posicion.coords.accuracy +"<br>";
	
	
	ubicacion.innerHTML = miubicacion;
}


 function gestion_errores(error){
//	alert("ha habido un error" + error.code+ " "+ error.message);
	 if( error.code == 1){
		 alert("acepta el uso de la geolocalizacion");
	 }
}

window.addEventListener("load", comenzar, false);