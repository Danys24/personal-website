
let color = document.getElementById("color");
let fondo = document.querySelector(".about");

/*
color.addEventListener('click', () => {
	fondo.style.background = `rgb(${Cred},${Cgreen},${Cblue})`;
})
*/

function cambiarColor(){

	let Cred = (Math.random()*250);
	let Cgreen = (Math.random()*250);
	let Cblue = (Math.random()*250);
	let opa = Math.random();


	fondo.style.background = `rgba(${Cred},${Cgreen},${Cblue},${opa})`;

}