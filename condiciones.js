// datos de la condición
const cupoCata = 8;
const inscritos = 8;

// condicional de cata abierta o llena
// si el número de cupos es mayor que el número de inscritos "Hay cupos, abrir reserva"
// si no devuelve "Cata Llena, ofrecer lista de espera"

if (cupoCata > inscritos) {
    console.log("Hay cupos, abrir reserva");
} else {
    console.log("Cata Llena, ofrecer lista de espera");
}