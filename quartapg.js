const inputNumero = document.getElementById('numInput');
const btnGerar = document.getElementById('btnGerar');
const divResultado = document.getElementById('resultado');

function converterTempo() {
    // 1. Pegamos o valor como string primeiro para validar
    const valorInput = inputNumero.value.trim();

    // 2. Validação: verifica se está vazio ou se NÃO é um número (isNaN)
    if (valorInput === "" || isNaN(valorInput)) {
        alert("Por favor, digite um número válido!");
        return;
    }

    // 3. Agora que está validado, transformamos em número com segurança
    const minutos = Number(valorInput);

    divResultado.innerHTML = "";
    divResultado.style.display = "block";

    const segundos = minutos * 60;
    
    divResultado.innerHTML = `
        <div class="linha-tabuada">
            ${minutos} minutos equivalem a:
        </div>
        <div class="linha-tabuada">
            <strong>${segundos} segundos</strong>
        </div>
    `;
}

btnGerar.addEventListener('click', converterTempo);

inputNumero.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        converterTempo();
    }
});