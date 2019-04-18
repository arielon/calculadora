var Calculadora = {
	valor: "no",
	valor2: "",
	serie: "",
	// Inicializar
	init: function () {
		this.eventoBtn('teclado')
	},

	//Metodos al presionar Boton
	eventoBtn: function (selector) {
		var teclas = document.querySelectorAll('.' + selector + ' img')
		for (i = 0; i < teclas.length; i++) {
			teclas[i].onclick = this.eventoBtnClick
		}
	},

	//Metodo para llamar funcion de Botones
	eventoBtnClick: function (event) {
		if (event.target.id == "0" || event.target.id == "1" || event.target.id == "2" || event.target.id == "3" || event.target.id == "4" || event.target.id == "5" || event.target.id == "6" || event.target.id == "7" || event.target.id == "8" || event.target.id == "9") {
			inputNumero(event.target.id)
		}
		if (event.target.id == "mas") {
			suma()
		}
		if (event.target.id == "menos") {
			resta()
		}
		if (event.target.id == "por") {
			multiplica()
		}
		if (event.target.id == "dividido") {
			divide()
		}
		if (event.target.id == "igual") {
			iguala()
		}
		if (event.target.id == "punto") {
			punto()
		}

		if (event.target.id == "on") {
			clearOn()
		}

		if (event.target.id == "sign") {
			signo()
		}

		tamano(event.target)
	}
}

function tamano(elementoDOM) {
	elementoDOM.style.transform = "scale(0.9)";
	setTimeout(function () {
		elementoDOM.style.transform = "scale(1)"
	}, 200);
}

function inputNumero(numero) {
	var pantalla = document.getElementById('display')
	if (pantalla.innerHTML.length < 8) {
		if (pantalla.innerHTML == "0" && numero != "0") {
			pantalla.innerHTML = numero
		} else if (pantalla.innerHTML != "0") {
			pantalla.innerHTML = pantalla.innerHTML + numero
		}
	}
}

function suma() {
	if (Calculadora.serie == 'XXX') {
		Calculadora.serie = ""
		Calculadora.valor = "no"
	}
	if (Calculadora.valor == "no") {
		Calculadora.serie = document.getElementById('display').innerHTML
		Calculadora.valor = "+"
	} else {
		Calculadora.serie = Calculadora.serie + Calculadora.valor + document.getElementById('display').innerHTML
		Calculadora.valor = "+"
	}
	document.getElementById('display').innerHTML = ""
}

function resta() {
	if (Calculadora.serie == 'XXX') {
		Calculadora.serie = ""
		Calculadora.valor = "no"
	}
	if (Calculadora.valor == "no") {
		Calculadora.serie = document.getElementById('display').innerHTML
		Calculadora.valor = "-"
	} else {
		Calculadora.serie = Calculadora.serie + Calculadora.valor + document.getElementById('display').innerHTML
		Calculadora.valor = "-"
	}
	document.getElementById('display').innerHTML = ""
}

function multiplica() {
	if (Calculadora.serie == 'XXX') {
		Calculadora.serie = ""
		Calculadora.valor = "no"
	}
	if (Calculadora.valor == "no") {
		Calculadora.serie = document.getElementById('display').innerHTML
		Calculadora.valor = "*"
	} else {
		Calculadora.serie = Calculadora.serie + Calculadora.valor + document.getElementById('display').innerHTML
		Calculadora.valor = "*"
	}
	document.getElementById('display').innerHTML = ""
}

function divide() {
	if (Calculadora.serie == 'XXX') {
		Calculadora.serie = ""
		Calculadora.valor = "no"
	}
	if (Calculadora.valor == "no") {
		Calculadora.serie = document.getElementById('display').innerHTML
		Calculadora.valor = "/"
	} else {
		Calculadora.serie = Calculadora.serie + Calculadora.valor + document.getElementById('display').innerHTML
		Calculadora.valor = "/"
	}
	document.getElementById('display').innerHTML = ""
}

function iguala() {
	if (Calculadora.serie == "") {
		document.getElementById('display').innerHTML = "0"
	} else if (Calculadora.serie == 'XXX') {
		Calculadora.serie = document.getElementById('display').innerHTML + Calculadora.valor2
		document.getElementById('display').innerHTML = actualizar()
		Calculadora.serie = 'XXX'
	} else {
		Calculadora.serie = Calculadora.serie + Calculadora.valor + document.getElementById('display').innerHTML
		Calculadora.valor2 = Calculadora.valor + document.getElementById('display').innerHTML
		document.getElementById('display').innerHTML = actualizar()
		Calculadora.serie = 'XXX'
	}
}

function actualizar() {
	resultado = 0
	resultado = eval(Calculadora.serie)
	return resultado.toPrecision(7)
}

function punto() {
	var existe = "1"
	var pantalla = document.getElementById('display')
	for (i = 0; i < pantalla.innerHTML.length; i++) {
		if (pantalla.innerHTML[i] == ".") {
			existe = "0"
		}
	}
	if (existe == "1" && pantalla.innerHTML.length < 6) {
		pantalla.innerHTML = pantalla.innerHTML + "."
	}
}

function clearOn() {
	var pantalla = document.getElementById('display')
	pantalla.innerHTML = "0"
	Calculadora.serie = ""
	Calculadora.valor = "no"
}

function signo() {
	var pantalla = document.getElementById('display')
	if (pantalla.innerHTML[0] = "-") {
		pantalla.innerHTML[0] = ""
	}
	if (pantalla.innerHTML.length < 8 && pantalla.innerHTML != "0") {
		pantalla.innerHTML = "-" + pantalla.innerHTML
	}
}

Calculadora.init()