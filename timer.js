let level = 'expert'; // variável que será modificada na seleção de dificuldade
let tempoRestante = 0; 

if (level == 'expert') {
    tempoRestante = 600; // 10 minutos
} else if (level == 'hard') {
    tempoRestante = 300; // 5 minutos
} else if (level == 'normal') {
    tempoRestante = 120; // 2 minutos
} else if (level == 'easy') {
    tempoRestante = 60;
}

let cronometro = setInterval(function() {
    let minutos = Math.floor(tempoRestante / 60);
    let segundos = tempoRestante % 60;

    document.getElementById('cronus').textContent = 
        (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;

    if (tempoRestante <= 0) {
        clearInterval(cronometro);
    } else {
        tempoRestante--;
    }
}, 1000);

