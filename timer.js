function iniciarCronometro() {
    // Define o tempo limite para 2 minutos
    var tempoLimite = 2 * 60;

    // Inicia o cronômetro
    var segundosRestantes = tempoLimite;
    var intervalo = setInterval(function() {
        // Decrementa o tempo restante
        segundosRestantes--;

        // Atualiza a exibição do cronômetro
        document.getElementById("cronometro").innerHTML = segundosRestantes;

        // Verifica se o tempo acabou
        if (segundosRestantes <= 0) {
            // O tempo acabou
            clearInterval(intervalo);
            alert("O tempo acabou!");
        }

        let cronometro = document.getElementById('clo').innerHTML = `<strong> ${segundosRestantes} </strong>`;
    }, 1000);
}

iniciarCronometro();

