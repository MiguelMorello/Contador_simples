let contador = 0;

const contadorDisplay = document.getElementById('contador');
const botaoIncrementar = document.getElementById('incrementar');
const botaoDecrementar = document.getElementById('decrementar');

botaoIncrementar.addEventListener('click', () => {
    contador++;
    atualizarContador();
});

botaoDecrementar.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
    }
    atualizarContador();
});

function atualizarContador() {
    contadorDisplay.textContent = contador;
}
