let level = 'expert'; // variável que será modificada na seleção de dificuldade

if (level == 'expert') {

    let tempoRestante = 600; // 10 minutos

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

} else if (level == 'hard') {

    let tempoRestante = 300; // 5 minutos

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

} else if (level == 'normal') {

    let tempoRestante = 120; // 2 minutos

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

} else if (level == 'easy') {

    let tempoRestante = 60; // 1 minutos

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

}