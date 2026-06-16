// Aguarda o HTML carregar completamente antes de executar
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona os elementos da página
    const btnConverter = document.getElementById('btnConverter');
    const cmInput = document.getElementById('cmInput');
    const resultBox = document.getElementById('resultBox');
    const resultadoText = document.getElementById('resultadoText');

    // Adiciona o evento de clique ao botão
    btnConverter.addEventListener('click', function() {
        const cmValue = parseFloat(cmInput.value);

        // Validação: verifica se o campo está vazio ou não é um número
        if (isNaN(cmValue)) {
            alert("Por favor, digite um valor válido em centímetros.");
            return;
        }

        // Realiza o cálculo (1 metro = 100 centímetros)
        const metros = cmValue / 100;

        // Formata o número substituindo o ponto por vírgula (padrão brasileiro)
        resultadoText.innerText = metros.toString().replace('.', ',');
        
        // Torna a caixa de resultado visível
        resultBox.style.display = 'block';
    });
});