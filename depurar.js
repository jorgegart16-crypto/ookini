// "hazme una función para mi sitio web de café que reciba la cantidad de tazas de un cliente quiere reservar y me diga si pueder reservar o no, la regla es que no se puede reservar más de 2 tazas por persona."

function puedeReservar(cantidad) {
    if (cantidad > 2) {
        return false;
    } 
    return true;
}