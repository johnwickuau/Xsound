function sorteio() {
    const numeroSorteio = parseInt(document.getElementById('ns').value);
    const resultadoDiv = document.getElementById('resultado');
    
    if (numeroSorteio && numeroSorteio >= 1 && numeroSorteio <= 100) {
        const sorteado = Math.floor(Math.random() * 100) + 1;
        if (sorteado === numeroSorteio) {
            resultadoDiv.innerHTML = `O número sorteado é: ${sorteado} - 🎉 PARABÉNS PANGARÉ! Você acertou! 🎉`;
        } else {
            resultadoDiv.innerHTML = `O número sorteado é: ${sorteado}`;
        }
    } else {
        resultadoDiv.innerHTML = 'Por favor, insira um número válido entre 1 e 100.';
    }
}
document.getElementById('sortear').addEventListener('click', sorteio);
document.getElementById('ns').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sorteio();
    }

});

