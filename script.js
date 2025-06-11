function pluralizar(valor, singular, plural) {
  return `${valor} ${valor === 1 ? singular : plural}`;
}

function atualizarContador() {
  const inicioNamoro = new Date('2023-10-01T22:00:00'); // ajuste a data do namoro
  const agora = new Date();

  let anos = agora.getFullYear() - inicioNamoro.getFullYear();
  let meses = agora.getMonth() - inicioNamoro.getMonth();
  let dias = agora.getDate() - inicioNamoro.getDate();

  if (dias < 0) {
    meses--;
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += ultimoMes.getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  const texto = [
    pluralizar(anos, 'ano', 'anos'),
    pluralizar(meses, 'mês', 'meses'),
    pluralizar(dias, 'dia', 'dias'),
    pluralizar(horas, 'hora', 'horas'),
    pluralizar(minutos, 'minuto', 'minutos'),
    pluralizar(segundos, 'segundo', 'segundos')
  ].join(', ');

  document.getElementById('contador').textContent = texto;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();
