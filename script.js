// Calcula a economia diária
function calcularEconomiaDiaria(consumoDiario, tarifaEnergia, eficiencia) {
  return consumoDiario * tarifaEnergia * (eficiencia / 100);
}

// Calcula a economia mensal
function calcularEconomiaMensalValor(economiaDiaria, diasMes) {
  return economiaDiaria * diasMes;
}

// Função composta para calcular a economia mensal
function calcularEconomiaMensal() {
  // Obtém os valores inseridos nos campos de entrada
  const consumoDiario = parseFloat(document.getElementById("consumoDiario").value);
  const tarifaEnergia = parseFloat(document.getElementById("tarifaEnergia").value);
  const eficiencia = parseFloat(document.getElementById("eficiencia").value);
  const diasMes = parseInt(document.getElementById("diasMes").value);

  // Valida as entradas inseridas pelo usuário
  if (isNaN(consumoDiario) || isNaN(tarifaEnergia) || isNaN(eficiencia) || isNaN(diasMes)) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
  }

  // Aplica as funções compostas
  const economiaDiaria = calcularEconomiaDiaria(consumoDiario, tarifaEnergia, eficiencia);
  const economiaMensal = calcularEconomiaMensalValor(economiaDiaria, diasMes);

  // Exibe o resultado e torna a div visível
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = `Economia Mensal: R$ ${economiaMensal.toFixed(2)}`;
  resultadoDiv.style.display = "block"; // Torna a div visível
}
