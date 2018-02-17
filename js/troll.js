function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
					c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
			}
	}
	return "";
}

function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

function trollMsg() {
	var tt = getCookie("trolled_times");
	tt = parseInt(tt);
	if (tt == 0)
		alert("Lo sentimos, este link aún no esta disponible.");
	if (tt == 1)
		alert("Siento comunicarte que este tampoco, pero estamos trabajando en ello.");
	if (tt == 2)
		alert("Empiezas a ser un poco pesado con tanto click");
	if (tt == 3)
		alert("¿De verdad es necesario probarlos todos?");
	if (tt == 4)
		alert("Me estás cansando, prueba en otra pestaña.");
	if (tt == 5)
		alert("A ver, cabeza de huevo, si no iban en la otra pestaña, no van a ir en esta, te han engañado");
	if (tt == 6)
		alert("¿No te cansas nunca?");
	if (tt == 7)
		alert("De verdad, haz algo útil con tu vida");
	if (tt == 8)
		alert("Oye, le estás dedicando más tiempo a esto que a estudiar");
	if (tt == 9)
		alert("Bueno, el que va a suspender eres tu...");
	if (tt == 10)
		alert("Si buscas un easter egg, no los hay (pesado)");
	if (tt == 11)
		alert("Me has agotado el texto, ya no hay nada más");
	if (tt == 12)
		alert("Que no era broma, no hay nada más");
	if (tt == 13)
		alert("¡N O   H A Y   N A D A   M Á S!");
	if (tt == 14)
		alert("¡N O   H A Y   N A D A   M Á S!");
	if (tt == 15)
		alert("¡N O   H A Y   N A D A   M Á S!");
	if (tt == 16)
		alert("¡N O   H A Y   N A D A   M Á S!");
	if (tt == 17)
		alert("O quizás si...");
	if (tt == 18)
		alert("Érase una vez...");
	if (tt == 19)
		alert("Es broma no voy a contarte un cuento (aún no estamos tan aburridos)");
	if (tt == 20)
		alert("Esto se está volviendo un vicio hehe");
	if (tt == 21)
		alert("Como veo que no paras voy a empezar a molestarte...");
	if (tt == 22)
		alert("Y lo digo muy enserio eeh");
	if (tt == 23)
		alert("De verdad, por tu propio bien, para ya");
	if (tt == 24)
		alert("Bueno que sepas que te avisé, tu te lo has buscado");
	if (tt == 25)
		alert("Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
	if (tt == 26)
		alert("¿Has llegado a leer la frase en castellano que había entre todo ese latín?");
	if (tt == 27)
		alert("Pues te quedas con la intriga, tendrás que volver a leerlo todo para volver alli");
	if (tt == 28)
		alert("Bueno, como no paras (y además te he avisado) empiezo con el SPAM, diviertete");
	if (tt == 29)
		alert("Aquí deberíamos enviarte a una web que aun no hemos hecho hehe");
	if (tt == 30)
		alert("Aquí también");
	if (tt == 31)
		alert("¿Todavía no te das por vencido?");
	if (tt == 32)
		alert("Pues va, te lo mereces...");
	if (tt >= 33)
		$(location).attr('href', 'http://www.nyan.cat/')
	setCookie("trolled_times", tt+1);
};

$(document).ready(function(){
	var tt = getCookie("trolled_times");

	if (tt == "") {
		setCookie("trolled_times", 0);
	}
});
