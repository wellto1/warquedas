let tempoRestante = 300; // 15 minutos

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