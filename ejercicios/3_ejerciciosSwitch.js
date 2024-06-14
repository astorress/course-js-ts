"use strict";
// desafio 1
const diaEjercicioSwitch = "Domingo";
switch (diaEjercicioSwitch) {
    case "Lunes":
        console.log("Es el comienzo de una nueva semana");
        break;
    case "Martes":
        console.log("Ya estamos a mitad de semana");
        break;
    case "Miercoles":
        console.log("Dia de la semana intermediaa");
        break;
    case "Jueves":
        console.log("Ya casi llegamos");
        break;
    case "Viernes":
        console.log("Es el ultimo dia de la semana");
        break;
    case "Sabado":
        console.log("Tiempo de fin de semana");
        break;
    case "Domingo":
        console.log("Relajate y recarga");
        break;
    default:
        console.log("Ese no es un dia de la semana");
}
