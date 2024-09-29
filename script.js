// Função para calcular a economia diária
function calcularEconomiaDiaria(consumoDiario, tarifaEnergia, eficiencia) {
    return consumoDiario * tarifaEnergia * (eficiencia / 100);
  }

  // Função para calcular a economia mensal
  function calcularEconomiaMensalValor(economiaDiaria, diasMes) {
    return economiaDiaria * diasMes;
  }

  // Função composta para calcular a economia mensal
  function calcularEconomiaMensal() {
    // Obter valores dos campos de entrada
    const consumoDiario = parseFloat(document.getElementById("consumoDiario").value);
    const tarifaEnergia = parseFloat(document.getElementById("tarifaEnergia").value);
    const eficiencia = parseFloat(document.getElementById("eficiencia").value);
    const diasMes = parseInt(document.getElementById("diasMes").value);
    
    // Validar entradas
    if (isNaN(consumoDiario) || isNaN(tarifaEnergia) || isNaN(eficiencia) || isNaN(diasMes)) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    // Aplicar as funções compostas
    const economiaDiaria = calcularEconomiaDiaria(consumoDiario, tarifaEnergia, eficiencia);
    const economiaMensal = calcularEconomiaMensalValor(economiaDiaria, diasMes);
    
    // Exibir o resultado
    document.getElementById("resultado").innerText = `Economia Mensal: R$ ${economiaMensal.toFixed(2)}`;
  }