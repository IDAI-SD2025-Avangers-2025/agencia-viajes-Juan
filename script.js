var formulario = document.getElementById("PrecioCalculo");
var formulario2 = document.getElementById("PrecioCalculo2");
var vuelo = formulario.vuelo;
var hospedaje = formulario.hospedaje;
var cantidad = formulario.diasindividual.value;

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
    if (formulario.adultos.value == "1") {
        total += 865;
    }
    else if(formulario.adultos.value == "2") {
        total += 865 * 2;
    }
    else if(formulario.adultos.value == "3") {
        total += 865 * 3;
    }
    else if(formulario.adultos.value == "4") {
        total += 865 * 4;
    }
    else if(formulario.adultos.value == "5") {
        total += 865 * 5;
    }
    else {
        alert("Seleccione el numero de adultos");
        return;
    }

    //NUMEROMENORES
    if (formulario.menores.value == "0") {
        total += 0;
    }
    else if(formulario.menores.value == "1") {
        total += 437;
    }
    else if(formulario.menores.value == "2") {
        total += 437 * 2;
    }
    else if(formulario.menores.value == "3") {
        total += 437 * 3;
    }
    else if(formulario.menores.value == "4") {
        total += 437 * 4;
    }
    else {
        alert("Seleccione el numero de menores");
        return;
    }
    total = total * cantidad;
    //DIAS
    formulario.total.value = total;
}