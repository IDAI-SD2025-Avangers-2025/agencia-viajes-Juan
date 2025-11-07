var formulario = document.getElementById("PrecioCalculo");
var vuelo = formulario.vuelo;
var hospedaje = formulario.hospedaje;

function calcular() {
    var total = 0;
    // VUELOS
    if(vuelo.value == "sin-avion") {
        total += 999;
    }
    else if(vuelo.value == "ida") {
        total += 2499; 
    }
    else if (vuelo.value == "ida-vuelta") {
        total += 5999;
    }
    else {
        alert("Sleccione un tipo de vuelo");
        return;
    }

    //HOSPEDAJE
    if(hospedaje.value == "sin-hotel") {
        total += 499;
    }
    else if(hospedaje.value == "sencilla") {
        total += 799; 
    }
    else if (hospedaje.value == "doble") {
        total += 999;
    }
    else {
        alert("Sleccione un tipo de vuelo");
        return;
    }

    //NUMEROADULTOS
    var adultos = parseInt(formulario.adultos.value);
    total += adultos * 865;

    //NUMEROMENORES
    var menores = parseInt(formulario.menores.value);
    total += menores *437;
    //DIAS
    var dias = parseInt(formulario.diasindividual.value) || 0;
    if (formulario.diasindividual.value == 0) {
        alert("Seleccione cuantos dias quiere de vacaciones");
        total = "N/A";
    }
    else {
        total += dias * 769;
    }
    formulario.total.value = "$" + total;
}

var formulario2 = document.getElementById("PrecioCalculo2");
var destino = formulario2.destino;
var especial = formulario2.especial;

function calcular2() {
    var total = 0;
    //DESTINO
    if (destino.value == "suramerica") {
        total += 7999;
    }
    else if (destino.value == "europa") {
        total += 21999;
    }
    else if (destino.value == "africa") {
        total += 17999;
    }
    else if (destino.value == "asia") {
        total += 25999;
    }
    else if (destino.value == "norteamerica") {
        total += 12999;
    }
    else {
        alert("Seleccione un destino");
    }

    //DIAS
    var dias = parseInt(formulario2.diaspaquete.value) || 0;
    if (formulario2.diaspaquete.value == 0) {
        alert("Seleccione cuantos dias quiere en su paquete");
    }
    else {
        total += dias * 899;
    }

    //PAQUETE ESPECIAL
    if (formulario2.especial.checked) {
        total += 19999;
    }
    else {
        total += 0;
    }

    //OPCIONES EXTRA
    if (formulario2.bebidas.checked) {
        total += 699;
    }
    if (formulario2.buceo.checked) {
        total += 699;
    }
    if (formulario2.expedicion.checked) {
        total += 699;
    }
    if (formulario2.fotografias.checked) {
        total += 699;
    }
    if (formulario2.pesca.checked) {
        total += 699;
    }

    formulario2.total.value = "$" + total;
}

