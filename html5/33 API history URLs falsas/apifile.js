
var zonadatos;

function iniciar() {
	
	zonadatos = document.getElementById("zonadatos");
	
	url = document.getElementById("url");
	
	url.addEventListener("click", cambiaurl, false);
	
	
	window.addEventListener("popstate", nuevaurl, false);
	
	window.history.replaceState(1, null);
}

function cambiaurl() {
	
//	zonadatos.innerHTML = "Estas en la pag 2";
//	
//	window.history.pushState(null, null, "pagina2.html");
	
	mostrar(2);
	
	window.history.pushState(2, null, "pagina2.html");

}

function nuevaurl(){
	
	mostrar(e.state);
	
}


function mostrar(actual){
	
	zonadatos.innerHTML = "Estas en la pag " + actual;
	
}

window.addEventListener("load", iniciar, false);