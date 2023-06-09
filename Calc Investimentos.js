const valorInicialInput = document.getElementById("initial-value");
const valorAtualInput = document.getElementById("current-value");
const quantidadeDiasInput = document.getElementById("investment-days");
const calcularButton = document.querySelector(".button");
const resetarButton = document.querySelector(".button-clear");
const resultado = document.getElementById("result-container");

function calcularRendimento() {
  const valueInvesting = Number(valorInicialInput.value);
  const balance = Number(valorAtualInput.value);
  const times = Number(quantidadeDiasInput.value);


  if (!valueInvesting || !balance || !times) {
    resultado.innerHTML = "Por favor, preencha todos os valores.";
    return;
  }

  let total = valueInvesting + balance;
  let profit = total - valueInvesting;
  let tax = (profit / valueInvesting * 100);
  let taxDay = tax / times;

  resultado.innerHTML = `Saldo atual= $${total.toFixed(2)} dolares<br> ${tax.toFixed(2)}% de lucro coletado.<br>Estimativa diária: ${taxDay.toFixed(2)}% ao dia.`;
}


function resetarInputs() {
  valorInicialInput.value = "";
  valorAtualInput.value = "";
  quantidadeDiasInput.value = "";
  resultado.innerHTML = "";
}

calcularButton.addEventListener("click", calcularRendimento);
resetarButton.addEventListener("click", resetarInputs);
