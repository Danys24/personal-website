
const abrirMenu = document.querySelector(".icon-menu");
const cerrar = document.getElementById("cerrar");
const menu = document.querySelector(".menu");
const listaOpciones = document.querySelectorAll("#m"); 


abrirMenu.addEventListener('click', () =>{
	menu.style.top = "0px";
});


cerrar.addEventListener('click', () =>{
	menu.style.top = "20000px";
});


listaOpciones.forEach((m) => {
	m.addEventListener('click', () => {
		menu.style.top = "20000px";
	});
});
