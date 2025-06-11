const dataInicio = new Date("2023-10-01T22:00:00");

function atualizarContador() {
  const agora = new Date();
  let diff = agora - dataInicio;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  let anos = agora.getFullYear() - dataInicio.getFullYear();
  let meses = agora.getMonth() - dataInicio.getMonth();
  let diaMes = agora.getDate() - dataInicio.getDate();

  if (diaMes < 0) {
    meses--;
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    diaMes += mesAnterior.getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  const h = (agora.getHours() - dataInicio.getHours() + 24) % 24;
  const m = (agora.getMinutes() - dataInicio.getMinutes() + 60) % 60;
  const s = (agora.getSeconds() - dataInicio.getSeconds() + 60) % 60;

  document.getElementById("contador").innerHTML = `
    <span>💖 ${anos} ano(s)</span>
    <span> ${meses} mês(es)</span>
    <span> ${diaMes} dia(s)</span><br/>
    <span>⏰ ${h.toString().padStart(2, "0")}h</span> :
    <span>${m.toString().padStart(2, "0")}min</span> :
    <span>${s.toString().padStart(2, "0")}s</span>
  `;
}

setInterval(atualizarContador, 1000);
atualizarContador();
