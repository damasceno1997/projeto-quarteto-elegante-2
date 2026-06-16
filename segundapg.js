// Captura os elementos do HTML pelo ID
const inputKelvin = document.getElementById('numero'); 
const btnGerar = document.getElementById('btnGerar');
const divResultado = document.getElementById('resultado');

if (inputKelvin && btnGerar && divResultado) {

    function converterTemperatura() {
        // Pega o valor digitado
        const valorInserido = inputKelvin.value.trim();

        // Validação se o campo estiver vazio
        if (valorInserido === "") {
            alert("Por favor, digite um valor de temperatura válido!");
            return;
        }

        const kelvin = Number(valorInserido);

        // Regra física: O zero absoluto é 0K (-273.15°C). Não existe temperatura menor que isso.
        if (kelvin < 0) {
            alert("A temperatura em Kelvin não pode ser menor que 0 (Zero Absoluto)!");
            return;
        }

        // Realiza o cálculo matemático da conversão
        const celsius = kelvin - 273.15;

        // Limpa e exibe a div de resultado
        divResultado.innerHTML = "";
        divResultado.style.display = "block";

        // Exibe o resultado formatado com 2 casas decimais usando .toFixed(2)
        divResultado.innerHTML = `
            <strong>${kelvin} K</strong> é igual a <strong>${celsius.toFixed(2)} °C</strong>
        `;
    }

    // Evento de clique no botão
    btnGerar.addEventListener('click', converterTemperatura);

    // Evento para funcionar ao pressionar a tecla Enter
    inputKelvin.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            converterTemperatura();
        }
    });
}