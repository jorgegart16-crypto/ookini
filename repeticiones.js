console.log("V60");
console.log("Kyoto drip");
console.log("Siphon");
console.log("Prensa Francesa");

// lista de métodos, se llama arrays
const metodos = ["V60", "Kyoto drip", "Siphon", "Prensa Francesa"];

// instrucción que recorre la lista y que hace algo en cada elemento

for (const metodo of metodos) {
    console.log(metodo);
}

console.log("Fin del programa")

// ejemplo de bucle de reservas en un día

const reservasDelDia = [2,1,2,1,2];
let totalTazas = 0;

 for (const cantidad of reservasDelDia) {
     totalTazas = totalTazas + cantidad;
 }
// ejemplo de un for que corre pero no hace lo que queremos

 for (const cantidad of reservasDelDia) {
    totalTazas = cantidad;
}

console.log(totalTazas)