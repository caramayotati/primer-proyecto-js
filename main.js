// Constantes para las elecciones de los jugadores
const CHOICES = ['Piedra', 'Papel', 'Tijera'];

// Variables para almacenar las elecciones de los jugadores
let agustinaChoice;
let lautaroChoice;
let tatianaChoice;

// Variable para controlar el número de rondas
const TOTAL_ROUNDS = 3;
let currentRound = 1;

// Bucle para jugar hasta el número total de rondas
while (currentRound <= TOTAL_ROUNDS) {
    // Obtener elecciones aleatorias para cada jugador
    agustinaChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    lautaroChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    tatianaChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];

    // Mostrar elecciones de los jugadores
    console.log(`\nRonda ${currentRound}:`);
    console.log(`Elección de Agustina: ${agustinaChoice}`);
    console.log(`Elección de Lautaro: ${lautaroChoice}`);
    console.log(`Elección de Tatiana: ${tatianaChoice}`);

    // Determinar el ganador
    const winConditions = {
        'Piedra': 'Tijera',
        'Tijera': 'Papel',
        'Papel': 'Piedra'
    };

    let winner = '';

    // Crear un conjunto con las elecciones para verificar si todas son iguales
    const uniqueChoices = new Set([agustinaChoice, lautaroChoice, tatianaChoice]);

    if (uniqueChoices.size === 1) {
        // Empate total, todas las elecciones son iguales
        console.log('Empate total, todos eligieron lo mismo.');
        console.log('Reiniciando la ronda...');
    } else {
        // Determinar si hay un único ganador
        if ((winConditions[agustinaChoice] === lautaroChoice && winConditions[agustinaChoice] === tatianaChoice) ||
            (winConditions[lautaroChoice] === agustinaChoice && winConditions[lautaroChoice] === tatianaChoice) ||
            (winConditions[tatianaChoice] === agustinaChoice && winConditions[tatianaChoice] === lautaroChoice)) {

            if (winConditions[agustinaChoice] === lautaroChoice && winConditions[agustinaChoice] === tatianaChoice) {
                winner = 'Agustina';
            } else if (winConditions[lautaroChoice] === agustinaChoice && winConditions[lautaroChoice] === tatianaChoice) {
                winner = 'Lautaro';
            } else if (winConditions[tatianaChoice] === agustinaChoice && winConditions[tatianaChoice] === lautaroChoice) {
                winner = 'Tatiana';
            }

            // Mostrar resultados de la ronda
            if (winner) {
                console.log(`Ganador de esta ronda: ${winner}`);
                console.log('GANASTEEEEEEEE');
                
                // Mensaje para los jugadores que perdieron
                if (winner === 'Agustina') {
                    console.log('Lautaro y Tatiana: perdiste, segui participando');
                } else if (winner === 'Lautaro') {
                    console.log('Agustina y Tatiana: perdiste, segui participando');
                } else if (winner === 'Tatiana') {
                    console.log('Agustina y Lautaro: perdiste, segui participando');
                }
                break; // Termina el juego después de un ganador
            }
        } else {
            console.log('No hay un ganador claro, intenta de nuevo.');
        }
    }

    currentRound++;
}
