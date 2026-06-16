const inputNumero = document.getElementById('numInput');
const btnGerar = document.getElementById('btnGerar');
const divResultado = document.getElementById('resultado');

function converterTempo() {
    const minutos = Number(inputNumero.value);

    if (inputNumero.value === "") {
        alert("Por favor, digite um número válido!");
        return;
    }

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