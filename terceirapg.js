const inputDolar = document.getElementById('valorDolar');
const btnConverter = document.getElementById('btnConverter');
const divResultado = document.getElementById('resultado');

const TAXA_CAMBIO = 5.25;

function converterMoeda() {
    const valorDolar = Number(inputDolar.value);

    if (inputDolar.value === "" || valorDolar < 0) {
        alert("Por favor, digite um valor em dólar válido!");
        return;
    }

    const valorReal = valorDolar * TAXA_CAMBIO;

    const dolarFormatado = valorDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const realFormatado = valorReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    divResultado.innerHTML = `${dolarFormatado} equivale a <br><strong>${realFormatado}</strong>`;
    divResultado.style.display = "block";
}

btnConverter.addEventListener('click', converterMoeda);

inputDolar.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        converterMoeda();
    }
});